let universe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let A = [1, 2, 3];
let B = [1, 2, 4, 5];
let C = [2, 3, 4];
let D = [5, 6, 7, 8, 9, 10];
let E = [3, 5, 9, 10];

let op1 = union(intersection(A, B), intersection(A, C));
let op2 = union(B, E);
let op3 = diference(B, E, true);
let op4 = intersection(diference(universe, A), union(B, C));
let op5 = union(diference(universe, B), intersection(A, B));

let results = [op1, op2, op3, op4, op5];
results.forEach((set, index) => {
  console.log("=".repeat(15));
  console.log(index + 1);
  console.log(`operation result: ${set}`);
  let info = buildInfo(universe, set);
  console.log("Funcion caracteristica");
  console.table(info.funtion.str1);
  console.table(info.funtion.str2);
  console.log(`arreglo binario: ${info.binaryArr}`);
});


function buildInfo(U, set) {
  let str1 = "1 si x => ";
  let str2 = "0 si x => ";
  let binaryArr = []
  U.forEach((element, index) => {
    if (set.includes(element)) {
      binaryArr.push(1);
      str1 += `${index + 1},`;
    } else {
      binaryArr.push(0);
      str2 += `${index + 1},`;
    }
  });
  let info = {
    funtion: {
      str1,
      str2,
    },
    binaryArr
  };
  return info;
}


function diference(a, b, simetric = false) {
  let result = [];
  a.forEach(element => {
    if (!b.includes(element)) {
      result.push(element);
    }
  });
  if (simetric) {
    let BdiffA = diference(b, a);
    result = result.concat(BdiffA);
  }
  result = sort(result);
  return result;
}

function intersection(a, b) {
  let result = [];
  a.forEach(element => {
    if (b.includes(element)) {
      result.push(element);
    }
  })
  result = sort(result);
  return result;
}

function union(a, b) {
  let result = [];
  let addIfNew = (element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  a.forEach(addIfNew);
  b.forEach(addIfNew);
  result = sort(result);
  return result;
}

function sort(arr) {
  return arr.sort((a, b) => a > b ? 1 : -1);
}

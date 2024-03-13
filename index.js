let abc = "abcdefghijklmnopqrtsuvwxyz";
let universe = abc.split('');

let B = "abcd".split('');
let C = "cdfg".split('');

let test = diference(B,C);

function diference(a,b,simetric=false) {
  let result = []; 
  a.forEach(element =>{
    if(!b.includes(element)){
      result.push(element);
    }
  });
  if(simetric){
      let BdiffA = diference(b,a); 
      result = result.concat(BdiffA); 
  }
  result = sort(result);
  return result;
}

function intersection(a,b) {
  let result = [];
  a.forEach(element =>{
    if(b.includes(element)){
      result.push(element);
    }
  }) 
  result = sort(result);
  return result;
 
}

function union(a,b){
  let result = [];
  a.forEach(element => {if(!result.includes(element)){
      result.push(element);
    }
  });
  b.forEach(element => {
    if(!result.includes(element)){
      result.push(element);
    }
  });
  result = sort(result);
  return result;
}

function sort(arr) {
  return arr.sort((a,b) => a>b?1:-1);
}

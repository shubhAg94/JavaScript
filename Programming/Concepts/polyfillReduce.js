Array.prototype.myReduce = function(fun, init){
    const arr = this;
    
    let res = 0;
    let accu1 = init;
    
    for(let i = 0; i < arr.length; i++){
      res = fun(accu1, arr[i]);
      accu1 = res;
    }
    
    return res;
  }
  
  var arr = [1,2,3,4];
  console.log(arr.myReduce((a,b) => a+b, 0));
  
  console.log(arr.myReduce((a,b) => a*b, 1 ));
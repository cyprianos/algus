//dodawanie dwoch binarnych liczb o tej samej dlugosci
//

var arr1 = [1,0,1,0];
var arr2 = [1,1,1,1];


function add(a,b){
 var ret = [],
 sum; 
 for (var len = a.length, i=len-1, bonus=0; i>=0;i--) {
 console.log(i); 
   sum = bonus + a[i] + b[i];
  bonus=0; 
  if(sum==1){
    ret[i+1]=1;
  } else if(sum==3){
    ret[i+1]=1;
    bonus=1;
  } else {
    ret[i+1]=0;
    if(sum==2){
      bonus=1;
    }
  }
 }
 ret[0]=bonus;
 
return ret;
}

console.log(add(arr1,arr2));

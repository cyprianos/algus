//indexof

var arr = [1,2,3,4,5,6];

function linear(arr, val){
  for(var i=0,len = arr.length; i<len; i++) {
    if(val == arr[i]) {
      return i;
    }
  }
  return null;
}

console.log(linear(arr,3));

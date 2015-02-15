var array = [5,2,3,1,6,4];

function minFrom(a,start) {
  var result=start || 0;
  for(var i=result, len = a.length; i<len; i++){
    if(a[result] > a[i]) {
      result = i;
    }
  }
  return result;
};

function swapIndex(arr,a,b){
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function selectionSort(arr){
  var minIndex;
  for (var i=1, len = arr.length; i<len; i++) { // c1, n
     minIndex = minFrom(arr,i-1); //c2, 
     swapIndex(arr, minIndex,i-1);
  }
  return arr;
}

console.log(selectionSort(array));

var array = [5,2,4,6,1,3];

function insertionSort(a){
  var current,
  old;
  
  // i - place of current number
  for(var i=1, len=a.length; i<len; i++) {
    current = a[i];
    j = i-1;
    //j - seeking place for insert
    while(j>=0 && a[j] > current) {
      a[j+1] = a[j];
      j--;
    }
    a[j+1] = current;
  }
}


insertionSort(array);
console.log('arr', array);
//unit test
console.log(1,2,3,4,5,6);

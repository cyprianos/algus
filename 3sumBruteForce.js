fs = require('fs');

fs.readFile('data', 'utf8', function(err, data){
  if(err){
    return console.log(err);
  }
  console.log(data);
}

var arr = [30,-40,-20,-10,40,0,10,5];
function threeSum(arr){
  var len = arr.length,
  count = 0;
  for(var i=0;i<len;i++) {
    for(var j=i+1;j<len;j++) {
      for(var k=j+1;k<len;k++){
        if((arr[i]+arr[j]+arr[k]) === 0) {
          count++;
          console.log(arr[i],arr[j],arr[k]);
        }
      }
    }
  }
  return count;
}

console.log(threeSum(arr));

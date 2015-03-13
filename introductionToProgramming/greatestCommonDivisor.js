var args = process.argv.slice(2),
    x = args[1],
    y = args[2];


var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;


suite.add('gcd Recursive', function(){
  gcdBySubstraction(x,y);
})
.on('cycle', function(event){
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest  is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true});


function gcdBySubstraction(a,b){
  if(a < b) { var tmp=a; a=b; b=tmp; }
  if(b===0) {
    return a;
  } else if(b>0) {
    return gcd(a-b,b);
  }
}


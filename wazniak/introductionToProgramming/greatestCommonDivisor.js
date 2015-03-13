var argv = process.argv.slice(2),
    x = parseInt(argv[0],10) || 8,
    y = parseInt(argv[1],10) || 6;
var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;

suite.add('gcd Sub Recursive', function(){
  gcdBySubRecursion(x,y);
})
suite.add('gcd Sub Iteration',function() {
  gcdBySubIteration(x,y);
})
.add('gcd Modulo', function() {
  gcdByModulo(x,y);
})
.on('cycle', function(event){
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest  is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true});

function gcdBySubRecursion(a,b){
  if(a < b) { var tmp=a; a=b; b=tmp; }
  if(b===0) {
    return a;
  } else if(b>0) {
    return gcdBySubRecursion(a-b,b);
  }
}

function gcdBySubIteration(a,b){
  while(a!==b) {
    if(a < b) {var tmp=a;a=b;b=tmp;}
    a-=b;
  }
  return a;
}

function gcdByModulo(a,b) {
  while (b>0) {
    a = a%b;
    var tmp=a; a=b; b=tmp;
  }
  return a;
}
console.log('byModulo', gcdByModulo(x,y));
console.log('bySubstraction', gcdBySubRecursion(x,y));
console.log('bySub Iter', gcdBySubIteration(x,y));

// function foo(){
//     console.log(this.bar);
// }
// var bar = "bar1";
// var o2 = {bar : "bar2", foo:foo };
// var o3 = {bar : "bar3" , foo:foo };
// foo();
// o2.foo();
// o3.foo();


// for (var i = 0 ; i<=5 ; i++){ 

//     (function(i){ setTimeout( function(){
//           console.log("i :  " + i  )
//          } ,i*1000 );
//      })(i);
//     }

var run = coroutine(function* (){

    var x = 1 + (yield  null );
    var y = 1 + (yield null);

    yield (x+y);

    run();
    run(10);
    console.log("fffffffffff" + run(30).value);
}
);

run();


8136-1297-8435
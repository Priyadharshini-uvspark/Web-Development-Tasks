/*Task: write a program to print 1-100 ,
  for multiple of 3 print fizz,
  for multiple of 5 print buzz,
  for multiple of 3&5 print fizzbuzz */

/*first part of task
var output=[ ];
var count=1;

function fizzbuzz(){
    output.push(count);
    count++;
    console.log(output);
}
fizzbuzz();
fizzbuzz();
fizzbuzz();
 */

var output=[ ];
var count=1;

function fizzbuzz(){
    output.push(count);
    count++;
    //console.log(output);
    var lastNum = output[output.length-1]

    if (lastNum%3===0 && lastNum%5==0){
        console.log("fizzbuzz")
    }else if (lastNum%5==0){
        console.log("buzz")
    }else if (lastNum%3==0) { 
        console.log("fizz")
    }else{
        console.log(lastNum)
    }
}

fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
/*
// instead of writing func call manually multiple times i did loop 
var n=20; // total number 
for (let i=1; n>i; i++ ){
    fizzbuzz();
}*/

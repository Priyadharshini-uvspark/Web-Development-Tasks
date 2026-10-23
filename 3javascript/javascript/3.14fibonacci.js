function fibonacciGenerator (n) {
    var output=[ ];
    var a=0;
    var b=1;
    
    for (var i=1; i<=n; i++){       
            output.push(a);
            [a,b]=[b,a+b];

        } 
        console.log(output)

    
}
fibonacciGenerator(8)
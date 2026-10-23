function bmiCalculator (weight, height) {
    var bmi = weight /(height*height);
    if (bmi<18.5){
        return ("Your BMI is "+bmi.toFixed(2)+ ",so you are underweight");
    }else if (bmi>=18.5 && bmi<=24.9){
        return("your BMI is "+bmi.toFixed(2)+ ",so you have a normal weight");
    }else {
        return("Your BMI is "+bmi.toFixed(2)+ ",so you are overweight");
    }
}
let result=bmiCalculator(97,6.2);
console.log(result)
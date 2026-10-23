function isLeap(year) {
    if (year%400==0 || ((year%4==0) && (year%100!=0))){
        return (year+ " is leap year")
    }else{
        return (year+ " is not leap year")
    }
}
let result=isLeap(2001);
console.log(result)
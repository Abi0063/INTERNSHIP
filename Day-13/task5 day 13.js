function bmic(Weight,Height){
     var bmi=Weight/(Height*Height);
     return Math.round(bmi);
}
var bmi=bmic(65,1.8);
console.log(bmi);

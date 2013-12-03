/**
 * Created by vladimir on 12/3/13.
 */
var a = 1878;
var b=0;
var c =0;
var d =10;
if (typeof (a) == "number"){
while (a>0){
    c=a % 10;
    if (c>b){
        b=c;
    }
    if (c<d){
        d=c;
    }
    a=(a-a%10)/10;
}
console.log('Наименьшая цифра числа=',d);
console.log('Наибольшая цифра числа=',b);
}
else{
    console.log('На обработку поступило не число')
}
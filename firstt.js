/**
 * Created by vladimir on 12/3/13.
 */
var num = 1878;
var max = 0;
var min = 10;
if (typeof (num) == 'number') {
  if (num < 0) {
    num = 0 - num;
  }
  while (num > 0) {
    if (num % 10 > max) {
      max = num % 10;
    }
    if (num % 10 < min) {
      min = num % 10;
    }
    num = (num - num % 10) / 10;
  }
  console.log('Наименьшая цифра числа=', min);
  console.log('Наибольшая цифра числа=', max);
}
else {
  console.log('На обработку поступило не число');
}

/**
 * Created by vladimir on 12/3/13.
 */
var num = 1878;
var max;
var min;
var remains;
if (typeof(num) == 'number') {
  max = 0;
  min = 10;
  if (num < 0) {
    num = Math.abs(num);
  }
  while (num > 0) {
    remains = num % 10;
    if (remains > max) {
      max = remains;
    }
    if (remains < min) {
      min = remains;
    }
    num = (num - remains) / 10;
  }
  console.log('Наименьшая цифра числа=', min);
  console.log('Наибольшая цифра числа=', max);
}
else {
  console.log('На обработку поступило не число');
}

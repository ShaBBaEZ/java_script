// Задача 1: Получить от пользователя два числа и вывести в диалоговое окно сумму значений,
// которые ввёл пользователь  to.Fixed округление до 2 знаков после запятой
// плюс перед getSumm делает ничего + нашу строку из getSum и тогда откидываются 0 после запятой не нужные

const num1 = Number.parseFloat(prompt("Введите первое число"));
const num2 = Number.parseFloat(prompt("Введите второе число"));
function getSumm (a,b){
    return a + b;
}
alert(`Сумма чисел ${num1} и ${num2} равна: ${(+getSumm(num1,num2)).toFixed(2)}`);
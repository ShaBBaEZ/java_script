// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.

// function getMaxEvenElement(arr) {

// }

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

let arr = [4, -12, 29, 6, 31, 92, -50];
alert(arr)


function getMaxEvenElement(arr) {
    let max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
    }
    return max;
}
console.log(getMaxEvenElement(arr));
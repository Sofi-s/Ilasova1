/*
  1. Функция higherThan(num) - отбирает все числа больше num
*/
export function higherThan(num) {
    return function (element) {
        return element > num;
    };
}

/*
  2. Функция hasSubstring(substr) - отбирает из массива все строки, включающие в себя substr
*/
export function hasSubstring(substr) {
    return function (element) {
        return String(element).includes(substr);
    };
}

/*
  3. Функция multiply(num) - возвращает функцию для умножения
*/
export function multiply(num) {
    return function (nextNum) {
        return num * nextNum;
    };
}

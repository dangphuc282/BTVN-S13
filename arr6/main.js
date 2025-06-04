let numbers = [3, 5, 7, 3, 2, 9, 3, 4, 5, 6, 3, 8, 9, 3, 1];
let k = parseInt(prompt("Nhập vào số nguyên cần kiểm tra:"));
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === k) {
    count++;
  }
}

alert(`Số ${k} xuất hiện ${count} lần trong mảng`);

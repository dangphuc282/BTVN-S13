let chuoi = prompt(`Vui lòng nhập vào chuỗi:`);
let arr = chuoi.split('');
let max = Number(arr[0]);

for (let i = 1; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num > max) {
        max = num;
    }
}

alert(`Giá trị lớn nhất là ${max}`);

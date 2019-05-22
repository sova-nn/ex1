function sumValues() {
    let i = (+document.getElementById('num1').value) || 0.1;
    let j = +document.getElementById('num2').value || 0.2;
    let arr = [];
    arr.push(i);
    arr.push(j);
    let my_sum = arr.reduce((sum, base) =>{
        return sum + base;
    }, 0);
    alert(my_sum.toFixed(2));
}




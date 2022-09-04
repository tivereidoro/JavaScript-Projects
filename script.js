// const resetBtn = document.get

let count = 0;

document.getElementById('decreaseBtn')
.onclick = function(){
    count -= 1;
    document.getElementById('countLabel')
    .innerHTML = count;
}

document.getElementById('resetbtn')
.onclick = function(){
    count = 0;
    document.getElementById('countLabel')
    .innerHTML = count;
}

document.getElementById('increaseBtn')
.onclick = function(){
    count += 1;
    document.getElementById('countLabel')
    .innerHTML = count;
}
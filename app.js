

let son = document.querySelector('h1')
let e = document.querySelector('.ekran')


let num = 1
let qoshish = document.querySelector('.qosh')
qoshish.onclick = function(){
    son.innerHTML = num++
    if(num >= 11){
        son.style.color = 'red'
        e.style.backgroundColor = 'blue'
    }
}


let r = document.querySelector('.res')
r.onclick = function(){
    son.innerHTML = num = 0
}

let qay = document.querySelector('.kam')
qay.onclick = function(){
    if(num >= 0){
        son.innerHTML = num--
    }
}


// 1) git init 
// 2) git add .
// 3) git commit -m"xabar"

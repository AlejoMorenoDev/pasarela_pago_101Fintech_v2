const scrollBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll',()=>{
    scrollFunction();
});

function scrollFunction() {
    if(window.scrollY > 20){
        scrollBtn.style.opacity = '1'
    }else{
        scrollBtn.style.opacity = '0'
    }
}

scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
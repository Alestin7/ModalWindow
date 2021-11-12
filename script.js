document.querySelector('.button').onclick = function(e){
    document.querySelector('.modal').classList.add('modal--open');
}

document.querySelector('.closeBtn').onclick = function(e){
    document.querySelector('.modal').classList.remove('modal--open');
}

document.querySelector('.footerBtn').onclick = function(e){
    document.querySelector('.modal').classList.remove('modal--open');
}
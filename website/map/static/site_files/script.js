let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
let header = document.querySelector('.header');

header__burger.onclick = function(){
    if (header__burger.classList.contains('active') === false)
    {
        header__burger.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
    else {
        header__burger.classList.remove('active');
        header_menu.classList.remove('active');
        back.classList.remove('lock');
    }
}

header__list.onclick = function () {
    back.classList.remove('lock');
}

let color = '#00d2d2';
let times = setTimeout( function () {
    $('.content__header h1 , .page__header h1').css('box-shadow', '0px 2px 0px 0px' + color);
}, 0)

let timer = setInterval(function () {
    if (color === '#00d2d2') {
            color = '#ff6e91';
        } else if (color === '#ff6e91') {
            color = '#00d2d2';
        }
        $('.content__header h1 , .page__header h1').css('box-shadow', '0px 2px 0px 0px' + color);
    }, 3100);

// let lineTimes = setInterval(function () {
//     $('.content__hr-top').css('width', '20%');
// }, 1000)

let btn_line = document.querySelector('.button-for-js-1');

btn_line.onmouseover = btn_line.onmouseout = handler;

function handler(event) {
    if (event.type === 'mouseover') {
        $('.content__hr-top').css('width', '90%');
    }
    if (event.type === 'mouseout') {
        $('.content__hr-top').css('width', '25%');
    }
}

let btn_line_2 = document.querySelector('.container-with-hr-2');

btn_line_2.onmouseover = btn_line_2.onmouseout = handler2;

function handler2(event) {
    if (event.type === 'mouseover') {
        $('.content__hr-top-2').css('width', '90%');
    }
    if (event.type === 'mouseout') {
        $('.content__hr-top-2').css('width', '25%');
    }
}

$(document).ready(function() {
    $('.dropdown ul>li').click(function(){
      $('.dropdown ul>li').each(function(){
        $(this).removeClass('drop-selected');
      });
      $(this).toggleClass('drop-selected');
      $('.dropdown>span').text($(this).attr("val"))
    });
  });

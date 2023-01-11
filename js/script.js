//const { parseHTML } = require("cheerio");
$(document).ready(function () {
    $('.header__burger-icon').click(function (event) {
        $('.header__burger-icon').toggleClass('active');
        $('.header__burger-menu').slideToggle("slow");
    });
})

//ЧТОБЫ КАРТИНКА В HTML СТАНОВИЛАСЬ ФОНОМ И АДАПТИРОВАЛАСЬ, НЕ НАДО В CSS ПРОПИСЫВАТЬ БЭК-ГРАУНД
function ibg(){
    let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
    
    }
ibg();
/*function ibg(){//КОД В J QUARY ЧТОБЫ КАРТИНКА В HTML СТАНОВИЛАСЬ ФОНОМ
    $.each($('.ibg'), function(index, val) { if($(this).find('img').length>0){ $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); } });
}
ibg();*/
ymaps.ready(function () { 
 
    let myMap = new ymaps.Map("YMapsID", {
        center: [55.76, 37.64],
        zoom: 11,
    });
 
    // создание маркера
    let myPlacemark = new ymaps.Placemark([55.76, 37.64], {
       content: 'название маркера',
       balloonContent: 'html-контент',
    });

    // добавление маркера на карту
    myMap.geoObjects.add(myPlacemark);
    
});

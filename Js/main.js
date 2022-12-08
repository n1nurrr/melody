$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path"); //выделенные этажи svg
    var counterUp= $(".counter-up");
    var counterDown= $(".counter-down");

    //Наведение мышкой на этаж
    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor") // remove current floor class
        currentFloor = $(this).attr('data-floor'); // значение текущего этажа
        $(".counter").text(currentFloor); //запись активного значения этажа в счетчик справа
    });

    //нажатие кнопки "Вверх"
    counterUp.on('click', function(){
        if(currentFloor <18){
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor") // remove current floor class
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    //нажатие кнопки "Вниз"    
    counterDown.on('click', function(){
        if(currentFloor >2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor") // remove current floor class
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});
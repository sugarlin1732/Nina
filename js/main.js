$(document).ready(function () {

    /*
    //偵測,綁定畫面滾動
    $(window).bind('scroll', function () {
        // console.log($(this).scrollTop());
        // 如果滾動位置大於400
        if ($(this).scrollTop() > 400) {
            // backbtn
            // $('#backbtn').show();
            $('#backbtn').fadeIn(1000);
        } else {
            // backbtn
            // $('#backbtn').hide();
            $('#backbtn').fadeOut(800);
        }
    });
    */


    new WOW().init();

    function initMap() {
        var myLocation = {
            lat: 25.108499,
            lng: 121.523334
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation,
            zoom: 14,
            draggable: true
        });

        var marker = new google.maps.Marker({
            map: map,
            position: myLocation
        });
    }

    initMap();

});
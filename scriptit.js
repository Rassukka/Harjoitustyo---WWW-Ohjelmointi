$(document).ready(function(){
  $("[href='#Etusivu'], [href='#meistä'], [href='#yes'], [href='#galleria'], [href='#lisää'], .jumbotron a, footer a").on('click', function(event) {

  event.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    window.location.hash = hash;
    });
  });
})
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
$('.carousel').carousel({
  interval: 2000
})
});

var myCenter = new google.maps.LatLng(38.8976805,-77.0387185,17);

    function initialize() {
    var mapProp = {
    center:myCenter,
    zoom:12,
    scrollwheel:false,
    draggable:false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
    position:myCenter,
    });

    marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
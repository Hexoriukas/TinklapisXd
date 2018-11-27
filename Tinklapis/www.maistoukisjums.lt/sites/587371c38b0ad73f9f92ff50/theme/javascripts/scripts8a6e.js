$(document).ready(function(){
  //Slideshow photos
  function slideSwitch() {
    var $active = $('#slideshow_photos img.active');
    if ( $active.length == 0 ) $active = $('#day_dinner_box_bg_slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
      : $('#slideshow_photos img:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
      });
  }

  $(function() {
    var images = $("#slideshow_photos img");
    var imgNumb = images.length;

    if(imgNumb > 1) {
      images.first().addClass("active last-active");
      setInterval( function(){ slideSwitch(); }, 5000 );
    }
  });


  //Dinner time switch
  $(function() {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();

    if(day > 0 && day < 6 && hours >= 10 && hours < 15)
    {
      $('#day_dinner_title').show();
      $('#day_dinner_text').show();
    }
  });


  //Facebook script
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '933875126622881',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  //Secured form
  myDate = new Date();
  var dateString = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate();
  $('#contacts_sec_form').attr('value', dateString);


  // Google maps
  if ($('#contats_map').length) {
    function init() {
      var myLatlng = new google.maps.LatLng(54.680877, 25.269754);
      var mapOptions = {
        zoom: 15,
        center: myLatlng
      };
      var map = new google.maps.Map(document.getElementById('contats_map'), mapOptions);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
      });
    }
    google.maps.event.addDomListener(window, 'load', init);
  }


});


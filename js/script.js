  function slider() {
      $("#content-slider").lightSlider({
          loop: true,
          keyPress: true
      });
  };

  function initMap() {
      var myLatLng = {
          lat: 50.4531715,
          lng: 30.5204581
      };

      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: myLatLng
      });

      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
      });
  };


  $(document).ready(function () {
      $(".nav").on("click", "a", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();

          //забираем идентификатор бока с атрибута href
          var id = $(this).attr('href'),

              //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top;

          //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({
              scrollTop: top
          }, 2500);
      });

  });

  function wacthAll() {
      $(".tabs li").click(function () {
          $(".menu_product ul li:nth-child(n+5)").hide();
          $(".menu_product ul button").removeClass('active');
          $(".menu_product ul li").removeClass('br_li');
      })
      $(".menu_product ul li:nth-child(n+5)").addClass('active');
      $(".menu_product ul li:nth-child(n+5)").hide();

      $(".menu_product ul button").click(function () {
          $(this).prevAll("li:nth-child(n+5)").slideToggle(2000);
          $(this).toggleClass('active');
          var c = $(this).prevAll("li").length;

          if (c % 2) {
              $(this).prevAll("li:nth-last-child(n+3)").toggleClass('br_li')
          } else {
              $(this).prevAll("li:nth-last-child(n+4)").toggleClass('br_li')

          }
      })
  };
  $(document).ready(function () {
      wacthAll();
  });





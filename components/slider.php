<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Infinite draggable webgl slider.</title>
<link rel="stylesheet" href="css/slider.css">

</head>
<body>

<div class="slider | js-drag-area">
  <div class="slider__inner | js-slider">
    <div class="slide | js-slide">
      <a href="index.html">
        <div class="slide__inner | js-slide__inner">
           <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" draggable="false">
        </div>
      </a>
    </div>
    <div class="slide | js-slide" style="left: 120%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" draggable="false">
      </div>
    </div>
    <div class="slide | js-slide" style="left: 240%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" draggable="false">
      </div>
    </div>
    <div class="slide | js-slide" style="left: 360%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" draggable="false">
      </div>
    </div>
    <div class="slide | js-slide" style="left: 480%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" draggable="false">
      </div>
    </div>
    <div class="slide | js-slide" style="left: 600%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" draggable="false">
      </div>
    </div>
    <div class="slide | js-slide" style="left: 720%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg" alt="" draggable="false">
      </div>
    </div>
    <div class="slide | js-slide" style="left: 840%;">
      <div class="slide__inner | js-slide__inner">
         <img class="js-slide__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg" alt="" draggable="false">
      </div>
    </div>
  </div>
</div>

<div class="titles">
  <div class="titles__title titles__title--proxy">Lorem ipsum</div>
  <div class="titles__list | js-titles">
    <div class="titles__title | js-title">Moonrocket</div>
    <div class="titles__title | js-title">Spaceman</div>
    <div class="titles__title | js-title">Moonrocket</div>
    <div class="titles__title | js-title">Spaceman</div>
    <div class="titles__title | js-title">Moonrocket</div>
    <div class="titles__title | js-title">Spaceman</div>
    <div class="titles__title | js-title">Moonrocket</div>
    <div class="titles__title | js-title">Spaceman</div>
    <div class="titles__title | js-title">Moonrocket</div>
  </div>
</div>


<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js'></script>
<script  src="js/slider.js"></script>

</body>
</html>

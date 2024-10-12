<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Léma et les Chessures à Talon</title>
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="footer.css">
    <link rel="stylesheet" href="alert.css">
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        @font-face {
            font-family:"font" ;
            src: url(./assets/Fonts/Hero-Regular.ttf);
        }
        body{
            width: 100%;
            font-family: "font";
            background: linear-gradient(to bottom, white 0%, black 76%);
            
        }
        .book{
           
            overflow-x: hidden;
        }
        figcaption{
            text-align: center;
            padding: 5px 0;
            margin-bottom: 100px;
            font-weight: bold;
        }
        .bookContent{
            width: 100%;
            max-width: 80%;
            min-width: fit-content;
            margin: 0 auto;
           text-align: center;
           background-color: white;
        }
        .bookContent img{
            width: 900px;
            height: auto;
            object-fit:cover ;
        }

        @media (max-width: 919px) {
            
            .bookContent img{
               width: 100%;
            }
        }
    </style>
</head>
<body>
    
<header >

    <div class="headerContent">
      
   

    <nav>
      <ul>
        <li><a class="nav-link first " href="./index.php"><img  src="hom.png" alt=""></a></li>
        <li><a class="nav-link" href="#work">My Work</a></li>
        <li><a id="out" class="nav-link nav-link2" href="#">Contact me</a></li>
        <li><a class="nav-link nav-link3" href="#">Infos</a></li>
      </ul>
    </nav>

    

    </div>

  </header>

  <div class="nav-mobile">
    <ul>
      <li><a class="nav-link first " href="./index.php"><img  src="hom.png" alt=""></a></li>
      <li><a class="nav-link" href="#work"><img id="pro" src="gestion-de-projet.png" alt=""></a></li>
      <li><a id="out" class="nav-link nav-link2" href="#"><img id="pro2" src="lettre.png" alt=""></a></li>
      <li><a class="nav-link nav-link3" href="#"><img id="pro3" src="contact.png" alt=""></a></li>
    </ul>
  </div>

    <div class="book">
        <div class="bookContent">
            <img src="./C.jpg" alt="">
            <figcaption>Page 1</figcaption>
            <img src="./D.jpg" alt="">
            <figcaption>Page 2</figcaption>
            <img src="./E.jpg" alt="">
            <figcaption>Page 3</figcaption>
            <img src="./F.jpg" alt="">
            <figcaption>Page 4</figcaption>
            <img src="./G.jpg" alt="">
            <figcaption>Page 5</figcaption>
            <img src="./H.jpg" alt="">
            <figcaption>page 6</figcaption>
        </div>
    </div>

    <div class="footer">

<footer>
  <div class="blend"></div>
  <div class="content">
    <div class="left">
      <h2 class="contact">Contacts</h2>
      <p>graphicdesignhome00@gmail.com</p>
      <p>+237 677 83 70 22</p>
      <p>+237 620 65 34 14</p>
    </div>
   
    <fieldset>

      <div class="right">
        <h2 class="social">Social Networks</h2>
        <div class="icon">
          <a href="https://m.facebook.com/profile.php?id=100091936671884&mibextid=ZbWKwL&wtsid=rdr_0Bo7ifBrVOprNb9e1"
            target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://instagram.com/gdesign_home?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D" target="_blank"><i
              class="fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/message/3LZSIWEK3NDXC1" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://github.com/manuhatho"><i class="fa-brands fa-github"></i></a>
        </div>
        <p class="location">
          <i class="fa-solid fa-location-dot"></i>
          Bafoussam Cameroon</p>
        
      </div>
    </fieldset>
  </div>
</footer>
</div>




<div class="form">
<form action="contactme.php" method="post" >
<div  id="out" class="barmenu2">
<div class="bar"></div>
</div>
<h2>Contact me</h2>
<fieldset class="contact-me">
<input type="text" id="name" name="Name" placeholder="Name *" required>
<input type="email" id="email" name="Email" placeholder="Email*" required>
<input type="tel" id="phone" name="Phone" placeholder="Phone">
</fieldset>
<fieldset class="contact-me">
<textarea name="Message" id="message" cols="30" rows="1" style="resize: none; border: none; border-bottom:1px solid;" placeholder="Message *" required></textarea>
<button class="submit" type="submit">

  <div id="loading-spinner" class="spinner">
  </div>
     Send
</button>
</fieldset >
</form>
</div>

<div id="success-alert" class=" alert alert-success" style="display: <?php echo isset($_GET['success']) && $_GET['success'] == 'true' ? 'block' : 'none'; ?>; ">
<span class="close-btn" onclick="this.parentElement.style.display='none';">
&times
</span>

<strong>Thanks you ! <font> Your message has been send succesfuly</font></strong>

</div>

<div id="error-alert" class=" alert alert-error" style="display: <?php echo isset($_GET['success']) && $_GET['success'] == 'false' ? 'block' : 'none'; ?>;">
<span class="close-btn" onclick="this.parentElement.style.display='none';">
&times
</span>
<strong>Sorry</strong> <font>: Try again later.</font>
</div>

</div>

    <script src="./script.js"></script>
    <script src="./alert.js"></script>
    <script src="./fullscreen.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js"></script>
    <script src="https://kit.fontawesome.com/ca9a6c5a17.js" crossorigin="anonymous"></script>
  

  
  <script>
  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
  })
  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
  })
  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  </script>
  
  
  <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js"></script>
  <script>
  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
  })
  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
  })
  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  </script>
</body>

</html>
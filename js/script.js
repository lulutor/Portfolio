
$(document).ready(function(){
  // Parallax jQuery
  $('.parallax').parallax();
 

  //Navbar jQuery
  $('.sidenav').sidenav();

  //Slider
  $('.slider').slider();

  //Animation : click compétence ==> Apparition Création

  var $body = $('body');
  var $html = $('#html');
  var $bootstrap = $('#bootstrap');
  var $javascript = $('#javascript');
  var $prestashop = $('#prestashop');
  var $angular = $('#angular');
  var $react = $('#react');

  var $containerBackgroundCreation = $('#container-background-creation'); 
  var $htmlCreation = $('#html-creation');
  var $bootstrapCreation = $('#bootstrap-creation');
  var $javascriptCreation = $('#javascript-creation');
  var $javascript2Creation = $('#javascript2-creation');
  var $prestashopCreation = $('#prestashop-creation');
  var $angularCreation= $('#angular-creation');
  var $reactCreation = $('#react-creation');

  function hide() {  
    $htmlCreation.hide();
    $bootstrapCreation.hide();
    $javascriptCreation.hide();
    $javascript2Creation.hide();
    $prestashopCreation.hide();
    $angularCreation.hide();
    $reactCreation.hide();
  }

  hide();

  $body.fadeIn(1000);

  $html.on('click',function(){
    hide();
    $htmlCreation.fadeIn(800); 
    $containerBackgroundCreation.backgroundColor = '#DCDDE1';
  });

  $bootstrap.on('click',function(){
    hide();
    $bootstrapCreation.fadeIn(800);
  });

  $javascript.on('click',function(){
    hide();
    $javascriptCreation.fadeIn(800);
    $javascript2Creation.fadeIn(800);
  });

  $prestashop.on('click',function(){
    hide();
    $prestashopCreation.fadeIn(800);
  });

  $angular.on('click',function(){
    hide();
    $angularCreation.fadeIn(800);
  });

  $react.on('click',function(){
    hide();
    $reactCreation.fadeIn(800);
  }); 

  // boutton-formulaire

  var $bouttonFormulaire = $('#formulaire')
});


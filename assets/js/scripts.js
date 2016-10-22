(function() {
  var MessageControl = (function() {
    var el = document.querySelector('.card__top-container');
    var hero = el.querySelector('.card__hero-text');
    var drawerHero = hero.querySelector('p');
    var date = new Date();
    var hour = date.getHours();
    
    switch (hour) {
      case 4, 5, 6:
        drawerHero.innerHTML = 'You\'re up early, don\'t forget to grab a coffee!';
        break;
      case 7, 8, 9, 10, 11:
        drawerHero.innerHTML = 'Good Morning, welcome to my site!';
        break;
      case 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23:
        drawerHero.innerHTML = 'Good Evening, I hope you enjoy your stay!';
        break;
      case 24, 0, 1, 2, 3:
        drawerHero.innerHTML = 'You\'re up late!  Enjoy my site you nightowl you!';
        break;
      default:
        break;
    }
  })();
  
  var FormControl = (function() {
    function initialize() {
      var el = document.querySelector('.card__top-container');
      var form = el.querySelector('.card__contact-form');
      var closeForm = form.querySelector('.btn-cancel');
      var activateForm = el.querySelector('.btn');
      var submitForm = form.querySelector('.btn-success');
      submitForm.addEventListener("click", function(e) {
        e.preventDefault();
        alert("I didn't code this yet! Sorry, please refer to my social medias!");
      });
      activateForm.addEventListener("click", function(e) {
        e.preventDefault();
        this.style.display = "none";
        form.style.position = "static";
        form.style.transform = "translateY(0em)";
      });
      closeForm.addEventListener("click", function() {
        form.style.transform = "translateY(100em)";
      });
    }
    return {
      init: initialize
    }
  })();
  FormControl.init();
})();

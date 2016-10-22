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
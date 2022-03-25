'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        let section = qs('section');
        let menu = section.children[0]; 
        let pizza = section.children[1]; 
        let bill = section.children[2]; 

      menu.addEventListener('click', function() {
          console.log("making pizza");
          setTimeout(function() {
            console.log("pizza made");
            pizza.classList.remove("inactive");
            pizza.addEventListener('click', function() {
              console.log("eating pizza");
              setTimeout(function() {
                console.log("pizza eaten");
                bill.classList.remove("inactive");
                bill.addEventListener('click', function() {
                  console.log("paying bill");
                  setTimeout(function() {
                    console.log("all done");
                  }, 3000);
                });
              }, 2000);
            });
          }, 5000);
        });
    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
      return document.createElement(tagName);
    }

    function id(idName) {
      return document.getElementById(idName);
    }

    function qs(selector) {
      return document.querySelector(selector);
    }

    function qsa(selector) {
      return document.querySelectorAll(selector);
    }
})();
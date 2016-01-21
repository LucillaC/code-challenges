// Custom Handlers
function lorem () {
  console.log('lorem executed');
}

function ipsum () {
  console.log('ipsum executed');
}


// Verify that DOM has loaded
$(document).ready(
  function () {
    $('html').on('click', function() {
      $('.link').not(this).removeClass('is-active');
    })
    $('.link').on('click', function(e) {
      // kill the bubbling of body click event
      e.stopPropagation();
      $(this).toggleClass('is-active');
      $('.link').not(this).removeClass('is-active')
    });
    $('li[data-js="lorem"]').on('click', function() {
      // execute custom lorem handler
      lorem();
    })
    $('li[data-js="ipsum"]').on('click', function() {
      // execute custom ipsum hander
      ipsum();
    })
  }
);

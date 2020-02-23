const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function() {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');
  /*********Click event on toggle menu *********/
  $toggleCollapse.click(function() {
    $nav.toggleClass('collapse');
  });

  // // AOS Instance
  // AOS.init();
});
// click to scroll up
$('.move-up span').click(function() {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1000,
  );
});

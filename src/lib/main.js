$(document).ready(function() {

    $(window).scroll(function () {
      console.log(window.scrollY)
    })

    $('body').scrollspy({
        target: '#tableofcontents'
    });
});

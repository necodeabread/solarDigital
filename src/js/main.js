$(function(){
    new WOW().init(); 

    $(".mobile__hamburger").click(function (){
      $(".mobile__menu").css("height", "200px");
      setTimeout(showList, 900);
    });

    function showList () {
      $(".mobile__list").css("display", "block");

      $(document).click(function (e) {
        var container = $(".mobile__menu");
        if(!container.is(e.target) && 
        container.has(e.target).length === 0) {
            container.hide();
            $(".mobile__hamburger").click(function (){
              $(".mobile__menu").css("height", "200px");
              setTimeout(showList, 900);
            });
        }
      });
    }

    $(function() {
      $(".lang-select a:first").click(function(){
          $('a:first',this).toggle();
      })
  });
});

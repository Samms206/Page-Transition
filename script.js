gsap.to(
  ".load_grid-item",
  {
      opacity:0,
      duration:0.001,
      stagger: {amount:0.5, from:"random"},
      onComplete:() => {
        gsap.set(".load_grid", {display:"none"});
      }
  });

$(document).ready(function() {
    $("a").on("click", function(e){
      // if ($(this).prop("hostname") === window.location.host && $(this.attr("href").indexOf("#") === -1 && $(this.attr("target") !== "_blank"))) { 
        e.preventDefault();
        let destination = $(this).attr("href");
        gsap.set(".load_grid", {display:"grid"});
        gsap.fromTo(
            ".load_grid-item",
            {
                opacity:0
            },
            {
                opacity:1,
                duration:0.001,
                stagger: {amount:0.5, from:"random"},
                onComplete:() => {
                    window.location = destination;
                }
            }
        );
      // }
    });
});
  
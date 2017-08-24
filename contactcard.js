$(document).ready(function () {
    var button = $("button");
    var right = $(".right");

    $("button").click(function () {
        var first = $("#firstname").val();
        var last = $("#lastname").val();
        var des = $("#description").val();
        right.append('<div class="card" id="' + first+last+ '"><h4 class="front">' + first +' ' + last + '</h4><p class="front">Click for description</p><p class="back">'+ des +'</div>');
    })
    
    $(document).on('click', '.card', function(){
        $(this).children().toggle();
      })

})

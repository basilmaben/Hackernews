$("header").hide();
$("main").hide();
$(()=> {
    $("header").fadeIn(100, ()=> {
        $("main").fadeIn(100);
    })
})
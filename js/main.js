$(".carousel").carousel({
interval: 3200

});

$(function () {
 
// automatski padajuci meni
$("ul.nav li.dropdown").hover(function(){
    $(".dropdown-menu",this).fadeIn()
},function () {
     $(".dropdown-menu",this).fadeOut("fast")}) // hover prelaz
});
 
 
 
$(function () {
    // tooltip aktivacija
    $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function () {
    function init(){
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
            
        }
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
            
        }
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
            
        }
    }
    init();
});

$('.stored').change(function(){
    localStorage[$(this).attr('name')] = $(this).val();
});
$(document).ready(function(){
$(".data").submit(function(event){
event.preventDefault();
const tall = $(".tall").val();
const average = $(".average").val();
const short = $(".short").val();
const height = $("#metres").val();
if (height == tall) {
    window.location.href="spec.html"
} else if (height == average) {
    window.location.href="major.html"
} else {
    window.location.href="kiddies.html"
}

});
});

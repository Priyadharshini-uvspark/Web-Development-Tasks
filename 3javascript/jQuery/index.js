// alert('hi')

$('h1').css('color','blue');
/*
$('h1').addClass('big-title');  //addClass() is used
$('button').text('dont click me');

$('button').html('<em>heyy</em>');  //html() is used

$('a').attr('href', 'https://www.yahoo.com');  //attr() is used
*/
 /*
$('button').click(function() {
    $('h1').css('color','orange');
});

$('input').keypress(function(event) {
    console.log(event.key);
})
*/
$(document).keypress(function(event) {
    $('h1').text(event.key);
})
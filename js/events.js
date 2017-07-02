// function getIt(){
// $('p').on('click', function() {
//   alert( "hey!" );
// });
// }
function getIt(){
$('p').click(function() {
  alert( "hey!" );
});
}

function frameIt(){
  $('img').load(function() {
    $('img').addClass('tasty')
  });
}

function pressIt() {
  $('#typing').keydown(function(e) {
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').submit(function(e) {
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});

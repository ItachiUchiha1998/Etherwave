console.log("app.js");
// HOME PAGE
function purchaseTicket(clickedEventId)
{
    window.location.href = '/events/' + clickedEventId;
    console.log("Event Id:" + clickedEventId);
}

$("input").click(function() {
    $('input').attr('value',' ');
});

$("input")
  .focusout(function() {
      if ($('input').attr('value') == ' '){
        $('input').attr('value','Search by city...');
      }
  })
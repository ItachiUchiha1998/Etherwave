console.log("app.js");
// HOME PAGE
function purchaseTicket(clickedEventId)
{
    window.location.href = '/events/' + clickedEventId;
    console.log("Event Id:" + clickedEventId);
}
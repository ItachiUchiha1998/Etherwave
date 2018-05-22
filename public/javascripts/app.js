// HOME PAGE
function purchaseTicket(clickedEventId)
{
    window.location.href = '/events/' + clickedEventId;
    console.log("Event Id:" + clickedEventId);
}

// QR PAGE
var qrcode = new QRCode("qrcode");

$("#text").on("keyup", function () {
    qrcode.makeCode($(this).val());
}).keyup().focus();

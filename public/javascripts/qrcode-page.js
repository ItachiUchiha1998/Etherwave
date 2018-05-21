
console.log("hey, qr is ready to roll!");

var qrcode = new QRCode("qrcode");

$("#text").on("keyup", function () {
    qrcode.makeCode($(this).val());
}).keyup().focus();

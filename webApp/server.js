const express = require("express");

console.log("hello world");
var app = express();
app.get("/api/hello", function(req, res) {
    var product  = {
        id: 1,
        name: "Product 1",
        price: 100.00
    }
    res.send(product);
    
});

app.get("/api/thankyou", function(req, res) {
    var thanksgiving  = {
        happyindex: 100,
        gitcoupn: "mytnra98989",
        product: "smarttv"
    }
    res.send(thanksgiving);
    
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

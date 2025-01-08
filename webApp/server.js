const express = require("express");

console.log("hello world");
var app = express();

app.use(express.json());
app.get("/api/hello", function(req, res) {
    var product  = {
        id: 1,
        name: "Product 1",
        price: 100.00
    }
    res.send(product);
    
});

<<<<<<< HEAD

=======
app.get("/api/thankyou", function(req, res) {
    var thanksgiving  = {
        happyindex: 100,
        gitcoupn: "mytnra98989",
        product: "smarttv"
    }
    res.send(thanksgiving);
    
});

app.post("/api/addproduct", function (req, res) {
  const data = req.body
  try {
    console.log(data);
    productRepo.addProduct(data);
    res.status(201).send("Product added")
  } catch (err) {
    console.log(err)
  }
});
app.get("/api/getbyid/:id", function (req, res) {
  var data = req.params.id
  try {
    var product1 = productRepo.getProductById(data)
    console.log(product1);
    res.status(200).send(product1);
  } catch (err) {
    console.log(err)
  }
});
>>>>>>> alpha

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

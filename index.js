const express = require("express");
const Razorpay = require("razorpay");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.post("/order", async (req, res) => {
  const amount = req.body.amount;

  var instance = new Razorpay({
    key_id: "rzp_test_RHjONvZOCxHnRc",
    key_secret: "nBaQHVK3IVWA4eZpeGxSEykZ",
  });

  const myOrder = await instance.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
  return res.status(200).send({
    isSuccess: true,
    amount,
    myOrder,
  });
});

app.listen("4000", () => {
  console.log("app is up and running at 4000");
});

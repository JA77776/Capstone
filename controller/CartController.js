import express from "express";
import bodyParser from "body-parser";
import { Cart } from "../models/cart.js";
import { decodingToken } from "../middleware/AuthenticateUser.js";

const cartRouter = express.Router();

// cartRouter.use(json());

cartRouter.use("/cart", decodingToken);

cartRouter.get("/fetchCartItem", (req, res) => {
  
    const user = req.dec.userID;

    Cart.fetchCartItems(user.userID, res);
});

cartRouter.post("/:addToCart", bodyParser.json(), async (req, res) => {

    console.log("POST /cart request received");

    console.log(req.dec)

    const userEmail = req.dec.emailAdd;

getUserIDByEmail(userEmail)
    .then((userID)=> {
    const { prodID } = req.body;
    Cart.addToCart({userID, prodID}, res);

  }).catch((error)=>{
    console.error("Error getting userID: ", error)
    return res.status(500).json({msg: "Internal server error"})
  });
});

cartRouter.delete("/:removeFromCart", (req, res) => {
    const userEmail = req.dec.emailAdd;
    getUserIDByEmail(userEmail)
        .then((userID)=> {
        const { prodID } = req.params;
        Cart.removeFromCart(userID, prodID, res);

  }).catch((error)=>{

    console.error("Error getting userID: ", error)

    return res.status(500).json({msg: "Internal server error"})
  })
});

export {
    cartRouter
}
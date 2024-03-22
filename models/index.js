import { Products} from "./products.js";
import { Users } from "./user.js";
import { Cart } from "./cart.js"

// creating an object
let users = new Users()
let products = new Products()
let cart = new Cart()

export{
    users,
    products,
    cart,
};
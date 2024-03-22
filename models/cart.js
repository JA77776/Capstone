import { connection as db } from '../config/index.js';

class Cart {
    fetchCartItem( userID, res) {
        const query = ` SELECT cartID, prodID, userID FROM Cart WHERE userID = ? `;
        
        db.query(query, [userID], (err, results) => {
            if (!err) {
                res.json({
                    status: res.statusCode,
                    results,
                });
            } else {
                throw (
                    err &&
                    res.json({
                       status: res.statusCode,
                       err,
                       msg: "Sorry, an error occured.",
                    })
                );
            }
        }); 
    }
     addToCart ({ userID, prodID}, res) {
        try {
            const query = `INSERT INTO Cart (userID, prodID) VALUES (?,?)`;
            
            const data = [userID, prodID];
            db.query(query, data, (err) => {
                if (!err) {
                    res.json({
                        status: res.statusCode,
                        msg: "Product was added to your cart successfully"
                    });
                }  else {
                    throw (
                        err &&
                        res.json({
                            status: res.statusCode,
                            msg: "Something went wrong with the order, please try again. If it happens again please contact the online admin for further assistance, Thank you.",
                            err,
                        })
                    );
                }
            });
        } catch (e) {
            console.error(e);
            res .status(500)
                .json({
                    status: res.statusCode, 
                    msg: "Internal server error",
                    err: e,
            });
        }
     }
     removeFromTheCart ( userID, prodID, res) {
        const query = ` DELETE FROM Cart WHERE userID = ? AND prodID = ?`;

        const data = [ userID, prodID ];

        db.query(query, data, (err) => {
            if (!err) {
                res.json({
                    status: res.statusCode,
                    msg: "The product was removed from cart.",
                });
            } else {
                throw (
                    err &&
                    res.json({
                        status: res.statusCode,
                        msg: "Where sorry, but something went wrong, if it persist please feel free to contact the admin for further support."
                    })
                );
            }
        });
     }
};

export {
    Cart
};


// class Cart {
//     fetchCartItem(userID, res) {
//         const query = `SELECT cartID, prodID, userID FROM Cart WHERE userID = ?`;

//         db.query(query, [userID], (err, results) => {
//             if (err) {
//                 console.error('Error fetching cart items:', err);
//                 return res.status(500).json({
//                     status: 500,
//                     msg: "Sorry, an error occurred.",
//                     err: err
//                 });
//             }
//             res.json({
//                 status: res.statusCode,
//                 results: results,
//             });
//         });
//     }

//     addToCart({ userID, prodID }, res) {
//         const query = `INSERT INTO Cart (userID, prodID) VALUES (?,?)`;
//         const data = [userID, prodID];

//         db.query(query, data, (err) => {
//             if (err) {
//                 console.error('Error adding product to cart:', err);
//                 return res.status(500).json({
//                     status: 500,
//                     msg: "Something went wrong with adding the product to the cart.",
//                     err: err
//                 });
//             }
//             res.json({
//                 status: res.statusCode,
//                 msg: "Product was added to your cart successfully"
//             });
//         });
//     }

//     removeFromTheCart(userID, prodID, res) {
//         const query = `DELETE FROM Cart WHERE userID = ? AND prodID = ?`;
//         const data = [userID, prodID];

//         db.query(query, data, (err) => {
//             if (err) {
//                 console.error('Error removing product from cart:', err);
//                 return res.status(500).json({
//                     status: 500,
//                     msg: "Something went wrong while removing the product from the cart.",
//                     err: err
//                 });
//             }
//             res.json({
//                 status: res.statusCode,
//                 msg: "The product was removed from the cart.",
//             });
//         });
//     }
// }
import { resolve } from "path";
import { connection as db } from "../config/index";

function getTheUserByG_Mail( emailAdd ) {
    return new Promise(( resolve, reject) => {

        const query = ` SELECT userID FROM Users WHERE emailAdd = ?`;

        db.query( query, [emailAdd], (err, results) => {
            if (err) {
                reject (err)
            } else if ( results.length === 0) {
                reject (new Error ( "User not available" ))
            } else {
                console.log ( results[0].userID)
                resolve ( results[0].userID);
            }
        });
    });
};

export {
    getTheUserByG_Mail
};
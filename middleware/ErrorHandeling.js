//checks if an error took place 
// function errorHandling( err, req, res, next ) {
//     if (err || res.statusCode >= 400) {
//         res.json({
//             status: err.status || res.statusCode || 500,
//             msg: 'An error has occurred. Please try again later.',
//         });
//     } else {
//         next()
//     }
// }
// export {
//     errorHandling
// }


function errorHandling (err, req, res, next) {
    if (err) {
        console.error('Error:', err);

        const statusCode = err.status || 500;

        res.status(statusCode).json({
            status: statusCode,
            msg: err.message || 'An error has occurred. Please try again later.',
        });
    } else if (res.statusCode >= 400) {
        res.json({
            status: res.statusCode,
            msg: 'An error has occurred. Please try again later.',
        });
    } else {
        next();
    }
}

export { errorHandling };
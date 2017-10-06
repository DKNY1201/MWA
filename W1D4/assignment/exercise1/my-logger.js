const myLogger = (req, res, next) => {
    const startDate = new Date();
    res.on('finish', () => {
        const endDate = new Date();
        console.log(`Method: ${req.method}, URL: ${req.url}, Duration: ${endDate - startDate}ms`);
    })
    next();
}

module.exports = myLogger
const userLogged = (req, res, next) => {
    let isLogged = true;
    if (!isLogged) {
        return res.status(401).json({message: 'User is not logged'});
    }
    next();
}

module.exports = userLogged

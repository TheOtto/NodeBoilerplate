module.exports = {
  helloWorld: (req, res, next) => {
    res.send(`hello ${req.params.name}`);
    return next();
  }
};

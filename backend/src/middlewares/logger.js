// middlewares/logger.js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // kailangan tawagin para mag-proceed
};

module.exports = logger;

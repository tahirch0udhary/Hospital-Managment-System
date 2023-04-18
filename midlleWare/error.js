const ErrorHandler = require("../utils/error.handler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }
  if (process.env.NODE_ENV == "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;

    // Wrong Mongooese Object ID Error Message

    if (err.name == "CastError") {
      const message = `Resource not found. Invalid ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Validation Error
    if (err.name == "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Duplicate Key Error
    if (err.code === 11000) {
      const message = ` Duplicate ${Object.keys(err.keyValue)} entered.`;
      error = new ErrorHandler(message, 400);
    }

    // Handling wrong JWT error
    if (err.name == "JsonWebTokenError") {
      const message = "JSON Web Token is invalid. Try Again!";
      error = new ErrorHandler(message, 400);
    }

    // Handling Expired JWT error
    if (err.name == "TokenExpiredError") {
      const message = "JSON Web Token is Expired. Try Again!";
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Cast Error
    if (err.name == "CastError") {
      res.status(error.statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

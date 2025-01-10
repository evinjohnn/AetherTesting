const responseMiddleware = (req, res, next) => {
  res.successResponse = (data, message = "Request successful") => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };

  res.badResponse = (message = "Bad Request", error) => {
    res.status(400).json({
      success: false,
      message,
      error,
    });
  };

  res.validationError = (error) => {
    res.status(422).json({
      success: false,
      message: "Validation Error",
      error,
    });
  };

  res.serverError = (message = "Internal Server Error", error) => {
    res.status(500).json({
      success: false,
      message,
      error,
    });
  };

  res.tokenvalidationError = (errors = []) => {
    res.status(401).json({
      success: false,
      message: "Validation Error",
      errors,
    });
  };
  res.tokenserverError = (message = "Internal Server Error", err = []) => {
    res.status(401).json({
      success: false,
      message,
      errors: err,
    });
  };

  next();
};

module.exports = responseMiddleware;

const { StatusCodes } = require("http-status-codes");

const validateComic = (req, res, next) => {
  const { name, author, yearOfPublication, price, numberOfPages, condition } =
    req.body;

  if (
    !name ||
    !author ||
    !yearOfPublication ||
    !price ||
    !numberOfPages ||
    !condition
  ) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide all the required fields." });
  }

  next();
};

module.exports = validateComic;

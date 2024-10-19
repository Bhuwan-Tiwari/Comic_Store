const ComicService = require("../services/comic-services");
const comicservice = new ComicService();
const { StatusCodes } = require("http-status-codes");

const create = async (req, res) => {
  try {
    const response = await comicservice.create({
      name: req.body.name,
      author: req.body.author,
      yearOfPublication: req.body.yearOfPublication,
      price: req.body.price,
      discount: req.body.discount,
      numberOfPages: req.body.numberOfPages,
      condition: req.body.condition,
      description: req.body.description,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new Comic",
      data: response,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "something went wrong",
      success: false,
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await comicservice.updateComic(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Comic updated sucesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "not able to update a Comic",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await comicservice.deleteComic(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Comic deleted sucesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "not able to delete a Comic",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await comicservice.get(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully featch the comic",
      data: response,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "something went wrong",
      success: false,
      err: error,
    });
  }
};



const getall = async (req, res) => {
  try {
    const comics = await comicservice.getAll(req.query);
const queryParams= req.query;
    return res.status(StatusCodes.OK).json({
      message: "Comics retrieved successfully",
      data: comics.rows,
      totalItems: comics.count,
      currentPage: parseInt(queryParams.page) || 1,
      totalPages: Math.ceil(comics.count / (queryParams.limit || 10)),
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error retrieving comics", error: error.message });
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
  getall,
};

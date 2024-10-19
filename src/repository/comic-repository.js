const { Comic } = require("../models/index");
const { Op } = require("sequelize");

class ComicRepository {
  async createComic(data) {
    try {
      const comic = await Comic.create(data);
      return comic;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
  async updateComic(comicid, data) {
    try {
      const comic = await Comic.update(data, { where: { id: comicid } });
      return comic;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
  async deleteComic(comicid) {
    try {
      await Comic.destroy({ where: { id: comicid } });
      return true;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
  async get(comicid) {
    try {
      const comic = await Comic.findByPk(comicid);
      return comic;
    } catch (error) {
      console.log("something went wrong at repository layer");
      throw error;
    }
  }

  async getComics({ filters, pagination, sorting }) {
    try {
      const { author, year, price, condition } = filters;
      const { limit, offset } = pagination;
      const { sortBy, sortOrder } = sorting;

      // Define query filters
      let whereClause = {};

      if (author) {
        whereClause.author = { [Op.like]: `%${author}%` };
      }

      if (year) {
        whereClause.yearOfPublication = year;
      }

      if (price) {
        whereClause.price = { [Op.lte]: price }; // Less than or equal to price
      }

      if (condition) {
        whereClause.condition = condition;
      }

      // Fetch data with filters, pagination, and sorting
      const comics = await Comic.findAndCountAll({
        where: whereClause,
        limit: limit,
        offset: offset,
        order: [[sortBy, sortOrder]],
      });
      console.log(comics);
      return comics;
    } catch (error) {
      console.log("something went wrong at repository layer");
      throw error;
    }
  }
}
module.exports = ComicRepository;

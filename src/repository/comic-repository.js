const { Comic } = require("../models/index");

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
}
module.exports = ComicRepository;

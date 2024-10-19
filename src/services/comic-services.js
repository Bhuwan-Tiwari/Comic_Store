const ComicRepository= require("../repository/comic-repository")
const comicRepository=new ComicRepository()

class ComicService {
  async create(data) {
    try {
      const comic = await comicRepository.createComic(data);
      return comic;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }
  async updateComic(comicid, data) {
    try {
      const comic = await comicRepository.updateComic(comicid, data);
      return comic;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }

  async deleteComic(comicid) {
    try {
      const response = await comicRepository.deleteComic(comicid);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }
}
module.exports = ComicService;
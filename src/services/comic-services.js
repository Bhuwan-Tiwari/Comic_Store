const ComicRepository = require("../repository/comic-repository");
const comicRepository = new ComicRepository();

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
      throw error;
    }
  }

  async get(comicid) {
    try {
      const comic = await comicRepository.get(comicid);
      return comic;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }

  async getAll(queryParams) {
    try {
      // Set default pagination and sorting
      const pagination = {
        limit: queryParams.limit ? parseInt(queryParams.limit) : 10, // Default limit: 10 items per page
        offset: queryParams.page
          ? (parseInt(queryParams.page) - 1) * (queryParams.limit || 10)
          : 0,
      };

      const sorting = {
        sortBy: queryParams.sortBy || "name", // Default sorting by 'name'
        sortOrder: queryParams.sortOrder || "ASC", // Default order: ascending
      };

      const filters = {
        author: queryParams.author || null,
        year: queryParams.year ? parseInt(queryParams.year) : null,
        price: queryParams.price ? parseFloat(queryParams.price) : null,
        condition: queryParams.condition || null,
      };

      const comics = await comicRepository.getComics({
        filters,
        pagination,
        sorting,
      });
      console.log(comics);
      return comics;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }
}
module.exports = ComicService;

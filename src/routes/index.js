const express = require("express");
const validateComic = require("../middlewares/validateComic");
const router = express.Router();
const ComicControllers = require("../controllers/comic-controllers");

router.post("/newcomic",validateComic,ComicControllers.create);
router.put("/comic/:id",ComicControllers.update);
router.delete("/comic/:id",ComicControllers.destroy);



module.exports = router;
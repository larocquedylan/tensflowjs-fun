const express = require("express");
const videosController = require("../controllers/videosController.js");
const router = express.Router();

router.use(express.json());

router
  .route("/")
  // get video list
  .get(videosController.getAllVideos)

  // post new video upload
  .post(videosController.postVideo);

router
  .route("/:id")
  // get featured video info
  .get(videosController.getVideo);

module.exports = router;

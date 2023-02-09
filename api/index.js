const express = require("express");
const router = express.Router();
const ctrlTask = require("../controller");

router.get("/", ctrlTask.getComments);
router.get("/reply", ctrlTask.getReplies);
router.get("/images", ctrlTask.getImages);

router.post("/", ctrlTask.createComment);
router.post("/reply", ctrlTask.createReply);
router.post("/image", ctrlTask.createImage);
router.post("/file", ctrlTask.createFile);

module.exports = router;
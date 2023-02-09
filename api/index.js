const express = require("express");
const router = express.Router();
const ctrlComment = require("../controller");
const { upload, uploadFile} = require('../middlewars/uploadMiddlewars')

router.get("/", ctrlComment.getComments);
router.get("/reply", ctrlComment.getReplies);
router.get("/images", ctrlComment.getImages);

router.post("/", ctrlComment.createComment);
router.post("/reply", ctrlComment.createReply);
router.post(
  "/image",
  upload.single("file"),
  uploadFile,
  ctrlComment.createImage
);
router.post("/file",
    upload.single('file'),
    uploadFile,
    ctrlComment.createFile);

module.exports = router;


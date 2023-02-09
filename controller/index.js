const service = require('../service');

const getComments = async (req, res, next) => {
  try {
    const results = await service.getAllcomments();
    res.json({
      status: "success",
      code: 200,
      result: results,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getReplies = async (req, res, next) => {
  try {
    const results = await service.getAllreplies();
    res.json({
      status: "success",
      code: 200,
      result: results,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getImages = async (req, res, next) => {
  try {
    const results = await service.getAllimages();
    res.json({
      status: "success",
      code: 200,
      result: results,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const createComment = async (req, res, next) => {
  try {
    const result = await service.createNewComment(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data: { comment: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const createReply = async (req, res, next) => {
  try {
    const result = await service.createNewReply(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data: { reply: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const createImage = async (req, res, next) => {
  try {
    const result = await service.createNewImage({image: req.downloadURL, parentId: req.body.parentId })
    res.status(201).json({
      status: "success",
      code: 201,
      data: { image: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

const createFile = async (req, res, next) => {
  try {
    const result = await service.createNewFile({ file: req.downloadURL, parentId: req.body.parentId });
    res.status(201).json({
      status: "success",
      code: 201,
      data: { file: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
  getComments,
  getImages,
  getReplies,
  createComment,
  createReply,
  createImage,
  createFile
}
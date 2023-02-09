const {initializeApp} = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const multer = require("multer");
const firebaseConfig = require("../db/firebase.config");

initializeApp(firebaseConfig);
const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });


const uploadImage = async (req, res, next) => {
    try {
        const storageRef = ref(
            storage,
            `images/${req.file.originalname}`
        );
        const metadata = { contentType: req.file.mimetype };
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);
        req.downloadURL = downloadURL;
        next();
    } catch (error) {
        return res.status(400).json(error.message)
    };
}

const uploadFile = async (req, res, next) => {
  try {
    const storageRef = ref(
      storage,
      `files/${req.file.originalname}`
    );
    const metadata = { contentType: req.file.mimetype };
    const snapshot = await uploadBytesResumable(
      storageRef,
      req.file.buffer,
      metadata
    );
    const downloadURL = await getDownloadURL(snapshot.ref);
    req.downloadURL = downloadURL;
    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {uploadImage, uploadFile, upload};
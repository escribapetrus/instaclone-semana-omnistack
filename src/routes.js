const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload")
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const router = new express.Router();
const upload = multer(uploadConfig);

router.get("/", (req,res)=>{
    return res.send("Hello, world")
 });

router.get("/posts", PostController.index)
router.post("/posts", upload.single("image"), PostController.store)

router.post("/posts/:id/like", LikeController.store)

module.exports = router;

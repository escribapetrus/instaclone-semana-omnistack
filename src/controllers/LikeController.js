const Post = require("../models/Post");

const controllers = {
    async store(req,res){
        const post = await Post.findById(req.params.id);
        post.likes++
        await post.save();
        req.io.emit("like", post)
        res.json({post})
    },
}

module.exports = controllers
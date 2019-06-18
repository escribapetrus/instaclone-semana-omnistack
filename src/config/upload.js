const multer = require("multer");
const path = require("path");

const upload = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", "upload"),
        filename: function(req,file,callback){
            callback(null,file.originalname);
        }
    }) 
}

module.exports = upload
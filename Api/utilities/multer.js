var multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const MIME_TYPE_MAP = {
  'image/png' : 'png',
  'image/jpeg' : 'jpeg',
  'image/jpg' : 'jpg'
};

exports.uploadImage = (folderName)=>{
  storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, `uploads/${folderName}`)
    },
    filename: (req, file, cb) =>{
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuidv4() +'.' + ext)
    }
  })

  return multer({storage: storage})
}



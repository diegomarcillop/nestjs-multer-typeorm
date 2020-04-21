import { extname } from "path";

export const fileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const ext = extname(file.originalname);
    const randomName = Array(6)
    .fill(null)
    .map(() => Math.round(Math.random() * 8).toString(8))
    .join('');
    callback(null, `${randomName}${ext}`)
}

export const imgFilter = (req, file, callback) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return callback( new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
}
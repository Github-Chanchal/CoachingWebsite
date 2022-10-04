import path from "path";
import fs from "fs";
const __dirname = path.resolve();

const uploadSingleFileAndSendUrl = async (req, res) => {
  console.log(req.file);
  res.send(req.file.path);
  // res.send(fs.readFileSync(path.join(__dirname + '/uploads/' + req.file)),
  // )
};

export { uploadSingleFileAndSendUrl };

const uploadSingleFileAndSendUrl = async(req,res)=>{
  // console.log(req.file);
  // console.log(req.file.path);
  res.status(200).send(req.file)
}

export {uploadSingleFileAndSendUrl}
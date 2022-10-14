const uploadSingleFileAndSendUrl = async(req,res)=>{
  res.status(200).send(req.file)
}

export {uploadSingleFileAndSendUrl}
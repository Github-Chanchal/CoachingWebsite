import axios from "axios";
const URL = "http://localhost:8080";

const createBlog = async (dataToSend) => {
  const data = {
    ...dataToSend,
  };
  console.log("data", dataToSend);
  return await axios.post(URL + "/api/blogs", data);
};

const getAllBlogs = async () => {
  return await axios.get(URL + "/api/blogs/getBlogs");
};

const StoreImage = async (fileObject) => {
  const config = {
    header: { "Content-Type": "multipart/form-data" },
  };
  const formData = new FormData()
  formData.append('image',fileObject)

  const  {data} = await axios.post(URL + "/upload", formData, config);
  // const  {data} = await axios.post(URL + "/upload", fileObject, config);
  return data;
};

export { createBlog, getAllBlogs, StoreImage };

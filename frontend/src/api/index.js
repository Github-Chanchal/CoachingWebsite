import axios from "axios";
const URL = "http://localhost:8080";

const createBlog = async (dataToSend) => {
  const data = {
    ...dataToSend,
  };
  console.log("data", dataToSend);
  return await axios.post(URL + "/api/blogs", data);
};

const getAllBlogs = async (email) => {
  return await axios.get(URL + "/api/blogs" + email);
};

async function getImageUrl(fileObject) {
  const config = {
    header: { "Content-Type": "multipart/form-data" },
  };
  const data = await axios.post(URL + "/uploads", fileObject, config);
  console.log(data);
  return data;
}

export { createBlog, getAllBlogs, getImageUrl };

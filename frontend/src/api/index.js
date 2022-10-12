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

const deleteBlogs = async (id) => {
    return await axios.delete(URL + "/api/blogs/deleteBlog/"+ id);
}

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

const register = async (email,role) => {
 if(email){
  const data = {
    email,role
  };
  console.log("data", data);
  return await axios.post(URL + "/user", data);
 }
 else{
  return "email required"
 }
};


export { createBlog, getAllBlogs, StoreImage,deleteBlogs ,register};

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

const getUsersById = async(email) =>{
    return await axios.get(URL + "/user/" + email)
}

const deleteBlogs = async (id) => {
    return await axios.delete(URL + "/api/blogs/deleteBlog/"+ id);
}

const getBlogById = async (id) => {
  return await axios.get(URL + "/api/blogs/" +id);

}

const updateBlogById = async(dataa)=>{
  // console.log(dataa);
  return await axios.put(URL + "/api/blogs" , dataa);
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

const register = async (email) => {
  console.log(email)
 if(email){
  const data = {
    email
  };
  // console.log("data", data);
  return await axios.post(URL + "/user", data);
 }
 else{
  return "email required"
 }
};


const getuser = async () => {
  
   return await axios.get(URL + "/user");
  };

const updateuser = async (users) => {
  console.log(users)
  users.role = users.role=== "user" ? "Admin" : "user";
  console.log(users);
   return await axios.put(URL + "/user",users);
  };

export { createBlog, getAllBlogs, StoreImage,deleteBlogs ,register,updateuser,getuser,getBlogById,updateBlogById,getUsersById};

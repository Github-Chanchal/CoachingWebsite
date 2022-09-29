import axios from "axios";
const URL = "http://localhost:8080";

const createBlog = async (dataToSend) => {
    const data = {
      ...dataToSend,
    };
    console.log("data" ,dataToSend)
    return await axios.post(URL + "/api/blogs", data);
  };

  export{
    createBlog
  }
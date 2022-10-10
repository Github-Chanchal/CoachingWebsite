import React, {useEffect,useState} from 'react';
import { getAllBlogs } from '../api/index.js';

const AllBlogs= ()=>{
  const [dataa, setdata] = useState();

    let data;
    useEffect(() => {
        data =  getAllBlogs();
        console.log(data);
        data.then((a)=>{
         console.log(a?.data?.data[1].value)
     setdata(a?.data?.data[2].value)
        })
        document.getElementById("index").innerHTML = dataa;
     
     },[dataa]);

     return(
     <div id="index"></div>

     );

}

export default AllBlogs;
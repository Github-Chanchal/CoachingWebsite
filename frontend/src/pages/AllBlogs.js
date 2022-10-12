import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../api/index.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [dataa, setdata] = useState();

  
    

  let data;
  const call = () => {
    data = getAllBlogs();
    // console.log(data);
    data.then((a) => {
      // console.log(a?.data?.data[1].value);
      setdata(a?.data?.data);
    });
    // document.getElementById("index").innerHTML = dataa;
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <div style={{display: "flex" , margin: 10}}>
   { dataa
      ? dataa.map((item) => {
          return (
            <Card style={{ width: "18rem" ,margin:5}} key={item._id}>
              <Card.Img variant="top" src={item.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {/* <Card.Text>{item.value}</Card.Text> */}
                <Link to="/more" state={item}><Button  variant="primary">Read More</Button> </Link>
              </Card.Body>
            </Card>
          );
        })
      : ""}
 </div> );
};

export default AllBlogs;

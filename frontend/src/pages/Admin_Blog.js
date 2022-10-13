import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../api/index.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { deleteBlogs } from "../api/index.js";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { getBlogById } from "../api/index.js";

const Admin_Blog = () => {
  const [dataa, setdata] = useState();

  const deleteBlog = async (id) => {
    let result = await deleteBlogs(id);
    if (result) {
      alert("rescord is deleted");
      window.location.reload();
    }
  };

  let data;
  const call = () => {
    data = getAllBlogs();

    data.then((a) => {
      setdata(a?.data?.data);
    });
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <div style={{ display: "flex", margin: 10 }}>
      {dataa
        ? dataa.map((item) => {
            return (
              <Card style={{ width: "18rem", margin: 5 }} key={item._id}>
                <DeleteIcon
                  onClick={() => deleteBlog(item._id)}
                  style={{ marginLeft: "auto" }}
                />
                <Link to="/add" state={item}>
                  {" "}
                  <UpdateIcon style={{ marginLeft: "auto" }} />
                </Link>
                <Card.Img variant="top" src={item.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  {/* <Card.Text>{item.value}</Card.Text> */}
                  <Link to="/more" state={item}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })
        : ""}
    </div>
  );
};

export default Admin_Blog;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {createBlog} from "../api/index.js";

export default function App() {
    
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [youtubeLink, setYoutubeLink] = useState();

  const storeBlog = async(req,res)=>{
    try{
        const data = await createBlog({
            title,
            description,
            image,
            youtubeLink
            })
            console.log(data);
            alert("saved successfully");

    }catch(err){    
        console.log(err); 
    }    
  }

  return (
    <div
      style={{ display: "block", width: 700, padding: 30 }}
      className="text-center m-auto"
    >
      <h4>Add your blog</h4>
      <Form>
        <Form.Group>
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
                console.log(e.target.value);
              }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            style={{ height: "170px" }}
            onChange={(e) => {
                setDescription(e.target.value);
                console.log(e.target.value);
              }}
            value={description}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Image Url</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter your age"
            value={image}
            onChange={(e) => {
                setImage(e.target.value);
                console.log(e.target.value);
              }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Youtube Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your age"
            value={youtubeLink}
            onChange={(e) => {
                setYoutubeLink(e.target.value);
                console.log(e.target.value);
              }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => storeBlog()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

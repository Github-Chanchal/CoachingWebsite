import React, { useState, useRef } from "react";
import RichtextEditor from "./RichtextEditor.js";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { getImageUrl } from "../api/index.js";
import { StoreImage } from "../api/index.js";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardBody,
  Form,
  Input,
  Label,
  Button,
  Container,
} from "reactstrap";
import JoiditEditer from "jodit-react";
import { createBlog } from "../api/index.js";

const AddBlog = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [path, setPath] = useState("");
  const[thumbnail, setThumbnail] = useState([]);
  const url = "http://localhost:8080/";
  const storeBlog = async () => {
    const thumbnailPath = await StoreImage(thumbnail);
  //   thumbnailPath.then((a)=>{
  //     console.log("chch"+a?.data?.data[0].value)
  // // setdata(a?.data?.data[2].value)
  //    })
  const thumbnailUrl = url+thumbnailPath.path.replace(`\\`, `/`);;
    const data = await createBlog({
      title,
      thumbnailUrl,
      value
    });
    alert("Blog created successfully");
    console.log(data);
  };
  const onSubmitClick = async (e) => {
    e.preventDefault();
    // console.log(file);
    const data = await StoreImage(image);
    console.log("data0"+data)
    const path = url + data.path.replace(`\\`, `/`);
    console.log(path);
    setPath(path);
    // console.log("localhost:8080/"+data.path);
  };

  return (
    <div className="wrapper">
      <Card className="shadow-sm  border-0 mt-2">
        <CardBody>
          {/* {JSON.stringify(post)} */}
          <h3>What going in your mind ?</h3>
          <div className="my-3">
            <Label for="title">Post title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              placeholder="Enter here"
              className="rounded-0"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <form encType="multipart/form-data">
            <div className="form-group">
            <Label for="title">Post title</Label>
              <input
                type="file"
                name="image"
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
            </div>

            <div></div>
          </form>

          <div className="my-3">
            <Label for="content">Post Content</Label>
            <JoiditEditer onChange={(content) => setValue(content)} />
            {/* {value} */}
          </div>

          {/* file field  */}

          <Container className="text-center">
            <Button
              type="submit"
              className="rounded-0"
              color="primary"
              onClick={() => storeBlog()}
            >
              Create Post
            </Button>
            <Button className="rounded-0 ms-2" color="danger">
              Reset Content
            </Button>
          </Container>
        </CardBody>
      </Card>
      <form encType="multipart/form-data">
        <div className="form-group">
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSubmitClick}
        >
          Submit
        </button>
        <div
          onClick={() => {
            var copyText = document.getElementById("myInput");

            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);

            // Alert the copied text
          }}
        >
          <input
            type="text"
            name="url"
            placeholder="image path"
            value={path}
            id="myInput"
          />
        </div>
      </form>
    </div>

    // <>
    // <RichtextEditor setValue={setValue}/>
    //         {value}
    // </>
  );
};
export default AddBlog;

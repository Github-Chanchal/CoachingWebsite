import React, { useState, useRef } from "react";
import RichtextEditor from "./RichtextEditor.js";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { getImageUrl } from "../api/index.js";
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

  const storeBlog = async () => {
    const fileUrl = await getImageUrl(image);
    console.log(fileUrl);
    // const data = await createBlog({
    //   title,
    //   value,
    //   fileUrl,
    // });
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

          <div className="my-3">
            <Label for="content">Post Content</Label>
            <JoiditEditer onChange={(content) => setValue(content)} />
            {/* {value} */}
          </div>

          {/* file field  */}
          <form enctype="multipart/form-data">
            <div className="mt-3">
              <Label for="image">Select Post banner</Label>
              <Input
                id="image"
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </form>

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
    </div>

    // <>
    // <RichtextEditor setValue={setValue}/>
    //         {value}
    // </>
  );
};
export default AddBlog;

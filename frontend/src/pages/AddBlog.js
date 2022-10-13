import React, { useState, useRef, useEffect } from "react";
import RichtextEditor from "./RichtextEditor.js";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { getImageUrl } from "../api/index.js";
import { StoreImage } from "../api/index.js";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, useLocation } from "react-router-dom";
import { updateBlogById } from "../api/index.js";

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
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [path, setPath] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const url = "http://localhost:8080/";
  const location = useLocation();
  const props = location.state;
  // console.log(props);
  // setTitle((props.title)?props.title : "")
  const storeBlog = async () => {
    const thumbnailPath = await StoreImage(thumbnail);
    //   thumbnailPath.then((a)=>{
    //     console.log("chch"+a?.data?.data[0].value)
    // // setdata(a?.data?.data[2].value)
    //    })
    const thumbnailUrl = url + thumbnailPath.path.replace(`\\`, `/`);
    const data = await createBlog({
      title,
      thumbnailUrl,
      value,
    });
    alert("Blog created successfully");
    navigate("/allBlogs");
    console.log(data);
  };
  const onSubmitClick = async (e) => {
    e.preventDefault();
    // console.log(file);
    const data = await StoreImage(image);
    console.log("data0" + data);
    const path = url + data.path.replace(`\\`, `/`);
    console.log(path);
    setPath(path);
    // console.log("localhost:8080/"+data.path);
  };
  function set() {
    if (!title && props) {
      setTitle(props.title);
      setValue(props.value);
    }
  }
  useEffect(() => {
    set();
  }, [props]);

  const updateBlog = async (_id) => {
    var thumbnailUrl = "";
    if (thumbnail.length === 0) {
      thumbnailUrl = props.thumbnailUrl;
    } else {
      const thumbnailPath = await StoreImage(thumbnail);
      thumbnailUrl = url + thumbnailPath.path.replace(`\\`, `/`);
      console.log(thumbnailUrl);
    }
    const dataa = await updateBlogById({
      _id,
      title,
      value,
      thumbnailUrl,
    });
    alert("updated successfully");
    // console.log(res);
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
              <Label for="title">Post thumbnail:-</Label>
              <input
                type="file"
                name="image"
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
              {props ? (
                props.thumbnailUrl ? (
                  <div>
                    your previous thumbnail is{" "}
                    <a href={props.thumbnailUrl} target="_blank">
                      click here
                    </a>
                  </div>
                ) : (
                  <div>there is not previous thumbnail </div>
                )
              ) : null}
            </div>

            <div></div>
          </form>

          <div className="my-3">
            <Label for="content">Post Content</Label>
            <JoiditEditer
              onChange={(content) => setValue(content)}
              value={value}
            />
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
            <Button
              className="rounded-0 ms-2"
              onClick={() => updateBlog(props._id)}
              color="danger"
            >
              Update Content
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

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';



function ReadMore() {
  const location = useLocation();
    const props = location.state;
    console.log(props);
    console.log(props.title);
   useEffect(() => {
    document.getElementById(props._id).innerHTML = props.value;
   },[props]);
  return (
    <div>
        <h1>{props.title}</h1>
        <Card>
        {/* <Card.Img variant="top" src={props.thumbnailUrl} /> */}
        <Card.Body>
          <Card.Text id={props._id}>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReadMore;

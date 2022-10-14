import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
        <Card className="text-center">
        {/* <Card.Img variant="top" src={props.thumbnailUrl} /> */}
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text id={props._id}>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReadMore;

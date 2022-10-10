import React, {useEffect,useState} from 'react';
import { getAllBlogs } from '../api/index.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllBlogs= ()=>{
  const [dataa, setdata] = useState();

    let data;
    const call = () =>{
      data =  getAllBlogs();
        console.log(data);
        data.then((a)=>{
         console.log(a?.data?.data[1].value)
     setdata(a?.data?.data)
        })
        // document.getElementById("index").innerHTML = dataa;
    }
    useEffect(() => {
        call()
     
     },[]);

     return(
      // <div id="index"></div>
      (dataa)?dataa.map((item)=>{
        return(
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.thumbnailUrl} />
        {console.log(item.thumbnailUrl)}
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {/* <Card.Text>
           {item.value}
          </Card.Text> */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        )
      }) :""

     );

}

export default AllBlogs;
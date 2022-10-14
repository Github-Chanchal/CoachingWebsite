import React, { useEffect, useState } from "react";
import { updateuser, getuser, createBlog } from "../api/index.js";
import Card from "react-bootstrap/Card";
import { UserAuth } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import {register} from "../api/index.js"

const Admin = () => {
  const [data, setdata] = useState();
  const [email, setEmail] = useState();
  const setAdmin=async(req,res)=>{
    const data = await register(
      email
    )
    alert("Register Successfully as admin")
  }

  const { user } = UserAuth();

  async function usercall() {
    // console.log("object");
    const userdata = await getuser();
    setdata(userdata?.data?.user);
  }
  async function changeRole(users) {
    updateuser(users);
  }
  useEffect(() => {
    usercall();
  }, [user]);
  // console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
        <label>
          Name:
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
            name="name"
          />
        </label>
       <button onClick={() => { setAdmin()}}>submit</button>

      {data
        ? data.map((users) => {
            return (
              <Card
                style={{ width: "18rem", margin: 10, padding: 10 }}
                key={users._id}
              >
                <Card.Title>{users.email}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {users.role}
                </Card.Subtitle>
                <Button
                  variant="primary"
                  onClick={() => {
                    changeRole(users);
                  }}
                >
                  Change role
                </Button>
              </Card>
            );
          })
        : ""}
    </div>
  );
};

export default Admin;

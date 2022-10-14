// import mongoose from "mongoose";
import User from "../model/User.js";

export const registerUser = async (req, res) => {
  try {
    const user = await User.find({
      email: req.body.email,
    });
    if (user.length > 0) {
      res
        .json({
          message: "old user",
          data: user,
        })
        .status(200);
    } else {
      const data = await User.create({
        email: req.body.email,
        role: "Admin",
      });
      res
        .json({
          message: "Successfully Created",
          data: data,
        })
        .status(200);
    }
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.send({ user: user });
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};


export const getUserByEmail = async (req, res) => {
  // console.log(req.params.email);
  try {
    const user = await User.find({
      email: req.params.email,
    });
    res.send({ user: user });
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};

export const updateRole = async (req, res) => {
  var email = req.body.email;
  var role = req.body.role;
//   console.log(email,role)
  try {
    const data = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        $set: {
            
         role: role,
          
        },
      }
    );
    res
      .json({
        message: "Successfully Updated",
        data: data,
      })
      .status(200);
  } catch (error) {
    res
      .send({
        message: "Some Error on Server",
        error,
      })
      .status(400);
  }
};

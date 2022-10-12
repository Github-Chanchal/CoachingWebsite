// import mongoose from "mongoose";
import User from "../model/User.js";

export const registerUser = async (req, res) => {
    try {
      const user = await User.find({
        email: req.body.email
      })
      if(user.length > 0) {
        res.json({
            message: "old user",
            data: user,
          })
          .status(200);
      }
      else{
        const data = await User.create({
            email: req.body.email,
            role: req.body.role,
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

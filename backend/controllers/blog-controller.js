import { request } from "express";
import mongoose from "mongoose";
import Blog from "../model/Blog.js";

export const getAllBlogs = async (req,res) => {
  let blogs;
  try {
    blogs = await Blog.find({
      // email: req.params.email,
    });
    res.json({
      "message":"Blog is available",
      "data":blogs
    }).status(200);
  } catch (error) {
    console.log(err);
  }
  if (!blogs) {
    return res.status(404).send("No Blogs Found");
  }

};

export const addBlogs = async (req, res, next) => {
  try {
    // console.log(req.body);
    const data = await Blog.create({
      ...req.body,
    });
    res
      .json({
        message: "Successfully Created",
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

export const updateBlogs = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "unable to update the blog" });
  }
  return res.status(200).json({ blog });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(400).json({ message: "No blog found" });
  }
  return res.status(200).json({ blog });
};

export const deleteBLogg = async (req, res) => {
  let blog;
  try {
    blog = await Blog.deleteOne({_id:req.params.id});
    // blog.save();
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};

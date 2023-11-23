const mongoose = require('mongoose')
const User = require('../Model/UserModel.js')
const express = require('express')

const MONGO_URL = `mongodb+srv://MuhammadHasnain:hasnainMongoDB@cluster0.c5la0fw.mongodb.net/`;
mongoose.connect(MONGO_URL);

const userController = {
    add: async (req,res) => {
        const {name,email,age} = req.body;
        try{
            const newUser = new User({name,email,age})
            const result = await newUser.save();
            res.send({message:'data post successfully', data: result});

        } catch {
            res.status(500).send({message:'data post failed'})
        }
    },
        get: async (req,res) => {
            const {name,email,age} = req.body;
            try{
                const Userfind = await User.find({})
                res.send({message:'data get successfully', data: Userfind});
    
            } catch {
                res.status(500).send({message:'data get failed'})
            }
        },
            getById: async (req,res) => {
                try{
                    const userId = req.params.id;
                    const result = await User.findById(userId);
                    res.send({message:'data getbyid successfully', data: result});
        
                } catch {
                    res.status(500).send({message:'data getbyid failed'})
                }
        },

        put: async (req, res) => {
            try {
              const userId = req.params.id;
              const update = req.body;
              const result = await User.findByIdAndUpdate(userId, update, { new: true });
              res.send({ message: 'Data put successfully', data: result });
            } catch (error) {
              res.status(500).send({ message: 'Data put failed' });
            }
          },
          
          delete: async (req, res) => {
            try {
              const userId = req.params.id;
              const result = await User.findByIdAndDelete(userId);
              res.send({ message: 'Data delete successfully', data: result });
            } catch (error) {
              res.status(500).send({ message: 'Data delete failed' });
            }
          }
          
};

module.exports = userController;





















const axios = require("axios");
const User = require("../models/user");

module.exports = {
  
  userinfoControl: async (req, res) => {
    User.findAll().then(data =>{
        return res.status(200).send(data)
    })
  },
  userRegisterControl: async(req,res) =>{
      const {userName,userDesc,hasCat} = req.body
      User.create({userName:userName,userDesc:userDesc,hasCat:hasCat}).then(data =>{
          return res.status(200).send(data)
      })


  }
};

const axios = require("axios");
const {User} = require("../models");

module.exports = {
  
  userinfoControl: async (req, res) => {
console.log(User)
const {userName } = req.body

// const userInfo = await User.findOne()

// console.log(userInfo)

    User.findAll().then(data =>{

      if(!data){
        return res.status(400).send('불러올수 없다')
      }
        return res.status(200).send(data)
    }).catch(err=>{
      return res.status(500).send(err)
    })
  },
  userRegisterControl: async(req,res) =>{
      const {userName,userDesc,hasCat,id} = req.body
console.log(id)
      User.create({userName:userName,userDesc:userDesc,hasCat:hasCat}).then(data =>{

        if(!data){
          return res.status(400).send('잘못됨')
        }
          return res.status(200).send(data)
      }).catch(err=>{
        return res.status(500).send(err)
      })


  }
};

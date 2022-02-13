const axios = require("axios");
const {User} = require("../models");

module.exports = {
  
  userinfoControl: async (req, res) => {
// console.log(User)
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
      const {userName,userDesc,hasCat} = req.body
// console.log(id)
      User.create({userName:userName,userDesc:userDesc,hasCat:hasCat}).then(data =>{

        if(!data){
          return res.status(400).send('잘못됨')
        }
          return res.status(200).send(data)
      }).catch(err=>{
        return res.status(500).send(err)
      })


  },
  userHasCat: async(req,res) =>{
    console.log(req.params)
    try{
    //해당 유저가 고양이가 있는가 확인한다.
    const catFind = await User.findOne({where:{id:req.params.userIndex}})

    if(!catFind){
      return res.status(400).send('펫 유무 조회 할게 없어')
    }
 
      return res.status(200).send({hasCat:catFind.dataValues.hasCat})
 
   }catch(err){
      return res.status(500).send(err)
    }
    //해당 고양이 유저를 수정한다 post일경우

  },
  userHasCatUpdate: async(req,res) =>{
    console.log(req.params)
    //해당 유저가 고양이가 있는가 확인한다.
    try{
      const {hasCat} = req.body
   
        

    const catFind = await User.update({hasCat:hasCat},{where:{id:req.params.userIndex}})

if(!catFind){
  return res.status(400).send('바꿀게없어')
}

      return res.status(200).send({messagea:'수정 성공',data:catFind})

      i

  }catch(err){
    return res.status(500).send('수정실패',err)
  }
    //해당 고양이 유저를 수정한다 post일경우



  },
   userDelete: async(req,res) =>{

    User.destroy({where:{id:req.params.userIndex}}).then(data =>{

      return res.status(200).send('삭제성공')
    }).catch(err=>{
      return res.status(500).send('삭제 실패',err)
    })



   }

};

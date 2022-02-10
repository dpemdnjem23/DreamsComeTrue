const axios = require("axios");
const User = require("../models/user");

module.exports = {
  delayControl: async (req, res) => {
    axios.get("https://httpbin.org/delay/5", {
      headers: {
        Accept: "application/json",
      },
    }).then(data =>{
        return res.status(200).send(data)
    })
  },
};

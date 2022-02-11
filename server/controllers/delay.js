const axios = require("axios");


module.exports = {
  delayControl: async (req, res) => {
    axios.get("https://httpbin.org/delay/5", {
      headers: {
        Accept: "application/json",
      },
    }).then(data =>{
        return res.status(200).send('5초뒤 반응')
    })
  },
};

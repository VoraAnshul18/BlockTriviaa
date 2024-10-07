const jwt = require("jsonwebtoken")

module.exports = function(req,res,next) {
    try{
       const token = req.headers.authorization.split(' ')[1];
       const decoded = jwt.verify(token, "b23cb424-1bf4-4003-b58e-a85331d16a3e");
       req.body.userid=decoded.userid;
       next();
    }
    catch(error){
      res.send({
        message: error.message,
        data: error,
        success: false
      })
    }
}
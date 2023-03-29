const jwt = require("jsonwebtoken");


const isAdmin = (req, res, next) => {  
  let token = req.headers["authToken"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    role = decoded.roles;
    
  });
  
   if (role === "admin") {
       next();
       return;
   }
   res.status(403).send({
     message: "Require Admin Role!"
   });
   return;
    
  
};

const isUser = (req, res, next) => {   
  let token = req.headers["authtoken"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, "dfghjk" , (err, decoded) => {
    console.log(decoded);
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    else{
      if(decoded["Role"] == "user")
      {
          console.log("Verified!");
          next();
      }
      else{
        return res.status(403).send({
            message: "Require User Role!"
          });
      }
    }
    
  });
};


module.exports = {isAdmin , isUser};
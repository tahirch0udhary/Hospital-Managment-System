const gethome=(req,res)=>{res.send("Staff my home page")}
const login=(req,res)=>{res.send("Staff Login Page")}
const RegisterP=(req,res)=>{res.send("Patient registeration page")}
const infoDesk=(req,res)=>{res.send("Staff Info Desk page")}
const newsEvent=(req,res)=>{res.send("Staff News and Event page")}



module.exports = {gethome,
login,
RegisterP,
infoDesk,
newsEvent,
};
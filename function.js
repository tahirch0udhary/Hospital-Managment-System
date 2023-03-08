const gethome=(req,res)=>{res.send("user my home page")}
const facilities=(req,res)=>{res.send("user Facilities page")}
const department=(req,res)=>{res.send("user department page")}
const infoDesk=(req,res)=>{res.send("user Info Desk page")}
const newsEvent=(req,res)=>{res.send("user News and Event page")}
const aboutus=(req,res)=>{res.send("user About us page")}
const complaints=(req,res)=>{res.send("user complaint page")}
const career=(req,res)=>{res.send("user career page")}
const contactus=(req,res)=>{res.send("user contact us page")}


module.exports = {gethome,
facilities,
department,
infoDesk,
newsEvent,
aboutus,
complaints,
career,
contactus};

exports.adminLogin=function(req,res)
{
res.send("Log-in page");
};
exports.Admindashboard=function(req,res)
{
  res.send("admin Dashboard" + JSON.stringify(req.params)  );
};
exports.Addpatinet=function(req,res)
{
 res.send("Admin add patient" + JSON.stringify(req.params)  );
};
exports.removepatient=function(req,res)
{
  res.send("Admin remove patient" + JSON.stringify(req.params)  );
};
exports.Updaterecord=function(req,res)
{
  res.send("Admin Update patient record" + JSON.stringify(req.params)  );
};
exports.AddDoctor=function(req,res)
{
 res.send("Admin add Doctor" + JSON.stringify(req.params)  );
};
exports.removedoctor=function(req,res)
{
  res.send("Admin remove doctor" + JSON.stringify(req.params)  );
};

exports.Updatedoctor=function(req,res)
{
  res.send("Admin Update doctor record" + JSON.stringify(req.params)  );
};
exports.home=function(req,res)
{
  res.send("Home Page" + JSON.stringify(req.params)  );
};
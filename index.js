const express = require ("express");
const {users} =require ("./data/users.json");
const app = express();
const Port = 8081;
app.use(express.json());

app.get("/" ,(req,res) => {
    res.status(200).json({
        message:"Server is up and running",
    });
});

/**
 * Route:/users
 * METHOD:GET
 * Description:Get all users
 * Access:public
 * Parameter:none
 */

app.get("/users",(req,res) => {
    res.status(200).json({
        success:true,
        data:users,
    });
});


/**
 * Route:/users/:id
 * METHOD:GET
 * Description:Get single users by id
 * Access:public
 * Parameter:id
 */

app.get("/users/:id",(req,res) => {
    const {id} =req.params
const user = users.find((each) => each.id=== id)
if(!user){
    return res.status(404).json({
        success:false,
        message:"user not found",
    });
}
return res.status(200).json({
    success:true,
    data:user,
});
});




app.get("*" ,(req,res) => {
    res.status(400).json({
        message:"This route does not exist",
    });
});

app.listen(Port,() => {
    console.log(`server is running at port ${Port}`);
});
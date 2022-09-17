const express = require ("express");


const usersRouter = require ("./routes/users");
const booksRouter = require ("./routes/books");


const app = express();

const Port = 8081;

app.use(express.json());

app.get("/" ,(req,res) => {
    res.status(200).json({
        message:"Server is up and running",
    });
});


app.use("/users",usersRouter);
app.use("/books",booksRouter);



app.get("*" ,(req,res) => {

    res.status(404).json({
        message:"This route does not exist",
    });
});

app.listen(Port,() => {
    console.log(`server is running at port ${Port}`);
});
import express from "express";
import models from "./models/index";
import connectWithDb from "./mongo";
const app = express();
app.use(express.json());




const port = 3000;
connectWithDb();
app.get('/', (req, res) => {
    const query = JSON.stringify(req.query);
    res.send("testing get " + query)
});
app.post('/', (req, res) => {
    const body = req.body;
    const user = new models.User({ username: body.username, createAt: new Date() });
    user.save().then((savedUser) => {
        res.status(201).send('User saved.Id' + savedUser._id);
    }).catch((error) => {
        console.log("error");
        res.status(500).send(error);
    });
})
app.listen(port, () => {
    console.log("listening to port no:" + port)
})
//log(models);
//Doing up and running express server
//configure the express server
//handle the routes of the server


//use directory import
//use async await function
//separation of violation

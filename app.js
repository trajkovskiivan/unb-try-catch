const express = require("express");


const bodyParser = require("body-parser");
const morgan = require("morgan");

const port = 8080;
const app = express();


const {signin, signup, home, wellcome} = require("./components/components")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const propertyRoutes = require("./routes/property.routes");
const userRoutes = require("./routes/user.routes");

app.get("/", (req, res) => {
    res.redirect("/signin")
})
app.get("/signin", (req, res) => {
    res.end("Sign In")
})

app.get("/signup", (req, res) => {
    res.end("Sign Up")
})

app.use("/user", userRoutes)
app.use("/properties", propertyRoutes)


app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})
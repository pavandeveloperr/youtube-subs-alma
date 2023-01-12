const express = require("express");
const app = express();

//Parse JSON bodies using express.json() (middleware)
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
const subscriberRoute = require("./routes/subscriberRoutes");

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    greeting:
      "Hello, i am Pavan Kulkarni, this is a backend API to get Youtube Subscribers",
    routes: [
      {
        route: "/subscribers",
        response: "Response with an array subscribers(an Object)",
      },
      {
        route: "/subscribers/names",
        response:
          "Response with an array of subscribers(an Object with only two fields name and subscribedChannel)",
      },
      {
        route: "/subscribers/:id",
        response:
          "Response with a subscriber*(an object)* with given id Response with status code 400 and Error message({message: error.message}) if id does not match",
      },
    ],
  });
});

// router middleware
app.use("/", subscriberRoute);

module.exports = app;

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const managerData = require("./manager.json");
const apartmentData = require("./apartment.json");
const flatData = require("./flat.json");

const Apartment = require("./models/apartment");
const Manager = require("./models/manager");
const Flat = require("./models/flats");

const ApartmentRoute = require("./routes/apartment");
const ManagerRoute = require("./routes/manager");

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(
  process.env.ATLAS_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connection to DB failed");
    } else {
      console.log("Database is successfully connected");
      Manager.find()
        .then((data) => {
          if (data.length === 0) {
            Manager.insertMany(managerData)
              .then(() =>
                console.log("Initial Data of manager is Added to the database")
              )
              .catch((err) => console.log("Error: " + err));
          } else {
            console.log("initial data is allready present");
          }
        })
        .catch((err) => console.log("Error: " + err));
      Apartment.find().then((data) => {
        if (data.length === 0) {
          Apartment.insertMany(apartmentData)
            .then(() =>
              console.log("Initial Data of apartment is Added to the database")
            )
            .catch((err) => console.log("Error: " + err));
        } else {
          console.log("initial data is allready present");
        }
      });
      Flat.find().then((data) => {
        if (data.length === 0) {
          Flat.insertMany(flatData)
            .then(() =>
              console.log("Initial Data of flat is Added to the database")
            )
            .catch((err) => console.log("Error: " + err));
        } else {
          console.log("initial data is allready present");
        }
      });
    }
  }
);

//parent route
app.use("/api/apartment", ApartmentRoute);
app.use("/api/manager", ManagerRoute);

app.listen(5000, () => {
  console.log("The server is up and running at port 5000");
});

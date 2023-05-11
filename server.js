const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const app = express();
app.use(cors());
const axios = require ("axios");

// https://api.unsplash.com/search/photos
// query
// client_id 

app.get("/", (request, response) => {
  response.status(200).json("You are looking at my root route, how roude!");
});

app.get("/photos", async (resquest, response) => {
const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=wizard`;
const res = await axios.get(API);
const photos = [];
res.data.results.map((photo)=>{
return {
id: photo.id,
img_url: photo.urls.regular,
original_image: photo.links.self,
photographer: photo.user.name,
  };
});
response.json("res.data");
});




app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
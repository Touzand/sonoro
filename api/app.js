const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/sonoro/tracks/:trackName", (req, res) =>
res.sendFile(__dirname + `/public/tracks/${req.params.trackName}`)
);

app.get("/sonoro/icons/:iconName", (req, res) => {
res.sendFile(__dirname + `/public/icons/${req.params.iconName}`)
});


app.get("/sonoro/:iconName", (req, res) =>
res.sendFile(__dirname + `/public/OnSound/${req.params.iconName}`)
);

app.use(function(req, res, next) {
    res.status(404).json({message: 'Error accessing route'});
});

app.listen(3000,()=>{
console.log('servidor escuchando ...')
})

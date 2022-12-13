const fs = require("fs");
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fileStorage = require("./fileStorage");


//Henter lagrede data
const data = fileStorage.loadData();

//Starter opp express, og skrur på public-mappen
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

//Lar oss få tilgang til bodyobjektet til en post-request
app.use(express.urlencoded({ extended: true }));

//Legger til Handlebars for å få til Server Side Rendering
const viewPath = path.join(__dirname, "../views/pages");
const partialsPath = path.join(__dirname, "../views/partials");
app.set("view engine", hbs);
app.set("views", viewPath);

hbs.registerPartials(partialsPath);

let name = "";

function sendInn(request, response) {
  const svar = request.body;
  
  let snillellerikke = request.body.snillellerslem;
  if (snillellerikke === "snill") {
  name = request.body.navn;
  response.redirect("/registrertonske_snill"); }
  else if (snillellerikke === "slem") {
  name = request.body.navn;
  response.redirect("/registrertonske_slem"); }

  data.svarTabell.push(svar);
  fileStorage.storeData(data);
}
function paameldteRute(request, response) {
  response.render("paameldte.hbs", data);
}8
function registrertonske_snillRute(request, response) {
  response.render("takkfordinonskeliste.hbs", {
    name: name,
  });
}
function registrertonske_slemRute(request, response) {
  response.render("takkfordinonskeliste_not.hbs", {
  name: name, });
}
function AdminRute(request, response) {
  response.render("nissenAdmin.hbs", data);
}
app.get("/paameldte", paameldteRute);
app.get("/registrertonske_snill",registrertonske_snillRute);
app.get("/registrertonske_slem",registrertonske_slemRute);
app.get("/nissenAdmin", AdminRute);
app.post("/sendinn", sendInn);

app.listen(3000, function () {
  console.log("Server is up! Check http://localhost:3000");
});

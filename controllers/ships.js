import { Ship } from "../models/ship.js"

function index(req, res){
  Ship.find({})
  .then(ships => {
    console.log(ships);
    res.render('ships/index', {
      ships,
      title: "Ships",
      user: req.user ? req.user : null, 
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newShip(req, res){
  console.log("New shippy!");
  res.render('ships/new', {
    title: 'Add Ship',
    user: req.user ? req.user : null, 
  })
}

export {
  index,
  newShip as new
}
import { Ship } from "../models/ship.js"

function index(req, res){
  console.log("We go to ships!");
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

export {
  index,
}
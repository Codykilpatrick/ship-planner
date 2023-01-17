import { Battlegroup } from "../models/battlegroup.js"
import { Ship } from "../models/ship.js"

function index(req, res){
  Battlegroup.find({})
  .populate('ships')
  .sort('aor')
  .then(battlegroups => {
    Ship.find({})
    .then(ships => {
      res.render('map', {
        battlegroups,
        ships,
        title: "Map",
        user: req.user ? req.user : null, 
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
})
.catch(error => {
  console.log(error)
  res.redirect('/')
})
}

export {
  index
}
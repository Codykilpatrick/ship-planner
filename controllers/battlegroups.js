import { Battlegroup } from "../models/battlegroup.js"
import { Ship } from "../models/ship.js"

function index(req, res){
  Battlegroup.find({})
  .then(battlegroups => {
    res.render('battlegroups/index', {
      battlegroups,
      title: "Battlegroups",
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
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

function create(req, res){
  for (const key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
  Battlegroup.create(req.body)
  .then(battlegroup => {
    res.redirect('/battlegroups')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/battlegroups')
  })
}

function deleteBattlegroup(req, res){
  Battlegroup.findByIdAndDelete(req.params.id)
  .then(battlegroup => {
    res.redirect('/battlegroups')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/battlegroups')
  })
}

export {
  index,
  create,
  deleteBattlegroup as delete,
}
import { Battlegroup } from "../models/battlegroup.js"
import { Ship } from "../models/ship.js"

function index(req, res){
  Battlegroup.find({})
  .populate('ships')
  .then(battlegroups => {
    Ship.find({_id: {$nin: battlegroups.ships}})
    .then(ships => {
      res.render('battlegroups/index', {
        battlegroups,
        ships,
        title: "Battlegroups",
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

function addShip(req, res){
  Battlegroup.findById(req.params.id)
  .then(battlegroup => {
    battlegroup.ships.push(req.body.shipId)
    battlegroup.save()
    .then(() => {
      res.redirect('/battlegroups')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  create,
  deleteBattlegroup as delete,
  addShip,
}
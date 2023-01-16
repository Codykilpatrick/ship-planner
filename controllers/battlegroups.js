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
  req.body.owner = req.user.profile._id
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
    Ship.findById(req.body.shipId)
    .then(ship => {
      ship.aor = battlegroup.aor
      ship.battleGroup = req.params.id
      ship.save()
      res.redirect(`/battlegroups/${req.params.id}/edit`)
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

function edit(req, res){
  Battlegroup.findById(req.params.id)
  .populate('ships')
  .then(battlegroup => {
    Ship.find({_id: {$nin: battlegroup.ships}})
    .then(ships => {
      res.render('battlegroups/edit', {
        title: "Edit battlegroup",
        battlegroup,
        ships,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/battlegroups')
  })
}

function removeShip(req, res){
  Battlegroup.findById(req.params.bgid)
  .then(battlegroup =>{
    battlegroup.ships.remove({_id: req.params.shipid})
    battlegroup.save()
    res.redirect(`/battlegroups/${req.params.bgid}/edit`)
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
  addShip,
  edit,
  removeShip,

}
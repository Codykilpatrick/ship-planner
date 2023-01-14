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

function create(req, res){
  req.body.independentSteaming = !!req.body.independentSteaming
  for (const key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
  Ship.create(req.body)
  .then(ship => {
    res.redirect('/ships')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/ships')
  })
}

function deleteShip(req, res){
  Ship.findByIdAndDelete(req.params.id)
  .then(ship => {
    res.redirect('/ships')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/ships')
  })
}

export {
  index,
  newShip as new,
  create,
  deleteShip as delete,
}
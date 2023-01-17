import { Router } from "express"
import * as battlegroupCtrl from '../controllers/battlegroups.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// localhost:3000/battlegroups

// GET localhost:3000/battlegroups
router.get('/', isLoggedIn, battlegroupCtrl.index)

// GET localhost:3000/battles/edit
router.get('/:id/edit', isLoggedIn, battlegroupCtrl.edit)

// POST localhost:3000/battlegroups
router.post('/', isLoggedIn, battlegroupCtrl.create)

// DELETE localhost:3000/battlegroups/:id
router.delete('/:id', isLoggedIn, battlegroupCtrl.delete)

//DELETE localhost:3000/:bgid/:shipid
router.delete('/:bgid/:shipid', isLoggedIn, battlegroupCtrl.removeShip)

//POST localhost:3000/battlegroups/:id/ships
router.post('/:id/ships', isLoggedIn, battlegroupCtrl.addShip)

export {
  router
}
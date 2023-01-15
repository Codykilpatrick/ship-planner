import { Router } from "express"
import * as battlegroupCtrl from '../controllers/battlegroups.js'

const router = Router()

// localhost:3000/battlegroups

// GET localhost:3000/battlegroups
router.get('/', battlegroupCtrl.index)

// GET localhost:3000/battles/edit
router.get('/:id/edit', battlegroupCtrl.edit)

// POST localhost:3000/battlegroups
router.post('/', battlegroupCtrl.create)

// DELETE localhost:3000/battlegroups/:id
router.delete('/:id', battlegroupCtrl.delete)

//DELETE localhost:3000/:bgid/:shipid
router.delete('/:bgid/:shipid', battlegroupCtrl.removeShip)

//POST localhost:3000/battlegroups/:id/ships
router.post('/:id/ships', battlegroupCtrl.addShip)

export {
  router
}
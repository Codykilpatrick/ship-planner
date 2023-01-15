import { Router } from "express"
import * as battlegroupCtrl from '../controllers/battlegroups.js'

const router = Router()

// localhost:3000/battlegroups

// GET localhost:3000/battlegroups
router.get('/', battlegroupCtrl.index)

// POST localhost:3000/battlegroups
router.post('/', battlegroupCtrl.create)

// DELETE localhost:3000/battlegroups/:id
router.delete('/:id', battlegroupCtrl.delete)

export {
  router
}
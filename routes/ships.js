import { Router } from "express"
import * as shipCtrl from '../controllers/ships.js'
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

// localhost:3000/ships


//GET localhost:3000/ships
router.get('/', shipCtrl.index)

// GET localhost:3000/ships/new
router.get('/new', shipCtrl.new)

// GET localhost:3000/ships/edit
router.get('/:id/edit', shipCtrl.edit)

//POST localhost:3000/ships
router.post('/', shipCtrl.create)

//PUT localhost:3000/ships/:id
router.put('/:id', shipCtrl.update)

//DELETE localhost:3000/ships/:id
router.delete('/:id', shipCtrl.delete)




export {
  router
}
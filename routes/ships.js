import { Router } from "express"
import * as shipCtrl from '../controllers/ships.js'
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

// localhost:3000/ships


//GET localhost:3000/ships
router.get('/', isLoggedIn, shipCtrl.index)

// GET localhost:3000/ships/new
router.get('/new', isLoggedIn, shipCtrl.new)

// GET localhost:3000/ships/edit
router.get('/:id/edit', isLoggedIn, shipCtrl.edit)

//POST localhost:3000/ships
router.post('/', isLoggedIn, shipCtrl.create)

//PUT localhost:3000/ships/:id
router.put('/:id', isLoggedIn, shipCtrl.update)

//DELETE localhost:3000/ships/:id
router.delete('/:id', isLoggedIn, shipCtrl.delete)




export {
  router
}
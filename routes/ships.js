import { Router } from "express"
import * as shipCtrl from '../controllers/ships.js'
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

// localhost:3000/ships


//GET localhost:3000/ships
router.get('/', shipCtrl.index)

export {
  router
}
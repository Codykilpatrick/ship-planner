import { Router } from 'express'
import * as mapCtrl from '../controllers/maps.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.get('/map', isLoggedIn, mapCtrl.index)

export {
  router
}

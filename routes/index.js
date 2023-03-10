import { Router } from 'express'
import * as mapCtrl from '../controllers/maps.js'
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Sea Force Coordinator' })
})

router.get('/map', isLoggedIn, mapCtrl.index)

export {
  router
}

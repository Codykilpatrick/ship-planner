import { Router } from 'express'
import * as mapCtrl from '../controllers/maps.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.get('/map', mapCtrl.index)

export {
  router
}

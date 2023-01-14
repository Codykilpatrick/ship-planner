import { Router } from "express"
import * as battlegroupCtrl from '../controllers/battlegroups.js'

const router = Router()

// localhost:3000/battlegroups

router.get('/', battlegroupCtrl.index)

export {
  router
}
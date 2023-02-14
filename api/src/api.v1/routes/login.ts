import { Router }  from 'express'
import { Authentication } from '../controller/login.controller'
import { auth } from '../middlewares/passport'

const router = Router()
const authentication = new Authentication()

router.post('/', authentication.login )
router.post( '/answer',auth,authentication.create_answer )
router.post( '/verify',auth,authentication.token_verify )
router.get( '/answer',auth,authentication.get_answer )
router.get( '/question',auth,authentication.get_question )
router.delete( '/answer/:id',auth,authentication.delete_answer )

export { router }

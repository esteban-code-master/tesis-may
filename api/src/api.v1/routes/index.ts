import { Router }  from 'express'
import { readdirSync } from 'fs'

const router = Router()
const pathRouter = `${__dirname}`
const ignore_file = 'index'

const removeExtension = (fileName: any) => {
    return fileName.split('.').shift()
}


readdirSync(pathRouter).filter((fileName: String) => {
    const fileWithOutExt = removeExtension(fileName)
    console.log(fileWithOutExt)
    const skip = [ignore_file].includes(fileWithOutExt)

    if (!skip) {
        import(`./${fileWithOutExt}`).then((register_router) => {

            console.log("endpoint ${fileWithOutExt}",fileWithOutExt)
            router.use(`/${fileWithOutExt}`, register_router.router)
        })
    }
})



export default router
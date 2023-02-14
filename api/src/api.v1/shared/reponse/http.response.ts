import { Response } from "express"
import HttpStatus from "./https.enum"

export class HttpResponse {
    static Ok<T>(res: Response, data?: T): Response {
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: "Success",
        data: data
      })
    }
  
    static NotFound<T>(res: Response, data?: T): Response {
      return res.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        message: "Not Found",
        error: data
      })
    }
  
    static Unauthorized<T>(res: Response, data?: T): Response {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        status: HttpStatus.UNAUTHORIZED,
        message: "Unauthorized",
        error: data
      })
    }
  
    static Forbidden<T>(res: Response, data?: T): Response {
      return res.status(HttpStatus.FORBIDDEN).json({
        status: HttpStatus.FORBIDDEN,
        message: "Forbidden",
        error: data
      })
    }
  
    static Error<T>(res: Response, data?: T): Response {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Internal server error",
        error: data
      })
    }
}
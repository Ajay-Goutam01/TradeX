import { success } from "zod";
import {env} from "../config/index.js";

const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success:false,
        statusCode, 
        message,
       ...(env.NODE_ENV === "development" && {
    stack: err.stack,
    errors: err.errors || [],
})
    })
}

export default errorMiddleware
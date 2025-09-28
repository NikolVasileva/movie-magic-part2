import { Router } from "express"

const castContreller = Router();

castContreller.ger("/", (res, req) => {
    res.end()
})

export default castContreller
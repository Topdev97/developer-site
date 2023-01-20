import express from "express";
import { sendEmail } from "../mail";
const router = express.Router();
router.post("/", async (req, res, next) => {
    try {
        const notification = req.body
        console.log(notification);

        res.json({
            message:"Notification received"
        })
        
    } catch (error) {
        next(error)
    }
});


export default router;
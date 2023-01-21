import express from "express";
import { sendEmail } from "../mail";
import { NotificationsService } from "../services/notifications.service";
const service = new NotificationsService()
const router = express.Router();
router.post("/", async (req, res, next) => {
    try {
        const notification = req.body
        const response = await service.create(notification)
        res.json(response)
        
    } catch (error) {
        next(error)
    }
});


export default router;
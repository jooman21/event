import { Request, Response } from "express";
import Event from "../model/event";
import { validateEventFields } from "../validator/validateFields";

const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, location, description } = req.body;
    const event = await Event.create({ title, location, description });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: "Error creating event" });
  }
};

export { validateEventFields, createEvent };

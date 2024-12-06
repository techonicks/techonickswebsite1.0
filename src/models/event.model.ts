import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  type: {
    type: String,
    enum: ["past", "ongoing", "upcoming"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Events = mongoose.models.Event || mongoose.model("Events",eventSchema)
export default Events

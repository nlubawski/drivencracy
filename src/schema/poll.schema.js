import joi from "joi";

const pattern = /(\d{4})-(\d{2})-(\d{2})\s(\d{2}:\d{2})*/

export const pollSchema = joi.object({
  title: joi.string().required(),
});
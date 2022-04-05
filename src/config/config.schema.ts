import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  APP_ENV: Joi.string().required(),
  PORT: Joi.number().default(3000).required(),
  CORS_ORIGIN: Joi.string().required(),
  MONGODB_HOST: Joi.string().required(),
  MONGODB_DATABASE: Joi.string().default('localhost').required(),
});

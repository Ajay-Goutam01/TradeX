import { ApiError } from "../core/index.js";

const validate = (schema, property = "body") => {
  return (req, res, next) => {
    const result = schema.safeParse(req[property]);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return next(
        new ApiError(422, "Validation failed.", errors)
      );
    }

    req.validated ??= {};
    req.validated[property] = result.data;

    next();
  };
};

export default validate;
import { ValidationError } from 'yup';

export default function getValidationErrors(validation = ValidationError) {
  const validationErrors = {};

  validation.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

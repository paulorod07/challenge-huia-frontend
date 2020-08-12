import { ValidationError } from 'yup';

// let validation = ValidationError;

export default function getValidationErrors(validation = ValidationError) {
  const validationErrors = {};

  validation.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}


// import { ValidationError } from 'yup';

// interface Errors {
//   [key: string]: string;
// }

// export default function getValidationErrors(err: ValidationError): Errors {
//   const validationErrors: Errors = {};

//   err.inner.forEach(error => {
//     validationErrors[error.path] = error.message;
//   });

//   return validationErrors;
// }
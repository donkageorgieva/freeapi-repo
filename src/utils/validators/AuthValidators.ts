export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email format",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
};
export const confirmPasswordValidation = (
  watchFnc: (param: string) => string
) => {
  return {
    validate: (value: string) =>
      value === watchFnc("password") || "Passwords do not match",
  };
};

// utils/validation.js
export const validation = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailRegex.test(email)) return "Invalid Email";
  if (!passwordRegex.test(password))
    return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";

  return null;
};

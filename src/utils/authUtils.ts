export const getToken = (): string | null => {
  return localStorage.getItem("token"); // Get token from localStorage
};

export const isAuthenticated = (): boolean => {
  return !!getToken(); // Return true if token exists
};

export const logout = (): void => {
  localStorage.removeItem("token"); // Remove token on logout
};

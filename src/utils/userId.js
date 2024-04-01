const userLS = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    console.error("Error retrieving user from localStorage:", error);
    return null;
  }
};

export default userLS;

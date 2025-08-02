function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login"; // Redirect user
}

export default logout;

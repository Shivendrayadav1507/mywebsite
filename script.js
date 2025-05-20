// Password-protect the profile page
function checkProfilePassword() {
  const input = document.getElementById('profilePassword').value;
  const error = document.getElementById('profileError');
  if (input === "Shivendra@2004") {
    document.getElementById('passwordPrompt').style.display = "none";
    document.getElementById('protectedProfile').style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Incorrect password. Try again!";
  }
}

// Optional: Unlock on Enter key
document.addEventListener('DOMContentLoaded', () => {
  const pwd = document.getElementById('profilePassword');
  if (pwd) {
    pwd.addEventListener('keyup', function(event) {
      if (event.key === "Enter") {
        checkProfilePassword();
      }
    });
  }
});
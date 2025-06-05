document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("power-toggle");
  if (!toggle) return;

  toggle.addEventListener("change", function () {
    const isChecked = this.checked;

    fetch("/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ power: isChecked })
    })
    .then(response => response.text())
    .then(data => {
      console.log("Server response:", data);

      alert(`Power is now turned ${isChecked ? "ON" : "OFF"}`);

      
      window.location.href = "Login.html";
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred while toggling power.");
    });
  });
});

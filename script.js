
    // document.addEventListener("DOMContentLoaded", () => {
    //   const toggle = document.getElementById("toggle");
    //   const onIcon = document.querySelector(".on-icon");
    //   const offIcon = document.querySelector(".off-icon");

    //   // Default to OFF icon
    //   onIcon.style.display = "none";
    //   offIcon.style.display = "block";

    //   toggle.addEventListener("change", () => {
    //     const isChecked = toggle.checked;

    //     if (isChecked) {
    //       onIcon.style.display = "block";
    //       offIcon.style.display = "none";
    //       alert("Power ON");
    //     } else {
    //       onIcon.style.display = "none";
    //       offIcon.style.display = "block";
    //       alert("Power OFF");
    //     }

    //     Redirect after alert
    //     window.location.href = "Login.html";
    //   });
    // });
  

document.addEventListener("DOMContentLoaded", () => {
      const toggle = document.getElementById("toggle");
      const onIcon = document.querySelector(".on-icon");
      const offIcon = document.querySelector(".off-icon");

      // Default icon state
      onIcon.style.display = "none";
      offIcon.style.display = "block";

      toggle.addEventListener("change", () => {
        if (toggle.checked) {
          onIcon.style.display = "block";
          offIcon.style.display = "none";

          alert("Power ON");
          window.location.href = "Login.html";
        } else {
          onIcon.style.display = "none";
          offIcon.style.display = "block";
          // No alert or redirect on OFF
           }
      });
    });
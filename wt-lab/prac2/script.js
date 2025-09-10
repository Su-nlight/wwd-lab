document.addEventListener("DOMContentLoaded", () => {
    const entryType = document.getElementById("entryType");
    const studentFields = document.getElementById("studentFields");
    const facultyFields = document.getElementById("facultyFields");
    const captchaSection = document.getElementById("captchaSection");
    const captchaDiv = document.getElementById("captcha");
    const captchaInput = document.getElementById("captchaInput");
    const form = document.getElementById("entryForm");
    const message = document.getElementById("message");
  
    let currentCaptcha = "";
  
    function generateCaptcha() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let captcha = "";
      for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      currentCaptcha = captcha;
      captchaDiv.textContent = captcha;
    }
  
    function resetForm() {
      form.reset();
      studentFields.classList.add("hidden");
      facultyFields.classList.add("hidden");
      captchaSection.classList.add("hidden");
      message.textContent = "";
      currentCaptcha = "";
      captchaDiv.textContent = "";
    }
  
    entryType.addEventListener("change", () => {
      message.textContent = "";
      if (entryType.value === "student") {
        studentFields.classList.remove("hidden");
        facultyFields.classList.add("hidden");
        captchaSection.classList.remove("hidden");
        generateCaptcha();
      } else if (entryType.value === "faculty") {
        facultyFields.classList.remove("hidden");
        studentFields.classList.add("hidden");
        captchaSection.classList.remove("hidden");
        generateCaptcha();
      } else {
        studentFields.classList.add("hidden");
        facultyFields.classList.add("hidden");
        captchaSection.classList.add("hidden");
      }
    });
  
    function validateEmail(email) {
      // Simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "";
      let valid = true;
      let errors = [];
  
      if (!entryType.value) {
        valid = false;
        errors.push("Please select entry type.");
      }
  
      if (entryType.value === "student") {
        const name = document.getElementById("studentName").value.trim();
        const id = document.getElementById("studentID").value.trim();
        const email = document.getElementById("studentEmail").value.trim();
        const course = document.getElementById("studentCourse").value.trim();
        const year = document.getElementById("studentYear").value.trim();
  
        if (!name) {
          valid = false;
          errors.push("Student name is required.");
        }
        if (!id) {
          valid = false;
          errors.push("Student ID is required.");
        }
        if (!email || !validateEmail(email)) {
          valid = false;
          errors.push("Valid student email is required.");
        }
        if (!course) {
          valid = false;
          errors.push("Student course is required.");
        }
        if (!year || isNaN(year) || year < 1 || year > 8) {
          valid = false;
          errors.push("Student year must be between 1 and 8.");
        }
      }
  
      if (entryType.value === "faculty") {
        const name = document.getElementById("facultyName").value.trim();
        const id = document.getElementById("facultyID").value.trim();
        const email = document.getElementById("facultyEmail").value.trim();
        const dept = document.getElementById("facultyDept").value.trim();
        const designation = document.getElementById("facultyDesignation").value.trim();
  
        if (!name) {
          valid = false;
          errors.push("Faculty name is required.");
        }
        if (!id) {
          valid = false;
          errors.push("Faculty ID is required.");
        }
        if (!email || !validateEmail(email)) {
          valid = false;
          errors.push("Valid faculty email is required.");
        }
        if (!dept) {
          valid = false;
          errors.push("Faculty department is required.");
        }
        if (!designation) {
          valid = false;
          errors.push("Faculty designation is required.");
        }
      }
  
      // Captcha validation
      const captchaEntered = captchaInput.value.trim();
      if (!captchaEntered) {
        valid = false;
        errors.push("Captcha is required.");
      } else if (captchaEntered !== currentCaptcha) {
        valid = false;
        errors.push("Captcha does not match.");
        generateCaptcha();
        captchaInput.value = "";
      }
  
      if (!valid) {
        message.style.color = "red";
        message.innerHTML = errors.join("<br>");
        return;
      }
  
      // If valid, show success message and reset form
      message.style.color = "green";
      message.textContent = `Successfully submitted ${entryType.value} details!`;
      resetForm();
    });
  });
  
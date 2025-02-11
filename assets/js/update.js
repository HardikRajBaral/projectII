document.getElementById("updatePhoneForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const newPhone = document.getElementById("newPhone").value;
  
    // Validate phone number (only digits and exactly 10 characters)
    if (!/^\d{10}$/.test(newPhone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
    // Simulate successful update
    alert("Phone number updated successfully!");
    // You can add an AJAX call or other logic here to update the phone number in the backend
  });






  document.getElementById("updateEmailForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const newEmail = document.getElementById("newEmail").value;
  
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Simulate successful update
    alert("Email updated successfully!");
    // You can add an AJAX call or other logic here to update the email in the backend
  });




  document.getElementById("updatePasswordForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate new password and confirm password match
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
  
    // Validate password length (e.g., at least 8 characters)
    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    // Simulate successful update
    alert("Password updated successfully!");
    // You can add an AJAX call or other logic here to update the password in the backend
  });









  
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
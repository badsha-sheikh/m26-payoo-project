document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("clicked")
    const mobileNumber = 1234567890;
    const pinNumber = 1122;

    const inputedMobileNumber = document.getElementById("inputed-mobile").value;
    const inputedPinNumber = document.getElementById("inputed-pin").value;

    const inputedMobileNumberConvert = parseInt(inputedMobileNumber);
    const inputedPinNumberConvert = parseInt(inputedPinNumber);

    if (
      inputedMobileNumberConvert === mobileNumber &&
      inputedPinNumberConvert === pinNumber
    ) {
      window.location.href="home.html"
    } else {
      console.log("mile nai");
    }
  });

// Copying billing address fields' values to delivery address fields' values if "sameAsBilling" checkbox is checked
function copyBillingAddress() {
  let billingFirstName = document.getElementById("billingFirstName"); // Get the element with ID "billingFirstName"
  let billingLastName = document.getElementById("billingLastName"); // Get the element with ID "billingLastName"
  let billingStreetAddress = document.getElementById("billingStreetAddress"); // Get the element with ID "billingStreetAddress"
  let billingCity = document.getElementById("billingCity"); // Get the element with ID "billingCity"
  let billingState = document.getElementById("billingState"); // Get the element with ID "billingState"
  let billingZip = document.getElementById("billingZip"); // Get the element with ID "billingZip"
  let billingPhone = document.getElementById("billingPhone"); // Get the element with ID "billingPhone"

  let deliveryFirstName = document.getElementById("deliveryFirstName"); // Get the element with ID "deliveryFirstName"
  let deliveryLastName = document.getElementById("deliveryLastName"); // Get the element with ID "deliveryLastName"
  let deliveryStreetAddress = document.getElementById("deliveryStreetAddress"); // Get the element with ID "deliveryStreetAddress"
  let deliveryCity = document.getElementById("deliveryCity"); // Get the element with ID "deliveryCity"
  let deliveryState = document.getElementById("deliveryState"); // Get the element with ID "deliveryState"
  let deliveryZip = document.getElementById("deliveryZip"); // Get the element with ID "deliveryZip"
  let deliveryPhone = document.getElementById("deliveryPhone"); // Get the element with ID "deliveryPhone"

  let sameAsBilling = document.getElementById("sameAsBilling"); // Get the element with ID "sameAsBilling"

  if (sameAsBilling.checked) { // Checking if the "sameAsBilling" checkbox is checked
    // Copying values from billing address fields to delivery address fields
    deliveryFirstName.value = billingFirstName.value;
    deliveryLastName.value = billingLastName.value;
    deliveryStreetAddress.value = billingStreetAddress.value;
    deliveryCity.value = billingCity.value;
    deliveryState.value = billingState.value;
    deliveryZip.value = billingZip.value;
    deliveryPhone.value = billingPhone.value;
  } else {
    // Clearing delivery address fields
    deliveryFirstName.value = "";
    deliveryLastName.value = "";
    deliveryStreetAddress.value = "";
    deliveryCity.value = "";
    deliveryState.value = "";
    deliveryZip.value = "";
    deliveryPhone.value = "";
  }
}

let subButton = document.getElementById("submit"); // Getting the element with its ID "submit"
subButton.addEventListener("click", validateForm); // Adding a click event listener to the "submit" button, triggering the validateForm function

// Validate the form before submission
function validateForm() {
  let form = document.getElementById("myForm"); // Getting the element with its ID 
  let billingFirstName = document.getElementById("billingFirstName"); // Getting the element with its ID 
  let billingLastName = document.getElementById("billingLastName"); // Getting the element with its ID 
  let billingStreetAddress = document.getElementById("billingStreetAddress"); // Getting the element with its ID 
  let billingCity = document.getElementById("billingCity"); // Getting the element with its ID 
  let billingState = document.getElementById("billingState"); // Getting the element with its ID 
  let billingZip = document.getElementById("billingZip"); // Getting the element with its ID 
  let billingPhone = document.getElementById("billingPhone"); // Getting the element with its ID 

  // Validate the billing address fields
  if (!billingFirstName.checkValidity()) { // Check if firstname value is valid
    billingFirstName.setCustomValidity("Please enter a valid first name."); // custom validation message if invalid
  } else {
    billingFirstName.setCustomValidity(""); // resetting the message if it is valid
  }

  if (!billingLastName.checkValidity()) { // Check if lastname value is valid
    billingLastName.setCustomValidity("Please enter a valid last name."); // custom validation message if invalid
  } else {
    billingLastName.setCustomValidity(""); // resetting the message if it is valid
  }
  
  if (!billingStreetAddress.checkValidity()) { // Check if streetaddress value is valid
    billingStreetAddress.setCustomValidity("Please enter a valid street address."); // custom validation message if invalid
  } else {
    billingStreetAddress.setCustomValidity(""); // resetting the message if it is valid
  }

  if (!billingCity.checkValidity()) {
    billingCity.setCustomValidity("Please enter a valid city."); // custom validation message if invalid
  } else {
    billingCity.setCustomValidity("");// resetting the message if it is valid
  }

  if (!billingState.checkValidity()) {
    billingState.setCustomValidity("Please enter a valid state.");
  } else {
    billingState.setCustomValidity("");// resetting the message if it is valid
  }

  if (!billingZip.checkValidity()) {
    billingZip.setCustomValidity("Please enter a valid ZIP code.");// custom validation message if invalid
  } else {
    billingZip.setCustomValidity("");// resetting the message if it is valid
  }

  if (!billingPhone.checkValidity()) {
    billingPhone.setCustomValidity("Please enter a valid phone number.");// custom validation message if invalid
  } else {
    billingPhone.setCustomValidity("");// resetting the message if it is valid
  }

  let sameAsBilling = document.getElementById("sameAsBilling"); // Getting the element with its ID "sameAsBilling"

  if (!sameAsBilling.checked) { // Checking if the "sameAsBilling" checkbox is not checked
    let deliveryFirstName = document.getElementById("deliveryFirstName"); // Getting the element with its ID 
    let deliveryLastName = document.getElementById("deliveryLastName"); // Getting the element with its ID 
    let deliveryStreetAddress = document.getElementById("deliveryStreetAddress"); // Getting the element with its ID 
    let deliveryCity = document.getElementById("deliveryCity"); // Getting the element with its ID 
    let deliveryState = document.getElementById("deliveryState"); // Getting the element with its ID 
    let deliveryZip = document.getElementById("deliveryZip"); // Getting the element with its ID 
    let deliveryPhone = document.getElementById("deliveryPhone"); // Getting the element with its ID 

    // Validate the delivery address fields
    if (!deliveryFirstName.checkValidity()) {//Check if firstname value is valid
      deliveryFirstName.setCustomValidity("Please enter a valid first name.");// custom validation message if invalid
    } else {
      deliveryFirstName.setCustomValidity("");// resetting the message if it is valid
    }

    if (!deliveryLastName.checkValidity()) {// check if the lastname is valid
      deliveryLastName.setCustomValidity("Please enter a valid last name.");// custom validation message if invalid
    } else {
      deliveryLastName.setCustomValidity("");// resetting the message if it is valid
    }

    if (!deliveryStreetAddress.checkValidity()) {//check if the streetaddress is valid
      deliveryStreetAddress.setCustomValidity("Please enter a valid street address.");// custom validation message if invalid
    } else {
      deliveryStreetAddress.setCustomValidity("");// resetting the message if it is valid
    }

    if (!deliveryCity.checkValidity()) {// check if the city is valid
      deliveryCity.setCustomValidity("Please enter a valid city.");// custom validation message if invalid
    } else {
      deliveryCity.setCustomValidity("");// resetting the message if it is valid
    }

    if (!deliveryState.checkValidity()) {// check if the state is valid
      deliveryState.setCustomValidity("Please enter a valid state.");// custom validation message if invalid
    } else {
      deliveryState.setCustomValidity("");// resetting the message if it is valid
    }

    if (!deliveryZip.checkValidity()) {//check if the zip is valid
      deliveryZip.setCustomValidity("Please enter a valid ZIP code.");// custom validation message if invalid
    } else {
      deliveryZip.setCustomValidity("");// resetting the message if it is valid
    }

    if (!deliveryPhone.checkValidity()) {//check if the phone is valid
      deliveryPhone.setCustomValidity("Please enter a valid phone number.");// custom validation message if invalid
    } else {
      deliveryPhone.setCustomValidity("");// resetting the message if it is valid
    }
  }

  form.submit(); // Submit the form
}

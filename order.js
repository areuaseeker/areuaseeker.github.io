   function orderSubmitted() {
	   
	  /* check if First Name is blank */
	  if (document.forms["inputForm"]["firstName"].value == "")
		 window.alert("Error: First Name is blank!"); 
	  else if (document.forms["inputForm"]["lastName"].value == "")
		 window.alert("Error: Last Name is blank!"); 
	  else if (document.forms["inputForm"]["address"].value == "")
		 window.alert("Error: Address is blank!");
	  else if (document.forms["inputForm"]["city"].value == "")
		 window.alert("Error: City is blank!"); 
	  else if (document.forms["inputForm"]["state"].value == "Select")
		 window.alert("Error: State should be selected!");	 
	  else if (!validateZip(document.forms["inputForm"]["zip"].value))
		 window.alert("Error: Invalid Zip!");
	 else if (!validatePhone(document.forms["inputForm"]["phone"].value))
		 window.alert("Error: Invalid Phone!"); 
		 /* Also need to check Billing information*/
	 else if (document.forms["inputForm"]["billingFirstName"].value == "")
		 window.alert("Error: Billing First Name is blank!"); 
	  else if (document.forms["inputForm"]["billingLastName"].value == "")
		 window.alert("Error: Billing Last Name is blank!"); 
	  else if (document.forms["inputForm"]["billingAddress"].value == "")
		 window.alert("Error:Billing  Address is blank!");
	  else if (document.forms["inputForm"]["billingCity"].value == "")
		 window.alert("Error:Billing City is blank!"); 
	  else if (document.forms["inputForm"]["billingState"].value == "Select")
		 window.alert("Error: Billing State should be selected!");	 
	  else if (!validateBillingZip(document.forms["inputForm"]["billingZip"].value))
		 window.alert("Error: Invalid Billing Zip!");
	 else if (!validateBillingPhone(document.forms["inputForm"]["billingPhone"].value))
		 window.alert("Error: Invalid Billing Phone!");	 	
	     /* All required fields were completed so submit */  
   // save first name and last name as cookies
   setCookie("firstname", firstName, 365);
   setCookie("lastname", lastName, 365);
   // save all the other cookies here...
   
   window.alert("Order Submitted!");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    window.alert(document.cookie)
}

   
   function validatePhone(phone){
	    // returns true if a properly formatted zip
		return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone);
   }
   
   function validateZip(zip){
	    // returns true if a properly formatted zip
		return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
   }
   function validateBillingPhone(billingPhone){
	// returns true if a properly formatted zip
	return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(billingPhone);
   }

function validateBillingZip(billingZip){
	// returns true if a properly formatted zip
	return /^[0-9]{5}(?:-[0-9]{4})?$/.test(billingZip);
}
   
   function copyBilling(){
	   document.forms["inputForm"]["billingFirstName"].value =
	   document.forms["inputForm"]["firstName"].value;
	   document.forms["inputForm"]["billingLastName"].value =
	   document.forms["inputForm"]["lastName"].value;
	   document.forms["inputForm"]["billingAddress"].value =
	   document.forms["inputForm"]["address"].value;
	   document.forms["inputForm"]["billingCity"].value =
	   document.forms["inputForm"]["city"].value;
	   document.forms["inputForm"]["billingState"].value =
	   document.forms["inputForm"]["state"].value;
	   document.forms["inputForm"]["billingZip"].value =
	   document.forms["inputForm"]["zip"].value;
	   document.forms["inputForm"]["billingPhone"].value =
	   document.forms["inputForm"]["phone"].value;
	   window.alert("Copy Billing Info");
   }
   function getCookie(cname) {
    window.alert(cname +"getting")
	var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(){
		var firstName = getCookie("firstname");
		if (firstName != ""){
			window.alert("Welcome back " + firstName + "!");
			document.forms["inputForm"]["firstName"].value = firstName;
		}
		
		var lastName = getCookie("lastname");
		if (lastName != ""){
			window.alert("Welcome back " + lastName + "!");
			document.forms["inputForm"]["lastName"].value = lastName;
		}
}
   /*
   function orderSubmitted() {

   // check if first name is blank
   var firstName = document.forms["myForm"]["firstname"].value;
   if (firstName == "") {
      alert("Error: First Name must be filled out");
      return false;
   }	
   
   // check if last name is blank
   var lastName = document.forms["myForm"]["lastname"].value;
   if (lastName == "") {
      alert("Error: Last Name must be filled out");
      return false;
   }	

   // save first name and last name as cookies
   setCookie("firstname",firstName, 365);
   setCookie("lastname",lastName, 365);
   // save all the other cookies here...
   
   window.alert("Order Submitted!");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(){
		var firstName = getCookie("firstname");
		if (firstName != ""){
			//window.alert("Welcome back " + firstName + "!");
			document.forms["myForm"]["firstname"].value = firstName;
		}
		
		var lastName = getCookie("lastname");
		if (lastName != ""){
			//window.alert("Welcome back " + lastName + "!");
			document.forms["myForm"]["lastname"].value = lastName;
		}
}

   */
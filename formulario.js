/*VALIDACIONES DEL FORMULARIO*/
'use strict';

/* form elements */
const form = document.forms.form;
const fullname = form.fullname;
const email = form.email;
const emailValid = form.emailvalid;
const phone = form.phone;
const address = form.address;
const message = form.message;

/* RegExp Patterns */
const nameRegex = /^[a-z ,.-]+\s[a-z ,.-]+$/i;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
const phoneRegex = /^(\+\d{2,3}\s?)(\d{3,5})\s?(\d{5,7})$/;
const addressRegex = /^[a-z0-9 .,&]+/i;

/*Errors and icons */
const nameError = document.getElementById('e1');
const validName = document.getElementById('v1');
const notValidName = document.getElementById('f1');

const emailError = document.getElementById('e2');
const validEmail = document.getElementById('v2');
const notValidEmail = document.getElementById('f2');

const confirmError1 = document.getElementById('e31');
const confirmError2 = document.getElementById('e32');
const validEmailConf = document.getElementById('v3');
const notValidEmailConf = document.getElementById('f3');

const phoneError = document.getElementById('e4');
const validPhone = document.getElementById('v4');
const notValidPhone = document.getElementById('f4');

const addressError = document.getElementById('e5');
const validAddress = document.getElementById('v5');
const notValidAddress = document.getElementById('f5');

const messageError = document.getElementById('e6');
const formError1 = document.getElementById('e71');
const formError2 = document.getElementById('e72');

/* Κάνει έλεγχο onblur αν το input value του fullname ταιριάζει με το regex και εμφανίζει τις αντίστοιχες ενδείξεις
    Αν το πεδίο είναι κενό εξαφανίζει τα error messages & τις ενδείξεις
*/
fullname.onblur = () => {
    if (!nameRegex.test(fullname.value.trim())) {
        nameError.style.display = "block";
        notValidName.style.display = "inline-block";
        validName.style.display = 'none';
    } else {
        nameError.style.display = "none";
        validName.style.display = "inline-block";
        notValidName.style.display = "none";
    }

    if (fullname.value.trim() === "") {
        nameError.style.display = "none";
        validName.style.display = "none";
        notValidName.style.display = "none";
    }

}

// Εξαφανίζει onfocus τις ενδείξεις/error messages του πεδίου fullname
fullname.onfocus = () => {
    nameError.style.display = "none";
    notValidName.style.display = "none";
    validName.style.display = 'none';
}

/* Κάνει έλεγχο onblur αν το input value του email ταιριάζει με το regex και εμφανίζει τις αντίστοιχες ενδείξεις
    Ελέγχει αν η τιμή του πεδίου είναι ίδια με του email confirmation (μόνο αν τα δύο πεδία έχουν συμπληρωθεί)
    Αν το πεδίο είναι κενό εξαφανίζει τις ενδείξεις/error messages
    Αν τα πεδία email, email confirmation είναι ίδια αλλά δεν ταιριάζουν με το regex ζητάει valid email
*/
email.onblur = () => {
    if (!emailRegex.test(email.value.trim())) {
        emailError.style.display = "block";
        notValidEmail.style.display = "inline-block";
        validEmail.style.display = "none";
    } else if (emailRegex.test(email.value.trim())) {
        emailError.style.display = "none";
        validEmail.style.display = "inline-block";
        notValidEmail.style.display = "none";
    }

    if (email.value.trim() == "") {
        emailError.style.display = "none";
        notValidEmail.style.display = "none";
        validEmail.style.display = 'none';
    }

    if (email.value.toLowerCase().trim() == emailValid.value.toLowerCase().trim() && email.value.trim() != "" && emailValid.trim() != "") {
        emailError.style.display = "none";
        validEmail.style.display = "inline-block";
        notValidEmail.style.display = "none";

        confirmError1.style.display = "none";
        confirmError2.style.display = "none";
        notValidEmailConf.style.display = "none";
        validEmailConf.style.display = "inline-block";
    } else if (email.value.trim() != emailValid.value.trim()) {
        confirmError1.style.display = "block";
        notValidEmailConf.style.display = "inline-block";
        validEmailConf.style.display = "none";
    }

    if (email.value.trim() == "" && emailRegex.test(emailValid.value.trim()) == true) {
        emailError.style.display = "none";
        notValidEmail.style.display = "none";
        validEmail.style.display = 'none'

        confirmError1.style.display = "block";
        confirmError2.style.display = "none";
        notValidEmailConf.style.display = "none";
        validEmailConf.style.display = 'none';
    }

    if (!emailRegex.test(email.value.trim()) && !emailRegex.test(emailValid.value.trim())) {
        emailError.style.display = "block";
        notValidEmail.style.display = "inline-block";
        validEmail.style.display = "none";
        confirmError2.style.display = "block";
        notValidEmailConf.style.display = "inline-block";
        validEmailConf.style.display = "none";
    }

}

// Εξαφανίζει onfocus τις ενδείξεις/error messages του πεδίου e-mail
email.onfocus = () => {
    emailError.style.display = "none";
    notValidEmail.style.display = "none";
    validEmail.style.display = 'none';
}

/* Κάνει έλεγχο onblur αν το input value του email validation ταιριάζει με το regex και εμφανίζει τις αντίστοιχες ενδείξεις
    Ελέγχει αν η τιμή του πεδίου είναι ίδια με του email και τα values ταιριάζουν με το regex
    Αν το πεδίο είναι κενό εξαφανίζει τις ενδείξεις/error messages
*/
emailValid.onblur = () => {
    if (!emailRegex.test(emailValid.value.trim())) {
        confirmError2.style.display = "block";
        notValidEmailConf.style.display = "inline-block";
        validEmailConf.style.display = "none";
    } else {
        confirmError2.style.display = "none";
        validEmailConf.style.display = "inline-block";
        notValidEmailConf.style.display = "none";
    }

    if (emailValid.value.toLowerCase().trim() != email.value.toLowerCase().trim()) {
        confirmError1.style.display = "block";
        notValidEmailConf.style.display = "inline-block";
        validEmailConf.style.display = "none";
    } else if (emailValid.value.toLowerCase().trim() == email.value.toLowerCase().trim() && emailRegex.test(emailValid.value.trim()) == true) {
        confirmError1.style.display = "none";
        validEmailConf.style.display = "inline-block";
        notValidEmailConf.style.display = "none";
    }

    if (emailValid.value.trim() == "") {
        confirmError1.style.display = "none";
        confirmError2.style.display = "none";
        notValidEmailConf.style.display = "none";
        validEmailConf.style.display = 'none';
    }
}

// Εξαφανίζει onfocus τις ενδείξεις/error messages του πεδίου email validation (emailValid)
emailValid.onfocus = () => {
    confirmError1.style.display = "none";
    confirmError2.style.display = "none";
    notValidEmailConf.style.display = "none";
    validEmailConf.style.display = "none";
}

/* Ελέγχει onblur αν το τηλέφωνο ταιριάζει με το regex
    Αν το πεδίο είναι κενό εξαφανίζει τις ενδείξεις & τα error messages
*/
phone.onblur = () => {
    if (!phoneRegex.test(phone.value.trim())) {
        phoneError.style.display = "block";
        notValidPhone.style.display = "inline-block";
        validPhone.style.display = "none";
    } else {
        phoneError.style.display = "none";
        validPhone.style.display = "inline-block";
        notValidPhone.style.display = "none";
    }

    if (phone.value.trim() == "") {
        phoneError.style.display = "none";
        notValidPhone.style.display = "none";
        validPhone.style.display = "none";
    }
}

// Εξαφανίζει τις ενδείξεις onfocus στο πεδίο του τηλεφώνου και αν το value = "" προσυμπληρώνει το country code της Ελλάδας
phone.onfocus = () => {
    if (phone.value == "") {
        phone.value = "+56"
    }

    phoneError.style.display = "none";
    notValidPhone.style.display = "none";
    validPhone.style.display = "none";
}

//  Ελέγχει onblur αν η διεύθυνση ταιριάζει με το regex της και αν είναι κενή εξαφανίζει τις ενδείξεις/error messages
address.onblur = () => {
    if (!addressRegex.test(address.value.trim())) {
        addressError.style.display = "block";
        validAddress.style.display = "none";
        notValidAddress.style.display = "inline-block";
    } else {
        addressError.style.display = "none";
        validAddress.style.display = "inline-block";
        notValidAddress.style.display = "none";
    }

    if (address.value.trim() == "") {
        addressError.style.display = "none";
        validAddress.style.display = "none";
        notValidAddress.style.display = "none";
    }
}

// Εξαφανίζει onfocus τις ενδείξεις στο πεδίο της διεύθυνσης
address.onfocus = () => {
    addressError.style.display = "none";
    validAddress.style.display = "none";
    notValidAddress.style.display = "none";
    
}

// Ελέγχει κατά την πληκτρολόγηση αν το μήνυμα είναι 150 χαρακτήρες και αν είναι λιγότερο από αυτό προειδοποιεί αλλιώς το εμφανίζει ως error
message.oninput = () => {
    if (message.value.length <= 251) {
        messageError.style.display = "block";
    } else {
        messageError.style.color = "red";
    }
}

// Εάν το μήνυμα είναι ίσο ή λιγότερο από 150 χαρακτήρες εξαφανίζει την προϊδοποίηση, αλλιώς αν τους υπερβαίνει το εμφανίζει ως error
message.onblur = () => {
    if (message.value.length <= 150) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        messageError.style.color = "red";
    }
}

// Ελέγχει κατά το submit εάν τα πεδία είναι κενά. Εάν είναι κενά δεν προχωράει στο submit και εμφανίζει error message
form.onsubmit = (event) => {
    if (
        fullname.value.trim() == "" ||
        email.value.trim() == "" ||
        emailConf.value.trim() == "" ||
        phone.value.trim() == "" ||
        address.value.trim() == "" ||
        message.value.trim() == ""
    ) {
        event.preventDefault();
        formError1.style.display = "block";
    }
}

// Ελέγχει κατά το submit εάν τα πεδία είναι valid σύμφωνα με τα regex. Εάν δεν είναι valid δεν προχωράει στο submit και εμφανίζει error message
form.onsubmit = (ev) => {
    if (
        nameRegex.test(fullname.value.trim()) == false ||
        emailRegex.test(email.value.trim()) == false ||
        emailRegex.test(emailValid.value.trim()) == false ||
        phoneRegex.test(phone.value.trim()) == false ||
        addressRegex.test(address.value.trim()) == false) {
        ev.preventDefault();
        formError2.style.display = "block";
    }
}
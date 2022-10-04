

function getData() {
    var name=document.getElementById("senderName").value
    var email=document.getElementById("senderEmail").value
    var message=document.getElementById("senderMessage").value

    sendEmail(name, email, message)
}

//index.js
function sendEmail(name, email, message) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "whitneyoreardon@gmail.com",
	Password : "<email password>",
	To : 'whitneyoreardon@gmail.com',
	From : email,
	Subject : name,
	Body : message,
	}).then(
		message => alert("mail sent successfully")
	);
}

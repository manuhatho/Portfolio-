
//     const form = document.querySelector("form");
//     const fullName = document.getElementById("name");
//     const email = document.getElementById("email");
//     const phone = document.getElementById("phone");
//     const message = document.getElementById("message");
  
 

//    function sendEmail(){

//     const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value}`;

//     Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "graphicdesignhome00@gmail.com",
//     Password : "823E90328FCE8730D51CDE051B3697CE7343",
//     To : 'graphicdesignhome00@gmail.com',
//     From : "graphicdesignhome00@gmail.com",
//     Subject : "This is the subject",
//     Body : bodyMessage
// }).then(
//   message => {
//     if (message == "OK"){
//         Swal.fire({
//             title: "Success!",
//             text: "Message sent successfully!",
//             icon: "success"
//           });
//     } else {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong, try Again!",
//             footer: '<a href="#">Why do I have this issue?</a>'
//           });
//     }
//   }
// );
//    }
 
   

//    form.addEventListener("submit", function(e){
//     e.preventDefault();
//     sendEmail();
//     form.reset();
//     return false;
    
//    })
   


document.getElementById('contact-form').addEventListener('submit', function(event) {
   
    event.preventDefault();

 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    alert("Formulário enviado com sucesso!");

});
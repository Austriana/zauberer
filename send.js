let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    sendEmail();
});

function sendEmail(){
    let vorName = document.getElementById('vorName').value;
    let nachName = document.getElementById('nachName').value;
    let email = document.getElementById('email').value;
    let telefon = document.getElementById('telefon').value;
    let nachricht = document.getElementById('nachricht').value;
    if(vorName !== '' && nachName !== '' && email !== '' && nachricht !== ''){
        alert(` Hallo ${vorName} ${nachName},\n
                Email: ${email}\n
                Nachricht: ${nachricht}\n                
                Telefon Nummer: ${telefon||'-'}\n
                Vielen Dank! 💜`);
    } else{
        alert("Bitte alle Pflichtfelder ausfüllen damit wir uns besser vorbereiten können! Vielen Dank 💜");
    };
};
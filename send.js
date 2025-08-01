let submit = document.getElementById('submit');
(function () {
    emailjs.init({
         publicKey: 'mx5VNABEFS73usmjF',
      });
})();

submit.addEventListener('click', () => {
    let params = {
        vorName : document.getElementById('vorName').value,
        nachName : document.getElementById('nachName').value,
        email : document.getElementById('email').value,
        telefon : document.getElementById('telefon').value,
        nachricht : document.getElementById('nachricht').value
    };

    if(params.vorName !== '' && params.nachName !== '' && params.email !== '' && params.nachricht !== ''){
        send(params);
        alert(  `Hallo ${params.vorName} ${params.nachName},
                Email: ${params.email}
                Telefon: ${params.telefon}
                Nachricht:
                ${params.nachricht}

                Vielen Dank für Ihr Interesse, 
                wir werden uns schnellstmöglich bei Ihnen 
                melden! 💜
            `);
    } else{
        alert("Bitte alle Pflichtfelder ausfüllen, damit wir uns besser vorbereiten können! Vielen Dank 💜");
    };
});

function send(params) {
    emailjs.send('service_8j9d9v8', 'template_g7jcnza', params);
    document.getElementById('vorName').value='';
    document.getElementById('nachName').value='';
    document.getElementById('email').value='';
    document.getElementById('telefon').value='';
    document.getElementById('nachricht').value='';
};
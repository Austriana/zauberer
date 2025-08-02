// to do list:

// emailjs:
// comment this in if emailjs is used: ---> send(params); <---
// insert public, service, template id
// create emailjs template - (vorName, nachName, email, telefon, nachricht) <- use this variables for template in emailjs 
// adjust to the right method in file: ---> kontakt.html <--- 

// formcarry, mailto:
// comment this out if formcarry or mailto is used: ---> send(params); <---
// adjust to the right method in file: ---> kontakt.html <--- 

let submit = document.getElementById('submit');
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
    emailjs.init({publicKey: 'mx5VNABEFS73usmjF'}); //publicId <- replace to your id
    emailjs.send('service_8j9d9v8', 'template_g7jcnza', params); //(serviceId, templateId, params)<- replace to your id 
    document.getElementById('vorName').value='';
    document.getElementById('nachName').value='';
    document.getElementById('email').value='';
    document.getElementById('telefon').value='';
    document.getElementById('nachricht').value='';
};
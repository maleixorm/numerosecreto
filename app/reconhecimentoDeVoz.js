const elementoChute = document.querySelector('#chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
}
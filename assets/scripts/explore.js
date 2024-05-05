// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');
  
  
  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled>Select Voice:</option>';
    for(let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Fix for voices being loaded after API initialization
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', function() {
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.voice = voices.find(voice => voice.name === selectedOption);
    
    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png'; 
    };

    speechSynthesis.speak(utterance);
  });


}
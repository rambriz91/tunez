var tunerEl = document.getElementById('tuner');
var frequencyEl = document.getElementById('frequency');
var tunerRightEl = document.querySelector('.fa-chevron-right');
var tunerLeftEl = document.querySelector('.fa-chevron-left');
var audioEl = document.getElementById('audio');
var stationEl = document.getElementById('station');
var nameEl = document.getElementById('name');
var genreEl = document.getElementById('genre');
var radioEl = document.getElementById('radio-container');

let city = 'san diego'

tunerEl.oninput = function () {
   frequencyEl.children[1].textContent = tunerEl.value;
   tuneIn();
};

tunerRightEl.addEventListener('click', function () {
   tunerEl.value = Number(tunerEl.value) + 0.1;
   frequencyEl.children[1].textContent = tunerEl.value;
   tuneIn();
});

tunerLeftEl.addEventListener('click', function () {
   tunerEl.value = Number(tunerEl.value) - 0.1;
   frequencyEl.children[1].textContent = tunerEl.value;
   tuneIn();
});

function tuneIn() {
   removeIframe();
   let station = tunerEl.value;
   let stationConfig = data[city][station];

   if (stationConfig) {
      if (!stationConfig.isCompatible && !stationConfig.isIframe) {
         audioEl.setAttribute('class', 'hidden');
         audioEl.setAttribute('src', '');
         audioEl.insertAdjacentHTML('afterend', `<a href =${stationConfig.url}>Click to listen to ${stationConfig.name}</a>`);
         populate(stationConfig);
      };
      if (!stationConfig.isCompatible && stationConfig.isIframe) {
         audioEl.setAttribute('class', 'hidden');
         audioEl.setAttribute('src', '');
         audioEl.insertAdjacentHTML('afterend', stationConfig.iframe);
         populate(stationConfig);
      }
      if (stationConfig.isCompatible) {
         if (audioEl.classList.contains('hidden')) {
            audioEl.removeAttribute('class', 'hidden');
         }
         audioEl.setAttribute('src', stationConfig.url);
         populate(stationConfig);
      } else {
         return;
      }
   }
};

function removeIframe() {
   if (radioEl.children[5]) {
      radioEl.removeChild(radioEl.children[5]);
   } return;
}

function populate(stationConfig) {
   nameEl.textContent = stationConfig.name;
   stationEl.textContent = stationConfig.callSign;
   genreEl.textContent = stationConfig.genre;
};
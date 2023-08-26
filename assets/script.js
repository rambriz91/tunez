const tunerEl = document.getElementById('tuner');
const frequencyEl = document.getElementById('frequency');
const tunerRightEl = document.querySelector('.fa-chevron-right');
const tunerLeftEl = document.querySelector('.fa-chevron-left');
const audioEl = document.getElementById('audio');
const stationEl = document.getElementById('station');
const nameEl = document.getElementById('name');
const genreEl = document.getElementById('genre');
const radioEl = document.getElementById('radio-container');
const locationEl =document.getElementById('location');
const cityEl = document.querySelector('.dropdown-content');
const bodyBg = document.body.style;

let city = 'San Diego';

cityEl.addEventListener('click', function(event){
   locationEl.src = event.target.getAttribute('data-img');
   city = event.target.textContent.replaceAll('\n','').trim();
   bodyBg.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape?`+city+`')`;
   bodyBg.backgroundRepeat = 'no-repeat';
   bodyBg.backgroundSize = 'cover';
});

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
   let station = tunerEl.value;
   let stationConfig = data[city][station];
   console.log(stationConfig)

   if (stationConfig) {
      removeIframe();
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
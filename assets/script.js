var tunerEl = document.getElementById('tuner');
var frequencyEl = document.getElementById('frequency');
var tunerRightEl = document.querySelector('.fa-chevron-right');
var tunerLeftEl = document.querySelector('.fa-chevron-left');
var audioEl = document.getElementById('audio');
var stationEl = document.getElementById('station');
var nameEl = document.getElementById('name');
var genreEl = document.getElementById('genre');
var radioEl = document.getElementById('radio-container');




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
   removePlayer();
   if (tunerEl.value == 88.3) {
      audioEl.setAttribute('src', 'http://listen.jazz88.org/ksds.mp3');
      stationEl.textContent = 'KSDS';
      genreEl.textContent = 'Jazz';
      nameEl.textContent = 'KSDS';
   }
   else if (tunerEl.value >= 89.1 && tunerEl.value <= 89.5) {
      audioEl.setAttribute('src', 'http://kpbs.streamguys1.com/kpbs-aac');
      stationEl.textContent = 'KPBS';
      genreEl.textContent = 'Pubic Radio';
      nameEl.textContent = "NPR";
   }
   //broken
   else if (tunerEl.value == 90.3) {
      audioEl.setAttribute('src', 'https://player.listenlive.co/36271/en');
      stationEl.textContent = 'XHITZ';
      genreEl.textContent = 'Top-40';
      nameEl.textContent = 'Z90.3';
   }
   //broken
   else if (tunerEl.value == 91.1) {
      audioEl.setAttribute('src', 'https://player.listenlive.co/36281/en');
      stationEl.textContent = 'XETRA';
      genreEl.textContent = 'Alternative';
      nameEl.textContent = '91X';
   }
   //broken
   else if (tunerEl.value == 92.5) {
      audioEl.setAttribute('src', 'https://player.listenlive.co/36261');
      stationEl.textContent = 'XHRM';
      genreEl.textContent = 'Rythmic Oldies';
      nameEl.textContent = 'Magic 92.5';
   }
   else if (tunerEl.value == 93.3) {
      audioEl.setAttribute('src', '');
      stationEl.textContent = 'KHTS';
      genreEl.textContent = 'Top-40';
      nameEl.textContent = 'iHeart Radio';
      audioEl.insertAdjacentHTML('afterend', '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/channel-933-241/?embed=true" frameborder="0"></iframe>')
   }
   else if (tunerEl.value == 93.7) {
      audioEl.setAttribute('src', 'http://ic1.mainstreamnetwork.com/kpfk-fm');
      stationEl.textContent = 'KPFK';
      genreEl.textContent = 'Public Radio';
      nameEl.textContent = 'KPFK';
   }
   else if (tunerEl.value == 94.1) {
      audioEl.setAttribute('src', '');
      stationEl.textContent = 'KMYI';
      genreEl.textContent = 'Hot AC';
      nameEl.textContent = 'Star 94.1';
      audioEl.insertAdjacentHTML('afterend', '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/star-941-253/?embed=true" frameborder="0">')
   }
   else if (tunerEl.value == 94.5) {
      audioEl.setAttribute('src', 'https://streamingcwsradio30.com:7023/stream?type=http&nocache=1');
      stationEl.textContent = 'XHA';
      genreEl.textContent = 'Regional Mexican';
      nameEl.textContent = 'Invasora 94.5';
   }
   //broken CORB
   else if (tunerEl.value == 94.9) {
      audioEl.setAttribute('src', 'https://www.audacy.com/stations/alt949');
      stationEl.textContent = 'KBZT';
      genreEl.textContent = 'Alternative';
      nameEl.textContent = 'ALT 94.9';
      //<audio preload="auto" src="blob:https://www.audacy.com/a1ddfa7a-f5e3-499d-bb3c-6376b5ed56fb"></audio>

   }
   else if (tunerEl.value == 95.7) {
      audioEl.setAttribute('src', '');
      stationEl.textContent = 'KSSX';
      genreEl.textContent = 'Hip-hop & Throwbacks';
      nameEl.textContent = `JAM'N 95.7`;
      audioEl.insertAdjacentHTML("afterend", '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/jamn-957-261/?embed=true" frameborder="0"></iframe>')
   }
   //broken CORB
   else if (tunerEl.value == 96.5) {
      audioEl.setAttribute('src', 'https://www.audacy.com/stations?action=AUTOPLAY_FULL&actionContentId=101-531');
      stationEl.textContent = 'KYXY';
      genreEl.textContent = 'Adult Contemporary';
      nameEl.textContent = 'KyXy 96.5';
      //<audio preload="auto" src="blob:https://www.audacy.com/ce30c7d2-20ee-4c36-8a78-389d20cf1be1"></audio>
   }
   else if (tunerEl.value == 97.7) {
      audioEl.setAttribute('src', '');
      stationEl.textContent = 'XHTIM';
      genreEl.textContent = 'Regional Mexican';
      nameEl.textContent = 'La Mejor 90.7';
      audioEl.insertAdjacentHTML('afterend', '<iframe allow="autoplay" src="https://tunein.com/embed/player/s24607/" style="width:100%; height:100px;" scrolling="no" frameborder="no"></iframe>')
   }
   //broken CORB
   else if (tunerEl.value == 98.1) {
      audioEl.setAttribute('src', 'https://www.audacy.com/stations/sunny981sd?action=AUTOPLAY_FULL&actionContentId=101-931');
      stationEl.textContent = 'KXSN';
      genreEl.textContent = 'Classic Hits';
      nameEl.textContent = 'Sunny 98.1';
   }
   //broken
   else if (tunerEl.value == 100.7) {
      audioEl.setAttribute('src', 'https://player.listenlive.co/35441');
      stationEl.textContent = 'KFBG';
      genreEl.textContent = 'Adult Hits';
      nameEl.textContent = '100.7 BIG FM';
   }
   //broken CORB
   else if (tunerEl.value == 101.1) {
      audioEl.setAttribute('src', 'https://kvibe-san-diego.mixlr.com/events/2646442');
      stationEl.textContent = 'LPFM';
      genreEl.textContent = 'Caribbean';
      nameEl.textContent = 'World Beat Radio';
   }
   else if (tunerEl.value == 101.5) {
      audioEl.setAttribute('src', '');
      stationEl.textContent = 'KGB';
      genreEl.textContent = 'Classic Rock';
      nameEl.textContent = '101KGB';
      audioEl.insertAdjacentHTML('afterend', '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/kgb-1015-237/?embed=true" frameborder="0"></iframe>')
   }
   //broken CORB
   else if (tunerEl.value == 102.5) {
      audioEl.setAttribute('src', 'https://s2.mexside.net/cp/widgets/player/?p=8036&type=rain');
      stationEl.textContent = 'XHUAN';
      genreEl.textContent = 'Spanish';
      nameEl.textContent = 'Fusion 102.5';
   }
   else if (tunerEl.value == 102.9) {
      audioEl.setAttribute('src', '');
      stationEl.textContent = 'KLQV';
      genreEl.textContent = 'Spanish Hits';
      nameEl.textContent = 'Amor 102.9';
      audioEl.insertAdjacentHTML('afterend', '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/amor-1029-5212/?embed=true" frameborder="0"></iframe>')
   }
   //broken CORB
   else if (tunerEl.value == 103.7) {
      audioEl.setAttribute('src', 'https://www.audacy.com/stations/kson?action=AUTOPLAY_FULL&actionContentId=101-925');
      stationEl.textContent = 'KSON';
      genreEl.textContent = 'Country';
      nameEl.textContent = '103.7 KSON';
   }
   else if (tunerEl.value == 104.5) {
      audioEl.setAttribute('src', 'http://18153.live.streamtheworld.com/XLTNFM_SC');
      stationEl.textContent = 'XHLTN';
      genreEl.textContent = 'Spanish Hits';
      nameEl.textContent = 'Radio Latina';
   }
   //broken
   else if (tunerEl.value == 106.5) {
      audioEl.setAttribute('src', 'https://www.univision.com/radio/san-diego-klnv-fm/que-buena-106-5-fm');
      stationEl.textContent = 'KLNV';
      genreEl.textContent = 'Regional Mexican';
      nameEl.textContent = 'Que Buena';
   }
   //  else if (tunerEl.value =='') {
   //     audioEl.setAttribute('src', '');
   //     stationEl.textContent = '';
   //     genreEl.textContent = '';
   //     nameEl.textContent = '';
   //  }
   else {
      return;
   }
}

function removePlayer() {
   if (radioEl.children[5]) {
      radioEl.removeChild(radioEl.children[5]);
   } return;
}
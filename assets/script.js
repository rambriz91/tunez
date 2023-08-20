var tunerEl = document.getElementById('tuner');
var frequencyEl = document.getElementById('frequency');
var tunerRightEl = document.querySelector('.fa-chevron-right');
var tunerLeftEl = document.querySelector('.fa-chevron-left');


tunerEl.oninput= function() {
frequencyEl.children[1].textContent = tunerEl.value;
};

tunerRightEl.addEventListener('click', function() {
    tunerEl.value += 0.1;
    frequencyEl.children[1].textContent = tunerEl.value;
    console.log(tunerEl.value);
})

tunerLeftEl.addEventListener('click', function() {
    tunerEl.value -= 0.1;
    frequencyEl.children[1].textContent = tunerEl.value;
    console.log(tunerEl.value);
})

// let country = "United States"; // country to search for 
// let radioUrl = `http://www.radio-browser.info/webservice/json/stations/bycountryexact/${country}`; 

// fetch(radioUrl) 
// .then(response => response.json()) 
// .then(data => { 
//    console.log(data); 
// }) 
// .catch(error => console.error(error)); 
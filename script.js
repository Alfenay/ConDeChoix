const firstChoice  = document.querySelector('#firstChoice');
const secondChoice = document.querySelector('#secondChoice');
const divForBtn    = document.querySelector('#divForBtn');
const nextBtn      = document.querySelector('#nextBtn');
const firstText    = document.querySelector('#firstText');
const secondText   = document.querySelector('#secondText');

function fetchChoices() {
    fetch('http://ton-domaine.com/api/choices') 
        .then(response => response.json())
        .then(data => {

            const choice = data[0]; 

            firstChoice.style.backgroundImage = `url(${choice.image1_url})`;
            secondChoice.style.backgroundImage = `url(${choice.image2_url})`;
            firstText.textContent = choice.desc1;
            secondText.textContent = choice.desc2;
        })
        .catch(error => console.error('Erreur lors de la récupération des choix:', error));
}

fetchChoices();

firstChoice.addEventListener('click', () => {
    divForBtn.style.display = "block";

});

secondChoice.addEventListener('click', () => {
    divForBtn.style.display = "block";
});

nextBtn.addEventListener('click', () => {
    divForBtn.style.display = "";
    setRandomPair();
});

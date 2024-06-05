const firstChoice  = document.querySelector('#firstChoice');
const secondChoice = document.querySelector('#secondChoice');
const divForBtn    = document.querySelector('#divForBtn');
const nextBtn      = document.querySelector('#nextBtn');
const firstText    = document.querySelector('#firstText');
const secondText   = document.querySelector('#secondText');
const pairs = [
    {
        images: ["./images/alarmeIncendie.webp", "./images/babyshark.webp"],
        texts: ["Écouter l'alarme incendie pendant 24h", "Écouter Baby Shark pendant 24h"]
    },
    {
        images: ["./images/agence.webp", "./images/di.webp"],
        texts: ["Travailler à l'agence", "Travailler dans la direction informatique"]
    },
    {
        images: ["./images/cafe.webp", "./images/the.webp"],
        texts: ["Boire du café", "Boire du thé"]
    },
    {
        images: ["./images/billard.webp", "./images/babyfoot.webp"],
        texts: ["Jouer au billard", "Jouer au baby-foot"]
    },
    {
        images: ["./images/tesCollegues.webp", "./images/tonCollegue.webp"],
        texts: ["Passer la journée avec tes collègues", "Passer la journée avec ton collègue préféré"]
    },
    {
        images: ["./images/macdo.webp", "./images/quick.webp"],
        texts: ["Manger chez McDonald's", "Manger chez Quick"]
    },
    {
        images: ["./images/Basket.webp", "./images/football.webp"],
        texts: ["Jouer au basket", "Jouer au football"]
    },
    {
        images: ["./images/dinosaure.webp", "./images/sumo.webp"],
        texts: ["Se déguiser en dinosaure", "Se déguiser en sumo"]
    },
    {
        images: ["./images/chien.webp", "./images/chat.webp"],
        texts: ["Avoir un chien", "Avoir un chat"]
    },
    {
        images: ["./images/cuillere.webp", "./images/banane.webp"],
        texts: ["Te défendre avec une cuillère", "Te défendre avec une banane"]
    },
    {
        images: ["./images/papierDeVerre.webp", "./images/cactus.webp"],
        texts: ["Utiliser du papier de verre comme papier toilette", "Utiliser des feuilles de cactus comme papier toilette"]
    }
];
let votes = {
    firstChoice: 0,
    secondChoice: 0,
    totalVotes: 0
};
let remainingPairs = [...pairs];


function setRandomPair() {
    if (remainingPairs.length === 0) {
        remainingPairs = [...pairs];
    }

    const randomIndex = Math.floor(Math.random() * remainingPairs.length);
    const randomPair = remainingPairs[randomIndex];

    firstChoice.style.backgroundImage = `url(${randomPair.images[0]})`;
    secondChoice.style.backgroundImage = `url(${randomPair.images[1]})`;
    firstText.textContent = randomPair.texts[0];
    secondText.textContent = randomPair.texts[1];

    remainingPairs.splice(randomIndex, 1);
}

function updateVotePercentages() {
    if (votes.totalVotes > 0) {
        const firstChoicePercentage = (votes.firstChoice / votes.totalVotes) * 100;
        const secondChoicePercentage = (votes.secondChoice / votes.totalVotes) * 100;

        firstChoice.style.width = `${firstChoicePercentage}%`;
        secondChoice.style.width = `${secondChoicePercentage}%`;

   
        firstText.textContent += `  ${firstChoicePercentage.toFixed(2)}%`;
        secondText.textContent += ` ${secondChoicePercentage.toFixed(2)}%`;
    }
}


setRandomPair();

firstChoice.addEventListener('click', () => {
    votes.firstChoice++;
    votes.totalVotes++;
    updateVotePercentages();
    divForBtn.style.display = "block";
});

secondChoice.addEventListener('click', () => {
    votes.secondChoice++;
    votes.totalVotes++;
    updateVotePercentages();
    divForBtn.style.display = "block";
});

nextBtn.addEventListener('click', () => {
    divForBtn.style.display = "";
    setRandomPair();
});

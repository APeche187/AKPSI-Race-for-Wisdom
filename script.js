let isStillRacing = true;
let questions = [
    {
        "question": "How much is the fraternal portion of student member dues each academic term?",
        "options": [
            { "text": "$60", "isCorrect": true },
            { "text": "$50", "isCorrect": false },
            { "text": "$70", "isCorrect": false },
            { "text": "$40", "isCorrect": false }
        ]
    },
    {
        "question": "Select the names of the original four founders (Brooklyn Four).",
        "options": [
            { "text": "Howard M. Jefferson, George L. Bergen, Nathan Lane Jr., Frederick R. Leach", "isCorrect": true },
            { "text": "Michael Smith, George L. Bergen, Nathan Lane Jr., Frederick R. Leach", "isCorrect": false },
            { "text": "Howard M. Jefferson, George L. Bergen, Nathan Lane Jr., Charles Brown", "isCorrect": false },
            { "text": "Howard M. Jefferson, Michael Smith, Nathan Lane Jr., Frederick R. Leach", "isCorrect": false }
        ]
    },
    {
        "question": "When and where was the Fraternity founded?",
        "options": [
            { "text": "October 5, 1904 at New York University", "isCorrect": true },
            { "text": "October 5, 1905 at Harvard University", "isCorrect": false },
            { "text": "October 5, 1903 at Columbia University", "isCorrect": false },
            { "text": "October 5, 1902 at Princeton University", "isCorrect": false }
        ]
    },
    {
        "question": "When was the Fraternity incorporated?",
        "options": [
            { "text": "May 20, 1905", "isCorrect": true },
            { "text": "April 25, 1906", "isCorrect": false },
            { "text": "June 15, 1907", "isCorrect": false },
            { "text": "March 10, 1904", "isCorrect": false }
        ]
    },
    {
        "question": "Alcohol is allowed at pledge activities.",
        "options": [
            { "text": "True", "isCorrect": false },
            { "text": "False", "isCorrect": true }
        ]
    },
    {
        "question": "What are the objects of Alpha Kappa Psi?",
        "options": [
            { "text": "To promote business, foster research, further welfare, and educate public on ideals.", "isCorrect": true },
            { "text": "To encourage networking, social gatherings, and support individual career growth.", "isCorrect": false },
            { "text": "To provide financial support for students in business-related degrees.", "isCorrect": false },
            { "text": "To offer mentorship and career placement services for graduates.", "isCorrect": false }
        ]
    },
    {
        "question": "The Board of Directors voted to admit women into the Fraternity in 1967.",
        "options": [
            { "text": "True", "isCorrect": false },
            { "text": "False", "isCorrect": true }
        ]
    },
    {
        "question": "The special significance of the Coat of Arms is only exemplified in the ritual.",
        "options": [
            { "text": "True", "isCorrect": true },
            { "text": "False", "isCorrect": false }
        ]
    },
    {
        "question": "The symbol of alumni is the yellow rose.",
        "options": [
            { "text": "True", "isCorrect": false },
            { "text": "False", "isCorrect": true }
        ]
    },
    {
        "question": "What are the governing documents of the Fraternity?",
        "options": [
            { "text": "The Constitution and Statutory Code, Chapter Bylaws, The Ritual of Alpha Kappa Psi, The Board of Directors' Statement of Policy", "isCorrect": true },
            { "text": "The Constitution, Chapter Rules, The AKPsi Code of Conduct, The Alumni Handbook", "isCorrect": false },
            { "text": "The Fraternity Rules, Chapter Policies, The AKPsi Code of Conduct, Annual Member Handbook", "isCorrect": false },
            { "text": "The AKPsi Bylaws, Chapter Code, The Code of Business Ethics, Alumni Statement", "isCorrect": false }
        ]
    },
    {
        "question": "During each school year, chapters are required to hold ___ initiations.",
        "options": [
            { "text": "Two", "isCorrect": true },
            { "text": "Three", "isCorrect": false },
            { "text": "One", "isCorrect": false },
            { "text": "Four", "isCorrect": false }
        ]
    },
    {
        "question": "How many meetings or required events can a student member miss unexcused per semester or quarter before they are subject to suspension from the chapter?",
        "options": [
            { "text": "Three per semester or two per quarter", "isCorrect": true },
            { "text": "Four per semester or three per quarter", "isCorrect": false },
            { "text": "Two per semester or one per quarter", "isCorrect": false },
            { "text": "One per semester or none per quarter", "isCorrect": false }
        ]
    },
    {
        "question": "Alpha Kappa Psi was founded at New York University.",
        "options": [
            { "text": "True", "isCorrect": true },
            { "text": "False", "isCorrect": false }
        ]
    },
    {
        "question": "What is the chorus of the anthem?",
        "options": [
            { "text": "For Alpha Kappa Psi, my friend, for Alpha Kappa Psi; We'll bless the days that we have spent, In Alpha Kappa Psi.", "isCorrect": true },
            { "text": "For Alpha Kappa Psi, we'll sing, with voices loud and high; Forever true to Alpha Psi, we’ll sing Alpha Psi.", "isCorrect": false },
            { "text": "For Alpha Kappa Psi, we pledge our loyalty, to serve with pride and unity, to Alpha Kappa Psi.", "isCorrect": false },
            { "text": "For Alpha Kappa Psi, to thee our hearts we bring, in every note of harmony, for Alpha Kappa Psi.", "isCorrect": false }
        ]
    },
    {
        "question": "What does the initiation fee cover?",
        "options": [
            { "text": "Membership card & certificate, an electronic subscription to The Diary of Alpha Kappa Psi, a member pin", "isCorrect": true },
            { "text": "Membership card, a member handbook, a lapel pin", "isCorrect": false },
            { "text": "Certificate, subscription to The AKPsi Journal, a silver badge", "isCorrect": false },
            { "text": "Handbook, AKPsi scarf, digital access to resources", "isCorrect": false }
        ]
    },
    {
        "question": "What is the highest-ranking governing document that no other document can supersede?",
        "options": [
            { "text": "The Constitution and Statutory Code", "isCorrect": true },
            { "text": "The AKPsi Manual", "isCorrect": false },
            { "text": "The AKPsi Constitution", "isCorrect": false },
            { "text": "The Board of Directors' Code", "isCorrect": false }
        ]
    },
    {
        "question": "Which of the following are Alpha Kappa Psi's core values?",
        "options": [
            { "text": "Brotherhood, Integrity, Service, Unity, Knowledge", "isCorrect": true },
            { "text": "Honor, Respect, Courage, Integrity, Knowledge", "isCorrect": false },
            { "text": "Unity, Loyalty, Service, Leadership, Knowledge", "isCorrect": false },
            { "text": "Trust, Respect, Service, Integrity, Knowledge", "isCorrect": false }
        ]
    },
    {
        "question": "What is AKPsi's Vision Statement?",
        "options": [
            { "text": "Alpha Kappa Psi is recognized as the premier developer of principled business leaders", "isCorrect": true },
            { "text": "Alpha Kappa Psi is dedicated to building global business leaders", "isCorrect": false },
            { "text": "AKPsi envisions a world of united business professionals", "isCorrect": false },
            { "text": "AKPsi, empowering business professionals worldwide", "isCorrect": false }
        ]
    },
    {
        "question": "What is the mission of the Foundation?",
        "options": [
            { "text": "Providing resources for enhancing the educational experience of future business leaders", "isCorrect": true },
            { "text": "To support students in achieving academic success", "isCorrect": false },
            { "text": "Funding initiatives that prepare students for the workforce", "isCorrect": false },
            { "text": "Offering scholarships and mentorship to aspiring leaders", "isCorrect": false }
        ]
    },
    {
        "question": "How much is the fraternal initiation fee?",
        "options": [
            { "text": "$84", "isCorrect": true },
            { "text": "$90", "isCorrect": false },
            { "text": "$78", "isCorrect": false },
            { "text": "$80", "isCorrect": false }
        ]
    },
    {
        "question": "At a chapter meeting, quorum is ___ of the total number of eligible votes.",
        "options": [
            { "text": "50% + 1", "isCorrect": true },
            { "text": "60% + 1", "isCorrect": false },
            { "text": "70% + 1", "isCorrect": false },
            { "text": "40% + 1", "isCorrect": false }
        ]
    },
    {
        "question": "When and where was the latest Convention?",
        "options": [
            { "text": "2024, Indianapolis, Indiana", "isCorrect": true },
            { "text": "2023, Chicago, Illinois", "isCorrect": false },
            { "text": "2022, Orlando, Florida", "isCorrect": false },
            { "text": "2021, Las Vegas, Nevada", "isCorrect": false }
        ]
    },
    {
        "question": "What dates are fraternal student member dues payable to the Fraternity Staff?",
        "options": [
            { "text": "October 15 and February 15", "isCorrect": true },
            { "text": "September 15 and March 15", "isCorrect": false },
            { "text": "October 1 and February 1", "isCorrect": false },
            { "text": "November 1 and March 1", "isCorrect": false }
        ]
    },
    {
        "question": "What is the second verse of the anthem?",
        "options": [
            { "text": "We'll work with might and main to win / Our meed of daily praise. But ne'er shall we in after years / Forget fraternal days!", "isCorrect": true },
            { "text": "Our voices strong, our spirits high, / For Alpha Kappa Psi. Through work and time, our bond shall grow / In Alpha Kappa Psi.", "isCorrect": false },
            { "text": "To thee we sing, with heart and mind, / For Alpha Kappa Psi. Our friendship true, our spirit high, / In Alpha Kappa Psi.", "isCorrect": false },
            { "text": "We sing of bonds that tie us true, / For Alpha Kappa Psi. Our days of joy, our days of pride / In Alpha Kappa Psi.", "isCorrect": false }
        ]
    },
    {
        "question": "What does the fraternal pledge induction fee cover?",
        "options": [
            { "text": "Program resources, technology, and support", "isCorrect": true },
            { "text": "Initiation ceremony costs and chapter dues", "isCorrect": false },
            { "text": "The member pin and certificate", "isCorrect": false },
            { "text": "Annual membership fees and administrative costs", "isCorrect": false }
        ]
    },
    {
        "question": "Each month of the academic year, the chapter is required to hold a minimum of ___ business meetings.",
        "options": [
            { "text": "Two", "isCorrect": true },
            { "text": "One", "isCorrect": false },
            { "text": "Three", "isCorrect": false },
            { "text": "Four", "isCorrect": false }
        ]
    },
    {
        "question": "How much is the Fraternal pledge induction fee?",
        "options": [
            { "text": "$48", "isCorrect": true },
            { "text": "$50", "isCorrect": false },
            { "text": "$45", "isCorrect": false },
            { "text": "$60", "isCorrect": false }
        ]
    },
    {
        "question": "Convention is held every ___ year(s).",
        "options": [
            { "text": "Two", "isCorrect": true },
            { "text": "Three", "isCorrect": false },
            { "text": "Four", "isCorrect": false },
            { "text": "One", "isCorrect": false }
        ]
    },
    {
        "question": "What is the first verse of the anthem?",
        "options": [
            { "text": "Should old acquaintance be forgot, And Alpha Kappa Psi? Shall we pass slowly out of view, Without regret or sigh?", "isCorrect": true },
            { "text": "In Alpha Kappa Psi we stand, with friendships we hold dear. We'll bless the days and years we share, and keep our brothers near.", "isCorrect": false },
            { "text": "United through the bond we share, in Alpha Kappa Psi. Our friendships true, our memories dear, for Alpha Kappa Psi.", "isCorrect": false },
            { "text": "As we join in brotherhood, our bond shall never die. For Alpha Kappa Psi we stand, with pride and loyalty high.", "isCorrect": false }
        ]
    },
    {
        "question": "When was the Foundation founded?",
        "options": [
            { "text": "1951", "isCorrect": true },
            { "text": "1950", "isCorrect": false },
            { "text": "1948", "isCorrect": false },
            { "text": "1945", "isCorrect": false }
        ]
    },
    {
        "question": "Who is the current Chief Executive Officer of Alpha Kappa Psi?",
        "options": [
            { "text": "Steve Hartman", "isCorrect": true },
            { "text": "Michael Dickerson", "isCorrect": false },
            { "text": "Brian Parker", "isCorrect": false },
            { "text": "Corey Reddy", "isCorrect": false }
        ]
    },
    {
        "question": "The fraternity seal is used to attest charters, membership certificates and awards issued by the fraternity.",
        "options": [
            { "text": "True", "isCorrect": true },
            { "text": "False", "isCorrect": false }
        ]
    },
    {
        "question": "Who is the current Fraternity President?",
        "options": [
            { "text": "Corey Reddy", "isCorrect": true },
            { "text": "Steve Hartman", "isCorrect": false },
            { "text": "Michael Dickerson", "isCorrect": false },
            { "text": "Brian Parker", "isCorrect": false }
        ]
    },
    {
        "question": "Who is the current Executive Vice President?",
        "options": [
            { "text": "De'Sean Keys", "isCorrect": true },
            { "text": "Corey Reddy", "isCorrect": false },
            { "text": "Michael Dickerson", "isCorrect": false },
            { "text": "Brian Parker", "isCorrect": false }
        ]
    },
    {
        "question": "Which of the following are duties of a member? Select all that apply.",
        "options": [
            { "text": "Attendance at every meeting and function", "isCorrect": true },
            { "text": "Recruit one new member per semester", "isCorrect": true },
            { "text": "Maintain at least a B average", "isCorrect": true },
            { "text": "Prepare for professional and business success", "isCorrect": true }
        ]
    },
    {
        "question": "Who is the current Chief Operations Officer of AKPsi?",
        "options": [
            { "text": "Brian Parker", "isCorrect": true },
            { "text": "Steve Hartman", "isCorrect": false },
            { "text": "Michael Dickerson", "isCorrect": false },
            { "text": "Corey Reddy", "isCorrect": false }
        ]
    },
    {
        "question": "What is AKPsi's tag-line?",
        "options": [
            { "text": "Shaping People, Shaping Business", "isCorrect": true },
            { "text": "Building Leaders for Tomorrow", "isCorrect": false },
            { "text": "Empowering Business Minds", "isCorrect": false },
            { "text": "Developing Business Leaders", "isCorrect": false }
        ]
    },
    {
        "question": "Who is the current Chair of the Fraternity Board of Directors?",
        "options": [
            { "text": "Michael Dickerson", "isCorrect": true },
            { "text": "Steve Hartman", "isCorrect": false },
            { "text": "Corey Reddy", "isCorrect": false },
            { "text": "Brian Parker", "isCorrect": false }
        ]
    },
    {
        "question": "While the Foundation is designated by the IRS as a 501(c)(3), the Fraternity is a 501(c)(7) which makes direct donations to the chapter not tax-deductible.",
        "options": [
            { "text": "True", "isCorrect": true },
            { "text": "False", "isCorrect": false }
        ]
    },
    {
        "question": "What nickname is given to the original four founders of the Fraternity?",
        "options": [
            { "text": "The Brooklyn Four", "isCorrect": true },
            { "text": "The Founding Four", "isCorrect": false },
            { "text": "The Original Four", "isCorrect": false },
            { "text": "The New York Four", "isCorrect": false }
        ]
    },
    {
        "question": "What is the preferred option by the Fraternity when a chapter wants to host an event with alcohol?",
        "options": [
            { "text": "No host, cash bar with a professional bartender fully covered with liability insurance", "isCorrect": true },
            { "text": "Open bar provided by the chapter", "isCorrect": false },
            { "text": "BYOB with no restrictions", "isCorrect": false },
            { "text": "Hosted bar with no insurance", "isCorrect": false }
        ]
    },
    {
        "question": "Which group oversees the daily operations of the Fraternity?",
        "options": [
            { "text": "The Fraternity Staff", "isCorrect": true },
            { "text": "The Board of Directors", "isCorrect": false },
            { "text": "The Chapter Congress", "isCorrect": false },
            { "text": "The Regional Directors", "isCorrect": false }
        ]
    },
    {
        "question": "Who is the current Chair of the Foundation?",
        "options": [
            { "text": "Alison Jennings", "isCorrect": true },
            { "text": "Steve Hartman", "isCorrect": false },
            { "text": "Brian Parker", "isCorrect": false },
            { "text": "Michael Dickerson", "isCorrect": false }
        ]
    },
    {
        "question": "Which governing body has the ability to change the constitution?",
        "options": [
            { "text": "The Chapter Congress", "isCorrect": true },
            { "text": "The Board of Directors", "isCorrect": false },
            { "text": "The Fraternity Staff", "isCorrect": false },
            { "text": "The Regional Directors", "isCorrect": false }
        ]
    },
    {
        "question": "In what year did Alpha Kappa Psi install its first international chapter?",
        "options": [
            { "text": "1931, in Canada", "isCorrect": true },
            { "text": "1930, in Canada", "isCorrect": false },
            { "text": "1932, in the United Kingdom", "isCorrect": false },
            { "text": "1935, in Canada", "isCorrect": false }
        ]
    },
    {
        "question": "The Yellow Rose Society is an annual giving program for student members with a minimum contribution of $10.",
        "options": [
            { "text": "True", "isCorrect": true },
            { "text": "False", "isCorrect": false }
        ]
    },
    {
        "question": "What are the items on the Coat of Arms?",
        "options": [
            { "text": "The ten pointed star, The chain of four links, The coin bag, The pair of balances, The Phoenician galley", "isCorrect": true },
            { "text": "The five pointed star, The chain of four links, The coin bag, The shield, The Phoenician galley", "isCorrect": false },
            { "text": "The ten pointed star, The sword, The coin bag, The shield, The scales", "isCorrect": false },
            { "text": "The five pointed star, The chain of links, The coin bag, The scales, The anchor", "isCorrect": false }
        ]
    },
    {
        "question": "Which of the following are programs funded by the Alpha Kappa Psi Foundation?",
        "options": [
            { "text": "The Academy, The AKPsi All-Academic Team, Case Competition", "isCorrect": true },
            { "text": "The Business Scholarship, Leadership Program, Case Competition", "isCorrect": false },
            { "text": "AKPsi Internship Fund, Global Exchange, Entrepreneurship Awards", "isCorrect": false },
            { "text": "Leadership Camp, Business Networking, International Case Competition", "isCorrect": false }
        ]
    },
    {
        "question": "The official flower of the fraternity is the yellow rose and the colors are gold and sapphire.",
        "options": [
            { "text": "False", "isCorrect": true },
            { "text": "True", "isCorrect": false }
        ]
    },
    {
        "question": "What is the name of the group responsible for setting the Fraternity's policies and strategic vision?",
        "options": [
            { "text": "The Fraternity Board of Directors", "isCorrect": true },
            { "text": "The Chapter Congress", "isCorrect": false },
            { "text": "The Fraternity Staff", "isCorrect": false },
            { "text": "The Regional Directors", "isCorrect": false }
        ]
    }

]

console.log(questions.length);
class Cars {
    constructor(id) {
        this.id = id;
        this.step = 0;
        this.chance = 0.75;
    }
    hasWon() {
        if (this.step >= 12) {
            return true;
        }
        return false;
    }
    move() {
        moveCarByStep(this.id);
    }
}
let cars = [
    new Cars('car-red'),
    new Cars('car-blue'),
    new Cars('car-yellow'),
    new Cars('car-white')
];

let playerCar = 'car-blue';

function moveCarByStep(carId) {
    const track = document.getElementById('track');
    const car = document.getElementById(carId);

    const trackWidth = track.offsetWidth;
    const step = trackWidth / 13.8;
    // console.log(step);

    let currentPosition = parseFloat(car.style.marginLeft) || 0;
    currentPosition += step;
    car.style.marginLeft = `${currentPosition}px`;
}


displayRandomQuestion();

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function correct() {
    console.log("Correct answer!");
    moveCarByStep(playerCar);
    cars.forEach((car) => {
        // console.log(car);
        if (car.id == playerCar) {
            // console.log("car");
            car.step++;
        }

        // console.log(car.step);
        if (car.step >= 12) {
            finishRace(true);
        }
    });
}

function wrong(rightAnswer) {
    console.log(`Incorrect. The correct answer is: ${rightAnswer}`);
}



function moveNPCs() {
    cars.forEach((car) => {
        if (car.id != playerCar && Math.random() < car.chance) {
            car.move();
            car.step++;
            if (car.step >= 12) {
                finishRace(false);
            }
        }
    })
}


function displayRandomQuestion() {
    if (questions.length === 0) {
        console.log("No more questions available.");
        finishRace(false);
        return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    questions.splice(randomIndex, 1);

    const options = [...randomQuestion.options];
    shuffle(options);

    const correctAnswer = options.find(option => option.isCorrect).text;

    const currQuestionDiv = document.getElementById('curr-question');
    currQuestionDiv.innerHTML = `
        <p>${randomQuestion.question}</p>
        <ul id="options-list">
            ${options.map((option, index) => `
                <li>${String.fromCharCode(65 + index)}) ${option.text}</li>
            `).join('')}
        </ul>
    `;

    // console.log(correctAnswer);

    document.querySelectorAll('#options-list li').forEach(optionEl => {
        optionEl.addEventListener('click', () => {
            const selectedAnswer = optionEl.textContent.slice(3);

            if (selectedAnswer === correctAnswer) {
                correct();
            } else {
                wrong(correctAnswer);
            }

            if (isStillRacing) {
                moveNPCs();
                displayRandomQuestion();
            }
        });
    });
}



const startBtn = document.getElementById('start-btn');
const gameScreen = document.getElementById('game-container');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const carDropdown = document.getElementById('car-dropdown');
const carPreview = document.getElementById('car-preview');

carPreview.src = carDropdown.options[carDropdown.selectedIndex].getAttribute('data-image');

carDropdown.addEventListener('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    playerCar = selectedOption.value;
    carPreview.src = selectedOption.getAttribute('data-image');
});

startBtn.addEventListener('click', (e) => {
    // console.log("click");
    startScreen.style.display = 'none';
    endScreen.style.display = 'none'
    gameScreen.classList.remove('hidden');
});

function finishRace(didIWin) {
    setTimeout(() => {
        isStillRacing = false;
        endScreen.classList.remove('hidden');
        endScreen.style.display = 'flex';
        gameScreen.classList.add('hidden');
        // console.log(didIWin)
        if (didIWin) {
            endScreen.innerHTML = `
            <h1>YOU WON CONGRATS! Do you want to do it again?</h1>
            <button id="play-again"> Play again</button>
        `
        } else {
            endScreen.innerHTML = `
            <h1>You lost, do you want to try again?</h1>
            <button id="play-again"> Play again</button>
        `
        }
        const playAgainBtn = document.getElementById('play-again');
        playAgainBtn.addEventListener('click', (e) => {
            window.location.reload();
        })
    }, 1500);
}


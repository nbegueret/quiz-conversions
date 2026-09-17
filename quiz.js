const allQuestions = [
    // --- anciennes questions ---
    { q: "Convertir 2,5 m en cm", c: ["250", "25", "2500", "2.5"], a: 0 },
    { q: "Convertir 0,03 km en m", c: ["300", "30", "3", "0.3"], a: 1 },
    { q: "Convertir 450 cm en m", c: ["4.5", "45", "0.45", "450"], a: 0 },
    { q: "Convertir 7 L en cL", c: ["700", "70", "7", "0.7"], a: 0 },
    { q: "Convertir 0,8 h en min", c: ["48", "480", "8", "4.8"], a: 0 },
    { q: "Convertir 3200 g en kg", c: ["3.2", "32", "0.32", "320"], a: 0 },
    { q: "Convertir 0,04 m en mm", c: ["40", "4", "400", "0.4"], a: 0 },
    { q: "Convertir 5,6 km en m", c: ["5600", "560", "56", "56000"], a: 0 },
    { q: "Convertir 0,002 kL en L", c: ["2", "0.2", "20", "200"], a: 0 },
    { q: "Convertir 120 min en h", c: ["2", "12", "0.2", "20"], a: 0 },

    // --- nouvelles questions µ ---
    { q: "Convertir 4 µm en m", c: ["0.000004", "0.004", "0.04", "4"], a: 0 },
    { q: "Convertir 250 µL en L", c: ["0.00025", "0.025", "0.0025", "25"], a: 0 },
    { q: "Convertir 3 µg en g", c: ["0.000003", "0.003", "0.03", "3"], a: 0 },

    // --- nouvelles questions n ---
    { q: "Convertir 50 nm en m", c: ["0.00000005", "0.00005", "0.005", "50"], a: 0 },
    { q: "Convertir 800 nL en L", c: ["0.0000008", "0.0008", "0.008", "8"], a: 0 },
    { q: "Convertir 12 ng en g", c: ["0.000000012", "0.000012", "0.012", "12"], a: 0 },

    // --- nouvelles questions p ---
    { q: "Convertir 300 pm en m", c: ["0.0000000003", "0.0000003", "0.0003", "300"], a: 0 },
    { q: "Convertir 900 pL en L", c: ["0.0000000009", "0.0000009", "0.0009", "900"], a: 0 },
    { q: "Convertir 7 pg en g", c: ["0.000000000007", "0.000000007", "0.000007", "7"], a: 0 },

    // --- nouvelles questions M ---
    { q: "Convertir 0.003 Mm en m", c: ["3000", "3", "300", "3000000"], a: 0 },
    { q: "Convertir 2 ML en L", c: ["2000000", "2000", "200", "2"], a: 0 },
    { q: "Convertir 0.004 Mg en g", c: ["4000", "4", "40", "400"], a: 0 },

    // --- nouvelles questions G ---
    { q: "Convertir 3 Gg en g", c: ["3000000000", "3000000", "3000", "3"], a: 0 },
    { q: "Convertir 1 GL en L", c: ["1000000000", "1000000", "1000", "1"], a: 0 },
    { q: "Convertir 0.006 GA en A", c: ["6000000", "6000", "600", "6"], a: 0 }
];

// Tirage aléatoire de 20 questions
const questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 20);

let index = 0;
let score = 0;

// Mélange des réponses
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    document.getElementById("progress").textContent =
        `Question ${index + 1} / 20`;

    const q = questions[index];
    document.getElementById("question").textContent = q.q;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    const shuffledChoices = shuffle(q.c.map((choice, i) => ({ choice, index: i })));

    shuffledChoices.forEach(obj => {
        const btn = document.createElement("div");
        btn.className = "choice";
        btn.textContent = obj.choice;
        btn.onclick = () => validate(obj.index);
        choicesDiv.appendChild(btn);
    });
}

function validate(i) {
    if (i === questions[index].a) {
        score++;
    }

    index++;

    if (index < 20) {
        showQuestion();
    } else {
        document.getElementById("question").textContent = "";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("progress").textContent = "";
        document.getElementById("result").innerHTML =
            `Score final : ${score} / 20 <br><br>
             <button onclick="restartQuiz()" class="restart">Recommencer</button>`;
    }
}

function restartQuiz() {
    location.reload();
}

showQuestion();


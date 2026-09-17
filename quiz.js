const allQuestions = [
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
    { q: "Convertir 0,9 m en cm", c: ["90", "9", "900", "0.9"], a: 0 },
    { q: "Convertir 45 cL en L", c: ["0.45", "4.5", "45", "0.045"], a: 0 },
    { q: "Convertir 0,07 kg en g", c: ["70", "7", "700", "0.7"], a: 0 },
    { q: "Convertir 3,5 h en min", c: ["210", "21", "2.1", "35"], a: 0 },
    { q: "Convertir 0,6 L en cL", c: ["60", "6", "600", "0.6"], a: 0 },
    { q: "Convertir 2500 mm en m", c: ["2.5", "25", "0.25", "250"], a: 0 },
    { q: "Convertir 0,003 km en m", c: ["3", "0.3", "30", "300"], a: 0 },
    { q: "Convertir 8,4 L en cL", c: ["840", "84", "8.4", "8400"], a: 0 },
    { q: "Convertir 0,02 h en min", c: ["1.2", "12", "0.12", "120"], a: 0 },
    { q: "Convertir 900 g en kg", c: ["0.9", "9", "90", "0.09"], a: 0 }
];

const questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 20);

let index = 0;
let score = 0;

function showQuestion() {
    document.getElementById("progress").textContent =
        `Question ${index + 1} / 20`;

    const q = questions[index];
    document.getElementById("question").textContent = q.q;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.c.forEach((choice, i) => {
        const btn = document.createElement("div");
        btn.className = "choice";
        btn.textContent = choice;
        btn.onclick = () => validate(i);
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
        document.getElementById("result").textContent =
            `Score final : ${score} / 20`;
    }
}

showQuestion();

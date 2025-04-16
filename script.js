// Random Number Generator
function generateRandomNumber() {
    const digitCategory = document.getElementById('digit-category').value;
    let randomNumber;

    if (digitCategory === "1") {
        randomNumber = Math.floor(Math.random() * 10); // 1-digit number (0-9)
    } else if (digitCategory === "2") {
        randomNumber = Math.floor(Math.random() * 90) + 10; // 2-digit number (10-99)
    } else if (digitCategory === "3") {
        randomNumber = Math.floor(Math.random() * 900) + 100; // 3-digit number (100-999)
    }

    document.getElementById('random-number-output').textContent = `Random Number: ${randomNumber}`;
}

// Random Password Generator
function generateRandomPassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('random-password-output').textContent = `Random Password: ${password}`;
}
// Random Color Generator
function generateRandomColor() {
    // Generate random values for red, green, and blue (0 to 255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Create the RGB color string
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    // Display the color as text
    document.getElementById('Random-Color-output').textContent = `Random Color: ${randomColor}`;

    // Change the background color of the section or body to the generated color
    document.getElementById('Random-Color').style.backgroundColor = randomColor;
}

// Random Quotes Generator
const quotes = {
    english: {
        attitude: [
            "Attitude is everything. Keep it positive.",
            "Your attitude determines your direction.",
            "Stay strong, stay positive, and never give up.",
             "Sometimes 😏things that break your 💔heart end 🔚 up 🛠️fixing your 😎version..😉",
            "Best revenge is waiting for you baby"
        ],
        funny: [
            "I'm not lazy, I'm on energy-saving mode.",
            "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
            "I'm not arguing, I'm just explaining why I'm right."
        ],
        love: [
            "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
            "The best thing to hold onto in life is each other.",
            "Love is composed of a single soul inhabiting two bodies."
            ],
        positive: [
            "Believe you can and you're halfway there.",
            "Positive thinking will let you do everything better than negative thinking will.",
            "Every day may not be good, but there's something good in every day."
        ]
    },
    tamil: {
        attitude: [
            "மனப்பான்மை எல்லாம். அதை நேர்மறையாக வைத்திருங்கள்.",
            "உங்கள் மனப்பான்மை உங்கள் திசையை தீர்மானிக்கிறது.",
            "வலுவாக இருங்கள், நேர்மறையாக இருங்கள், மற்றும் ஒருபோதும் விடாதீர்கள்.",
            "கோபம் எவ்வளவு சூடாக இருந்தாலும் சாப்பிட முடியாது பேசுனா சந்தோஷம் பேசாட்டி ரொம்ப சந்தோஷம். சீண்டாதவரை சிவனேனு இரு சீண்டினால் சிவனாக இரு"
        ],
        funny: [
            "நான் சோம்பேறி இல்லை, நான் ஆற்றல் சேமிப்பு முறையில் இருக்கிறேன்.",
            "எனக்கு ஒரு முடி அலங்காரம் தேவையில்லை, என் தலையணை எனக்கு ஒவ்வொரு காலையிலும் ஒரு புதிய ஸ்டைலை அளிக்கிறது.",
            "நான் வாதிடவில்லை, நான் ஏன் சரியாக இருக்கிறேன் என்று விளக்குகிறேன்."
        ],
        love: [
            "காதல் என்பது நீங்கள் எவ்வளவு சொல்கிறீர்கள் என்பதல்ல, அது உண்மை என்பதை நிரூபிக்கிறீர்கள்.",
            "வாழ்க்கையில் பிடிக்க சிறந்த விஷயம் ஒருவருக்கொருவர்.",
            "காதல் என்பது ஒரே ஆன்மா இரண்டு உடல்களில் வசிப்பது."
        ],
        positive: [
            "நீங்கள் முடியும் என்று நம்புங்கள், நீங்கள் பாதி வழியில் இருக்கிறீர்கள்.",
            "நேர்மறையான சிந்தனை எதிர்மறையான சிந்தனையை விட எல்லாவற்றையும் சிறப்பாக செய்யும்.",
            "ஒவ்வொரு நாளும் நல்லதாக இருக்காது, ஆனால் ஒவ்வொரு நாளிலும் ஏதோ ஒரு நல்ல விஷயம் இருக்கும்."
        ]
    }
};

function generateRandomQuote() {
    const language = document.getElementById('language').value; // Get selected language
    const quoteCategory = document.getElementById('quote-category').value; // Get selected category
    const randomQuote = quotes[language][quoteCategory][Math.floor(Math.random() * quotes[language][quoteCategory].length)];
    document.getElementById('random-quote-output').textContent = `Random Quote: ${randomQuote}`;
}
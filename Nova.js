const button = document.querySelector("button");
const input = document.getElementById("message");
const chat = document.getElementById("chat");

// ===============================
// MOTIVATIONAL QUOTES
// ===============================

let quotes = [
    "Success is built one small step at a time. 🚀",
    "Believe in yourself. You can do hard things. 💜",
    "The expert was once a beginner who never gave up. 🌟"
];

// ===============================
// JOKES
// ===============================

let jokes = [
    "Why did the programmer quit his job? Because he didn't get arrays. 😂",
    "Why do Java developers wear glasses? Because they can't C#. 🤣",
    "There are only 10 types of people: those who understand binary and those who don't. 😄",
    "Debugging: Being the detective in a crime movie where you are also the criminal. 🕵️"
];

// ===============================
// LOCAL STORAGE - USER NAME
// ===============================

let userName = localStorage.getItem("novaUserName") || "";

// ===============================
// LOCAL STORAGE - CHAT HISTORY
// ===============================

let savedChat = localStorage.getItem("novaChatHistory");

if (savedChat) {
    chat.innerHTML = savedChat;
} else {
    chat.innerHTML = `
    <div class="bot-message">
        🤖 Hello! I'm Nova Chat. 💜<br><br>
        Try saying:<br>
        • hello<br>
        • how are you<br>
        • what is your name<br>
        • my name is Xavira<br>
        • what can you do<br>
        • motivate me<br>
        • tell me a joke<br>
        • who created you
    </div>
    `;
}

// ===============================
// SAVE CHAT FUNCTION
// ===============================

function saveChat() {
    localStorage.setItem("novaChatHistory", chat.innerHTML);
}

// ===============================
// SEND MESSAGE
// ===============================

button.addEventListener("click", function () {

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // Show user's message
    chat.innerHTML += `
    <div class="user-message">
        🧑 ${message}
    </div>
    `;

    // Convert message to lowercase
    let text = message.toLowerCase();

    // ===============================
    // HELLO
    // ===============================

    if (text === "hello" || text === "hi") {

        chat.innerHTML += `
        <div class="bot-message" id="typing">
            🤖 Nova is typing...
        </div>
        `;

        chat.scrollTop = chat.scrollHeight;

        setTimeout(function () {

            let typing = document.getElementById("typing");

            if (typing) {
                typing.remove();
            }

            if (userName === "") {

                chat.innerHTML += `
                <div class="bot-message">
                    🤖 Hello! 😊 What's your name?
                </div>
                `;

            } else {

                chat.innerHTML += `
                <div class="bot-message">
                    🤖 Hello again, ${userName}! 💜
                </div>
                `;

            }

            saveChat();

            chat.scrollTop = chat.scrollHeight;

        }, 1000);
    }

    // ===============================
    // HOW ARE YOU
    // ===============================

    else if (text === "how are you") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 I'm doing great! Thanks for asking. 💜
        </div>
        `;
    }

    // ===============================
    // NOVA'S NAME
    // ===============================

    else if (text === "what is your name") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 I'm Nova Chat, your friendly AI assistant. 🤖
        </div>
        `;
    }

    // ===============================
    // USER'S NAME
    // ===============================

    else if (text.startsWith("my name is ")) {

        userName = message.substring(11);

        // Save name permanently
        localStorage.setItem("novaUserName", userName);

        chat.innerHTML += `
        <div class="bot-message">
            🤖 Nice to meet you, ${userName}! 💜
        </div>
        `;
    }

    // ===============================
    // THANK YOU
    // ===============================

    else if (text === "thank you") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 You're welcome! 💜
        </div>
        `;
    }

    // ===============================
    // GOOD MORNING
    // ===============================

    else if (text === "good morning") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 Good morning! ☀️ I hope you have a wonderful day.
        </div>
        `;
    }

    // ===============================
    // BYE
    // ===============================

    else if (text === "bye") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 Goodbye! 👋 I'll be here whenever you need me.
        </div>
        `;
    }

    // ===============================
    // CREATOR
    // ===============================

    else if (text === "who created you") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 I was created by Xavira Nova. 💜
        </div>
        `;
    }

    // ===============================
    // WHAT CAN YOU DO
    // ===============================

    else if (text === "what can you do") {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 I can answer questions, chat with you,
            help you learn programming, and motivate you! 🚀💜
        </div>
        `;
    }

    // ===============================
    // MOTIVATE ME
    // ===============================

    else if (text === "motivate me") {

        let randomIndex =
            Math.floor(Math.random() * quotes.length);

        chat.innerHTML += `
        <div class="bot-message">
            🤖 ${quotes[randomIndex]}
        </div>
        `;
    }

    // ===============================
    // TELL ME A JOKE
    // ===============================

    else if (text === "tell me a joke") {

        let randomIndex =
            Math.floor(Math.random() * jokes.length);

        chat.innerHTML += `
        <div class="bot-message">
            😂 ${jokes[randomIndex]}
        </div>
        `;
    }

    // ===============================
    // UNKNOWN MESSAGE
    // ===============================

    else {

        chat.innerHTML += `
        <div class="bot-message">
            🤖 I'm still learning that. 😊
        </div>
        `;
    }

    // Clear input
    input.value = "";

    // Scroll to latest message
    chat.scrollTop = chat.scrollHeight;

    // SAVE EVERYTHING
    saveChat();

});

// ===============================
// PRESS ENTER TO SEND
// ===============================

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        button.click();
    }

});

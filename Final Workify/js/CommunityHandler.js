document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.querySelector(".message-input input");
    const sendButton = document.querySelector(".message-input button");
    const messagesContainer = document.querySelector(".messages");

    function addMessage(text) {
        if (text.trim() === "") return;

        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerText = text;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; 
        messageInput.value = ""; 
    }

    sendButton.addEventListener("click", () => {
        addMessage(messageInput.value);
    });

    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addMessage(messageInput.value);
        }
    });
});

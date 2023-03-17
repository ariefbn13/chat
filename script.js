document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('chatForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const chatInput = document.getElementById('chatInput');
        const chatArea = document.getElementById('chatArea');

        if (chatInput.value.trim() !== '') {
            const message = document.createElement('div');
            message.classList.add('message');

            const sender = document.createElement('span');
            sender.classList.add('sender');
            sender.innerText = 'You: ';

            const text = document.createElement('span');
            text.innerText = chatInput.value.trim();

            message.appendChild(sender);
            message.appendChild(text);
            chatArea.appendChild(message);

            chatInput.value = '';
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    });
});

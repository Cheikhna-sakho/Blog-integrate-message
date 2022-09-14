const form = document.getElementById('msg-form');
const access = document.getElementsByName("access");
const chatBox = document.getElementById("chat-box");
const username = document.getElementById("username");
const theme = document.getElementById("theme");
const message = document.getElementById("message");
let groupe = null;
form.onsubmit = (e) => {
    e.preventDefault();
    for (let index = 0; index < access.length; index++) {
        const element = access[index];
        if (element.checked) {
            groupe = element;
        }
    }
    const innerMessage = `
    <div class="discussion ${groupe.id}">
        <p>
        Discussion creer par <b>${username.value}</b>
        <br>(Sur le theme: <b>${theme.value}</b>
        <br> Dans le groupe ${groupe.id}
        </p>
        <p>${message.value}</p>
    </div>
    `;
    chatBox.innerHTML += innerMessage;
    console.log(innerMessage);
}
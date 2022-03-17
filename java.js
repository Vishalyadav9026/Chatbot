let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let sendButton = document.getElementById("sendMsgBtn");
let userinput = document.getElementById("userInput");
let chatContainerbox = document.getElementById("chatContainer");



sendButton.onclick = function() {
    let chatboxto = document.createElement("div");
    chatboxto.classList.add("msg-to-chatbot-container");
    chatContainerbox.appendChild(chatboxto);
    let chatboxfrom = document.createElement("div");
    chatboxfrom.classList.add("msg-from-chatbot-container");
    chatContainerbox.appendChild(chatboxfrom);
    let userEntered = userinput.value;
    let paraElement1 = document.createElement("span");
    paraElement1.classList.add("msg-to-chatbot");
    paraElement1.textContent = userEntered;

    chatboxto.appendChild(paraElement1);
    let paraElement2 = document.createElement("span");
    paraElement2.classList.add("msg-from-chatbot");
    chatboxfrom.appendChild(paraElement2);
    if (userEntered === chatbotMsgList[0]) {
        paraElement2.textContent = chatbotMsgList[1];
    } else if (userEntered === chatbotMsgList[2]) {
        paraElement2.textContent = chatbotMsgList[0];
        let paraElement3 = document.createElement("p");
        paraElement3.classList.add("msg-from-chatbot");
        chatboxfrom.appendChild(paraElement3);
        paraElement3.textContent = chatbotMsgList[4];
    }

    userinput.value = "";

}

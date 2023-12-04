let ulElement = document.querySelector(".popular-articles-list");

let userInput = prompt("������� ���������� ��� ������ ������ ������:");
while (userInput !== null && userInput !== "") {

    let liElement = document.createElement("li");

    let textNode = document.createTextNode(userInput);
    liElement.appendChild(textNode);

    ulElement.appendChild(liElement);
    userInput = prompt("������� ���������� ��� ������ ������ ������:");
}

function addListItems() {
    const list = document.querySelector(".popular-articles-list");
    
    while (true) {
        const userInput = prompt("������� ���������� ��� ������ ������ ������:");

        if (userInput === null || userInput === "") {
            // ���� ������������ ������� ���� ��� ���� ������ ������, ������� �� �����
            break;
        }

        const listItem = document.createElement("li");
        listItem.textContent = userInput;

        list.appendChild(listItem);
    }
}

addListItems();
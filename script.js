
function firstClick(message) {

var inputText = document.getElementById("userInput").value

var p = document.createElement("p")

p.textContent = inputText

document.getElementById("resultContainer").appendChild(p)

}

function deleteInput() {
    document.getElementById("resultContainer").innerHTML = ""
}
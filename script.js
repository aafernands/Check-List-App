   // Function to display the input value in a new <p> tag
   function displayInput() {
    // Get the value from the input field with id "userInput"
    var inputText = document.getElementById("userInput").value;

    if (inputText === "") return; // Do nothing if input is empty

    // Save the input value to localStorage
    saveToLocalStorage(inputText);

    // Create and display the new <p> tag
    appendToResultContainer(inputText);
    
    // Clear input field after submission
    document.getElementById("userInput").value = "";
}

// Function to append input to the result container with delete button
function appendToResultContainer(text, index = null) {
    var p = document.createElement("p");
    p.textContent = text;

    // Create the delete button with 'X' symbol
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-entry";
    deleteBtn.onclick = function() {
        deleteSingleEntry(p, text); // Pass the <p> element and text to delete
    };

    // Append delete button to the paragraph
    p.appendChild(deleteBtn);

    // Append the <p> element inside the "resultContainer" div
    document.getElementById("resultContainer").appendChild(p);
}

// Function to save entries to localStorage
function saveToLocalStorage(text) {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.push(text);
    localStorage.setItem("entries", JSON.stringify(entries));
}

// Function to load entries from localStorage when page is loaded
function loadFromLocalStorage() {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.forEach(function(entry, index) {
        appendToResultContainer(entry, index);
    });
}

// Function to delete all inputs (both from DOM and localStorage)
function deleteAllInput() {
    document.getElementById("resultContainer").innerHTML = "";
    localStorage.removeItem("entries");
}

// Function to delete a single entry
function deleteSingleEntry(element, text) {
    // Remove the <p> element from the DOM
    document.getElementById("resultContainer").removeChild(element);

    // Remove the entry from localStorage
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    const index = entries.indexOf(text);
    if (index > -1) {
        entries.splice(index, 1); // Remove the entry from the array
    }
    localStorage.setItem("entries", JSON.stringify(entries));
}

// Load saved entries from localStorage when the page loads
window.onload = function() {
    loadFromLocalStorage();
};
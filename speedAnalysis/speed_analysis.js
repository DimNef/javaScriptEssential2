let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById('inputText').value = testText;
    clearInputs();
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    var button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    document.getElementById('userInput').readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById('userInput').value;

    var typeWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length

    var wpm = 0;

    if (timeElapsed !==0 && !isNaN(typeWords)) {
        wpm = Math.round((typeWords / timeElapsed) * 60);
    }

    var totalLength = userTypedText.trim().length;

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Typing test results:</h2>" + 
    "<p>Total Length: " + totalLength + "</p>" +
    "<p>Words typed: " + typeWords + "</p>" +
    "<p>Time elapsed: " + timeElapsed + " seconds </p>" +
    "<p>WPM: " + wpm + "</p>";

    var button = document.getElementById('btn');
    button.innerHTML = "Start Test";
    button.onclick = startTest;

}

function clearInputs() {
    document.getElementById('userInput').value = "";
    document.getElementById('userInput').readOnly = false;
}
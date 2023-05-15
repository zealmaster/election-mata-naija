
var stateNames = [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
        "FCT"
    ];
function generateTable() {
    var partyNumber = document.getElementById("partyNumber").value;
    var table = document.getElementById("partyTable");
    var resultsTable = document.getElementById("resultsTable");
    resultsTable.innerHTML = ""; // Clear previous results
    var percentageTable = document.getElementById("percentageTable");
    percentageTable.innerHTML = ""; // Clear previous results

    // Display the party table
    if (partyNumber > 1) {
    var partyDiv = document.getElementById("party");
    partyDiv.style.display = "block";
    } else {alert('The number of parties must be more than one!');}
    // Clear previous table content
    table.innerHTML = "";

    // Display the table
    table.style.display = "block";

    // Generate table columns
    var headerRow = table.insertRow();
    for (var i = 0; i < partyNumber; i++) {
        if(i===0) {
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = "State";
        }
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = "Party " + (i + 1);
    }

    // Generate table rows
    for (var j = 0; j < stateNames.length; j++) {
        var row = table.insertRow();
        row.id = stateNames[j];
        var stateCell = row.insertCell();
        stateCell.innerHTML = stateNames[j];
        for (var k = 0; k < partyNumber; k++) {
            var cell = row.insertCell();
            cell.innerHTML = "<input type='number' id='vote_" + stateNames[j] + "_party_" + (k + 1) + "'>";
        }
    }
     
}

function calculateResults() {
var partyNumber = document.getElementById("partyNumber").value;
var resultsTable = document.getElementById("resultsTable");
resultsTable.innerHTML = ""; // Clear previous results
calculatePercent();
// Generate table columns
var headerRow = resultsTable.insertRow();
    for (var i = 0; i < partyNumber; i++) {
        if(i===0) {
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = " ";
        }
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = "Party " + (i + 1);
    }
    
var totalVotes = 0;
var vote = 0;
for (var j = 0; j < partyNumber; j++) {
    for (var k = 0; k < stateNames.length; k++) {
        var state = stateNames[k];
        var voteInput = document.getElementById("vote_" + state + "_party_" + (j + 1));
        vote = parseInt(voteInput.value) || 0;
        totalVotes += vote;
    }
    var scoreRow = resultsTable.insertRow();
        for (var i = 0; i < partyNumber; i++) {
            if (i === 0) {
                var partyCell = scoreRow.insertCell();
                partyCell.innerHTML = " ";
                }
            var partyCell = scoreRow.insertCell();
            partyCell.innerHTML = totalVotes;
            totalVotes = 0; 
    }
    console.log("Total votes for Party " + (j + 1) + ": " + totalVotes);
    totalVotes = 0; // Reset totalVotes for the next party
}

    // Display the results table
    if (partyNumber > 1) {
    var percentDiv = document.getElementById("results");
    percentDiv.style.display = "block";
} else {alert('The number of parties must be more than one!');}
}

// Calculate  percentage vote per state
function calculatePercent() {
var partyNumber = document.getElementById("partyNumber").value;
var percentageTable = document.getElementById("percentageTable");
percentageTable.innerHTML = ""; // Clear previous results

// Generate table columns
var headerRow = percentageTable.insertRow();
    for (var i = 0; i < partyNumber; i++) {
        if(i===0) {
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = "State";
        }
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = "Party " + (i + 1);
}
// state column
for (var i = 0; i < stateNames.length; i++) {
var state = stateNames[i];
var row = percentageTable.insertRow();
var stateCell = row.insertCell();
stateCell.innerHTML = state;

// percentage per state
var totalVotes = 0;
for (var j = 0; j < partyNumber; j++) {
    var voteInput = document.getElementById("vote_" + state + "_party_" + (j + 1));
    var vote = parseInt(voteInput.value) || 0;
    totalVotes += vote;
}
for (var j = 0; j < partyNumber; j++) {
    var voteInput = document.getElementById("vote_" + state + "_party_" + (j + 1));
    var vote = parseInt(voteInput.value) || 0;
    var percentage = totalVotes !== 0 ? (vote / totalVotes * 100).toFixed(2) : 0;
    var partyCell = row.insertCell();
    partyCell.innerHTML = percentage + '%';
}
}
    // Display the percents table
    if (partyNumber > 1) {
    var percentDiv = document.getElementById("percentageVotes");
    percentDiv.style.display = "block";
} else {alert('The number of parties must be more than one!');}
}


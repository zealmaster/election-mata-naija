
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

    function getPartyWithHighestVote(votes) {
        let highestVote = 0;
        let winningParty = '';
      
        // Iterate over each party and its votes
        for (const party in votes) {
          if (votes.hasOwnProperty(party)) {
            const voteCount = votes[party];
      
            // Check if the current vote count is higher than the highest vote
            if (voteCount > highestVote) {
              highestVote = voteCount;
              winningParty = party;
            }
          }
        }
      
        return {winningParty, highestVote};
      }
      
      
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
var winner = {};
function calculateResults() {
var partyNumber = document.getElementById("partyNumber").value;
var resultsTable = document.getElementById("resultsTable");
resultsTable.innerHTML = ""; // Clear previous results
var showDashboard = document.getElementById("showDashboard");
    showDashboard.style.display = "block";

// Generate table columns
var totalRow = resultsTable.insertRow();
    for (var i = 0; i < partyNumber; i++) {
        if(i===0) {
        var totalCell = totalRow.insertCell();
        totalCell.innerHTML = " ";
        }
        var totalCell = totalRow.insertCell();
        totalCell.innerHTML = "Party " + (i + 1);
        let partyName = "Party " + (i + 1);
        winner[partyName] = "";
    }

    //Calculate total votes for each party
var totalVotes = 0;
var vote = 0;
var votes = [];
for (var j = 0; j < partyNumber; j++) {
    for (var k = 0; k < stateNames.length; k++) {
        var state = stateNames[k];
        var voteInput = document.getElementById("vote_" + state + "_party_" + (j + 1));
        vote = parseInt(voteInput.value) || 0;
        totalVotes += vote;
    }
    winner["Party " + (j + 1)] = totalVotes;
    votes.push(totalVotes)
    totalVotes = 0; // Reset totalVotes for the next party
}

// Display total votes for each party
var totalRow = resultsTable.insertRow();
var totalCell = totalRow.insertCell();
        totalCell.innerHTML = " ";
votes.map((vote) => { 
    var totalCell = totalRow.insertCell();
    totalCell.innerHTML = vote;
})

console.log(winner);
    // Display the results table
    if (partyNumber > 1) {
    var percentDiv = document.getElementById("results");
    percentDiv.style.display = "block";
} else {alert('The number of parties must be more than one!');}
}

let winnerPercent = {};
let percentCount = 0;

function calculatePercent() {
    var partyNumber = parseInt(document.getElementById("partyNumber").value);
    var percentageTable = document.getElementById("percentageTable");
    percentageTable.innerHTML = ""; // Clear previous results

    // Generate table columns
    var headerRow = percentageTable.insertRow();
    for (var i = 0; i < partyNumber; i++) {
        if (i === 0) {
            var headerCell = headerRow.insertCell();
            headerCell.innerHTML = "State";
        }
        var headerCell = headerRow.insertCell();
        headerCell.innerHTML = "Party " + (i + 1);
        winnerPercent["Party " + (i + 1)] = ""; // Initialize with 0
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
            var percentage = totalVotes !== 0 ? ((vote / totalVotes) * 100).toFixed(0) : 0;
            var partyCell = row.insertCell();
            partyCell.innerHTML = percentage + "%";
            console.log(percentage)
            winnerPercent["Party " + (j + 1)] = percentage;
        }
        // percentCount = 0;
    }
    console.log(winnerPercent);

    // Display the percents table
    if (partyNumber > 1) {
        var percentDiv = document.getElementById("percentageVotes");
        percentDiv.style.display = "block";
    } else {
        alert("The number of parties must be more than one!");
    }
}

function declareWinner() {
var partyNumber = document.getElementById("partyNumber").value;
var winnerTable = document.getElementById("winnerTable");
winnerTable.innerHTML = ""; // Clear previous results

var maxVote = 0;
console.log(maxVote)
      // Example usage
      const winningParty = getPartyWithHighestVote(winner);

      const winnerRow = winnerTable.insertRow()
      winnerRow.innerHTML = `The election is won by ${winningParty.winningParty} with ${winningParty.highestVote} votes`;
    // Display the percents table
    if (partyNumber > 1) {
    var winnerDiv = document.getElementById("winner");
    winnerDiv.style.display = "block";
} else {alert('The number of parties must be more than one!');}
}


function getName() {
    return document.getElementById("fname").value;
}

/**
* Stores name and timestamp to local storage and displays them
*/
function storeName() {
    // gets timestamp
    var time = new Date();
    
    // gets value of name entered
    //var fullName = document.getElementById("fname").value;
    var fullName = getName();
    
    if(fullName === "") {
        display(fullName)
        return;
    }
    
    // stores fullname as its key and timestamp as its value
    localStorage.setItem(fullName, time);
    
    // it displays the data everytime submit is clicked
    display(fullName);
    // clear field in search box everytime an entry is entered
    clearField();
    console.log(fullName);
    
}

/**
* Displays all the data
* Called if submit is clicked
*/
function display(fullName) {       
    // displays the table
    document.getElementById("enteredItems").style.display = "block";
    
    var dataLength = localStorage.length;
    
    // if the data table is empty, display a message
    if(dataLength === 0) {
        document.getElementById("message").innerHTML = "There are currently no Names stored in the System. Please Submit a Name.";
        return;
    } else
        document.getElementById("message").innerHTML = '';
    
    var rowNum = document.getElementById("tbl").rows.length;
    var caption = document.getElementById("caption").innerHTML = "List of " + dataLength + " Names and the Times they Entered in the System";
    
    // if table is empty, it loops through the local storage and displays keys and its values in a table
    // if it's not empty, it just appends the submitted data at the bottom of the table (this is done to avoid duplicate in displayed data)
    if(rowNum<=0) {
        for(var i=0; i<dataLength; i++) {
            createTable(localStorage.key(i));
        }
    } else if(rowNum<=dataLength-1) {
        createTable(fullName);
    }
}

/**
* creates table for the data
*/
function createTable(item) {    
    let tableReference = document.getElementById("tbl");
    let newRow = tableReference.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(item + " clicked submit on: " + localStorage.getItem(item));
    newCell.appendChild(newText);    
}

/**
* Clears text field after button click
*/
function clearField() {
    document.getElementById("fname").value = "";
}

/**
* Hides table
*/
function hideTable() {
    document.getElementById("enteredItems").style.display = "none";
    clearField();
}
let i = 1;
document.getElementById('submit').addEventListener('click', function (e) {
    document.getElementById('counter').innerText = i;
    addNode();
    i++;
})


function addNode(){
    var newTable = document.getElementById("output-table");
    var row = newTable.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell1.innerHTML = document.getElementById("fName").value;
    cell2.innerHTML = document.getElementById("lName").value;
    cell3.innerHTML = document.getElementById("gender").value;
}


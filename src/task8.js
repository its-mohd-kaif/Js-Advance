class employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}

let data1 = new employee(1, "John", 8000);
let data2 = new employee(2, "Mark", 9000);
let data3 = new employee(3, "Yash", 7000);

var arr = [];
arr.push(data1);
arr.push(data2);
arr.push(data3);

function debug() {
  var sal = document.getElementById("sal").value;
  if (sal <= 0) {
    debugger;
  }else{
    var table =
      "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
    arr.forEach((element) => {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.salary +
        "</td></tr>";
    });
    table += "</table>";
    document.getElementById("output").innerHTML = table;
  }
}



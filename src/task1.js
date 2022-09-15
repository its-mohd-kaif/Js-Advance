let data = [];
function add() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let salary = document.getElementById("salary").value;

  var val = {
    ID: id,
    Name: name,
    Salary: salary,
  };
  data.push(val);

  display();
}

function display() {
  var table =
    "<table><tr><th>ID</th><th>Name</th><th>Salary</th><th>Action</th>";
  data.forEach((element) => {
    table +=
      "<tr><td>" +
      element.ID +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Salary +
      "</td><td>" +
      "<a href='#' onclick=delFun('" +
      element.ID +
      "')>Delete</a>" +
      "</td><tr>";
  });
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

function delFun(val) {
  for (let i = 0; i < data.length; i++) {
    if (val == data[i].ID) {
      data.splice(i, 1);
    }
  }
  display();
}

let data = [];
function add() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let salary = document.getElementById("salary").value;

  try {
    if (name == "") throw "All field must be field ";
    if (!isNaN(name)) throw "Name should not be a value";
    var val = {
      ID: id,
      Name: name,
      Salary: salary,
    };
    data.push(val);
    display();
  } catch (err) {
    document.getElementById("err").innerHTML = err;
  }
}

function display() {
  var table = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
  data.forEach((element) => {
    table +=
      "<tr><td>" +
      element.ID +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Salary +
      "</td><tr>";
  });
  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

// function delFun(val) {
//   for (let i = 0; i < data.length; i++) {
//     if (val == data[i].ID) {
//       data.splice(i, 1);
//     }
//   }!!
//   display();
// }

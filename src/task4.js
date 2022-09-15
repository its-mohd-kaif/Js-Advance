function display() {
  class employee {
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  }

  let data1 = new employee(1, "John", 8000);
  let data2 = new employee(2, "Saif", 9000);
  let data3 = new employee(3, "Shadab", 12000);
  let data4 = new employee(4, "Sheeban", 10000);

  var arr = [];
  arr.push(data1);
  arr.push(data2);
  arr.push(data3);
  arr.push(data4);

  var js = JSON.stringify(arr);
  var obj = JSON.parse(js);

  var table = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr>";
  obj.forEach((element) => {
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

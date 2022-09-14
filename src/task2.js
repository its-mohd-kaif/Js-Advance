function display(params) {
    class employee {
        constructor(id, name, salary) {
          this.id = id;
          this.name = name;
          this.salary = salary;
        }
      }
      
      let data = new employee(1, "John", 8000);
      var table = "<table border=1px><tr><th>ID</th><th>Name</th><th>Salary</th><tr>";
      table +=
        "<tr><td>" +
        data.id +
        "</td><td>" +
        data.name +
        "</td><td>" +
        data.salary +
        "</td><tr>";
      table += "</table>";
      document.getElementById("output").innerHTML = table;
}


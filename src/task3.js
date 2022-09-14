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
    
      let js1=JSON.stringify(data1);
      let js2=JSON.stringify(data2);
      let js3=JSON.stringify(data3);
      let js4=JSON.stringify(data4);
    
      document.getElementById("output1").innerHTML=js1;
      document.getElementById("output2").innerHTML=js2;
      document.getElementById("output3").innerHTML=js3;
      document.getElementById("output4").innerHTML=js4;
}


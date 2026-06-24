const isHighlighted = 'java-practice'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

const javaPractice = {
  javaPracticeNote: [
    {
      id: 1,
      title: "class",
      note: [
        {
          text1: `
         `,
          code1: `// ----------------------- Ex ample 1 -----------------------
          // Employee.java
          class Employee {
              int id;
              String name;
              String position;

              Employee(int id, String name, String position){
                  this.id = id;
                  this.name = name;
                  this.position = position;
              }

              public String getName() {
                  return name;
              }

              public Integer getId() {
                  return id;
              }

              @Override
              public String toString() {
                  return id + " " + name + " " + position;
              }
          }

//EmployeeMapDemo.java
import java.util.*;
import java.util.stream.Collectors;

public class EmployeeMapDemo {
    public static void main(String[] args) {

        List<Employee> empList = new ArrayList<>();

        empList.add(new Employee(101, "Anand", "Developer"));
        empList.add(new Employee(102, "John", "Tester"));
        empList.add(new Employee(103, "Priya", "Manager"));


        List<String> empNames = empList.stream()
                .map(Employee::getName)
                .filter(nam -> nam.startsWith("A"))
                .collect(Collectors.toList());
        System.out.println(empNames);
    }
}
    


// ----------------------- Ex ample 2 -----------------------
// Local variable counter defined in an enclosing scope must be final or effectively final
import java.util.*;

public class LambdaLocalVariable {
    public static void main(String[] args) {

        List<String> list = Arrays.asList("Java", "Python", "Javascript");
        int counter = 0;

        list.forEach(s -> {
            System.out.println(s);
            counter++;
        });
        System.out.println("Total elements: " + counter);
    }
}
`
        }
      ]
    },


  ]
}





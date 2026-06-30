const isHighlighted = 'java-practice'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

const javaPractice = {
    javaPracticeNote: [
        {
            id: 1,
            title: "Design",
            note: [
                {
                    text1: `Load balancing
Caching (Redis basics)
API design
Scalability basics`,
                    code1: ``
                }
            ]
        },
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
        {
            id: 1,
            title: "cannot use a \"break\" statement inside a lambda expression.",
            note: [
                {
                    text1: `Java will throw an error:<b> error: break outside switch or loop.</b>
                    
                    The below(Ex : 1) code will not compile because break (and continue) are not allowed inside a lambda expression.
                    
                      <a href="https://github.com/anand-developer01/java-programs/blob/main/BreakInsideLambda.java" target="_blank">cannot use a statement inside a lambda expression.</a>
                      
                    below is an example(Ex : 2) of how to use a break statement inside a lambda expression using a flag variable.`,
                    code1: `//------------------------ Ex : 1 -----------------------
                    import java.util.*;

class Main {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A","B","C");
        
        list.forEach(k -> {
            if(k.equals("B")){
                break;
            }
            System.out.println(k);
        });
    }
}
    // This code will not compile because break (and continue) are not allowed inside a lambda expression.
//     ERROR!
// Main.java:9: error: break outside switch or loop
//                 break;
//                 ^
// 1 error

                    
                    
                    //------------------------ Ex : 2 -----------------------
                    import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

class Main {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C", "D");
        
        // 1. Create a mutable flag that the lambda is allowed to modify
        AtomicBoolean stopFlag = new AtomicBoolean(false);
        
        list.forEach(k -> {
            // 2. Check the flag at the very beginning of the lambda.
            // If it's true, we simply return, skipping the logic for this element.
            if (stopFlag.get()) {
                return; 
            }
            
            // 3. Our condition to "break"
            if (k.equals("B")) {
                stopFlag.set(true); // Flip the flag so future elements are skipped
                return;             // Exit the current iteration
            }
            
            System.out.println(k);
        });
    }
}
// Output:
// A    
`
                }
            ]
        },

    ]
}





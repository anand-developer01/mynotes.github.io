const isHighlighted = 'spring-boot-notes'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'vue-x'
const Links4 = 'vue3-projects'

const springBootData = {
  springBootNote: [
    {
      id: 1,
      title: "spring-boot syllabus",
      note: [
        {
          text1: `<b>1. Introduction to Spring Boot</b>

What is Spring Boot?

Difference between Spring and Spring Boot

Advantages of Spring Boot

Understanding Convention over Configuration

Spring Boot architecture overview

<b>2. Spring Boot Setup</b>

Installing Java (JDK 17 or above)

Setting up Maven or Gradle project

Using Spring Initializr (https://start.spring.io)

Project structure and important files (pom.xml, application.properties, etc.)

<b>3. Spring Boot Core Concepts</b>

@SpringBootApplication annotation

Application entry point (main class)

Auto Configuration

Starter dependencies

Externalized configuration (application.properties / application.yml)

Profiles (@Profile, spring.profiles.active)

<b>4. Dependency Injection (IoC)</b>

@Component, @Service, @Repository

@Autowired and constructor injection

@Qualifier, @Primary

@Configuration and @Bean

<b>5. Spring Boot Web (REST API Development)</b>

Building REST Controllers (@RestController)

Request handling with @GetMapping, @PostMapping, @PutMapping, @DeleteMapping

Path variables and query parameters

RequestBody and ResponseEntity

Exception handling (@ControllerAdvice, @ExceptionHandler)

Validation (@Valid, @NotNull, @Email, etc.)

<b>6. Spring Data JPA (Database Integration)</b>

JPA and Hibernate overview

Configuring DataSource (H2, MySQL, PostgreSQL, etc.)

@Entity, @Id, @GeneratedValue

Repository Layer (CrudRepository, JpaRepository)

Custom queries (@Query)

Pagination and Sorting

Transactions (@Transactional)

<b>7. Spring Boot with Liquibase or Flyway (Database Migration)</b>

What is Liquibase/Flyway

How to integrate Liquibase with Spring Boot

Writing and applying changelogs

Managing schema versions

<b>8. Spring Security (Optional but Important)</b>

Basics of authentication and authorization

Spring Security auto-configuration

In-memory and JDBC-based authentication

JWT (JSON Web Token) authentication

Role-based access control

<b>9. Connecting to External APIs</b>

Using RestTemplate

Using WebClient (Reactive way)

Handling API responses and errors

<b>10. Testing in Spring Boot</b>

Unit testing with JUnit 5

Mocking with Mockito

Testing controllers with @WebMvcTest

Testing repositories with @DataJpaTest

Integration testing (@SpringBootTest)

<b>11. Spring Boot and Microservices</b>

Microservice architecture basics

Service discovery with Eureka

API Gateway (Spring Cloud Gateway)

Centralized configuration (Spring Cloud Config)

Circuit breaker (Resilience4j)

<b>12. Actuator & Monitoring</b>

What is Spring Boot Actuator

Exposing health, metrics, and info endpoints

Custom health indicators

Integration with Prometheus / Grafana

<b>13. Packaging & Deployment</b>

Building a JAR file (mvn package)

Running Spring Boot app

Creating Docker image for Spring Boot app

Deploying to AWS / Azure / GCP

<b>14. Advanced Topics</b>

Async processing (@Async)

Scheduling tasks (@Scheduled)

File upload/download REST APIs

Caching with Spring Cache (@Cacheable)

WebSockets (Real-time communication)

<b>15. Tools & Best Practices</b>

Lombok (@Getter, @Setter, @Builder)

Swagger/OpenAPI documentation

Logging with SLF4J & Logback

Code structure and naming conventions

Performance tuning tips`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "What is Spring Boot?",
      note: [
        {
          text1: `Spring Boot is a framework built on top of the <b>Spring Framework</b> that simplifies the process of developing, configuring, and deploying <b>Java-based web applications and microservices.</b>`,
          code1: `// ----------- Here’s a minimal Spring Boot app:
          @SpringBootApplication
public class HelloApp {
    public static void main(String[] args) {
        SpringApplication.run(HelloApp.class, args);
    }
}

@RestController
class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring Boot!";
    }
}

`
        }
      ]
    },
    {
      id: 1,
      section: "Spring Boot",
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Data Transfer Object (DTO)",
      note: [
        {
          text1: `<b>What it is</b>: A simple object used to transfer data between different layers of an application or between different systems, such as a server and a client.
<b>Purpose</b>: To reduce the number of calls and optimize data exchange by carrying only the necessary data, without any business logic.
<b>Example</b>: When an API requests an employee's name and photo, a DTO can be used to send just that data instead of the entire employee record, which might include sensitive information.

In Spring Boot, a DTO (Data Transfer Object) is a design pattern used to transfer data between different layers of an application, particularly between the client-side (e.g., a web browser or mobile app) and the server-side (your Spring Boot application). DTOs are simple Java objects that contain fields representing the data to be transferred, along with corresponding getters, setters, and potentially a constructor. 

Transfers data between layers, used in API requrests/responses

A Data Transfer Object is a design pattern that allows for the exchange of data between software application subsystems or layers, often between the business logic layer and the presentation or persistence layer. The primary goal of DTOs is to reduce the number of method calls between these layers by aggregating data into a single object. 

In a Spring Boot application, DTOs are commonly used to encapsulate data transferred between the controller and service layers, or between the service layer and the persistence layer. This segregation helps in maintaining a clear separation of concerns and improves the overall modularity of the codebase.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "entity",
      note: [
        {
          text1: `In Spring Boot, an entity is a Plain Old Java Object (POJO) that represents a table in a relational database. It's a core concept in Spring Data JPA (Java Persistence API), which simplifies database interactions by providing an object-relational mapping (ORM) layer.
          
           <b>Entity Class Definition</b>:
An entity class is a regular Java class annotated with <b>@Entity</b> from <b>javax.persistence</b>. This annotation tells Spring Data JPA that this class should be mapped to a database table.
Each entity must have a primary key, identified by the <b>@Id</b> annotation. You can optionally use <b>@GeneratedValue</b> to specify how the primary key's value is generated (e.g., auto-incrementing).
Fields within the entity class represent columns in the database table. You can use <b>@Column</b> to customize column names or properties if they differ from the field names.
Getter and setter methods are typically provided for all fields to allow access and modification of the entity's properties.`,
          code1: `import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products") // Optional: specifies a different table name
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "item_description") // Optional: specifies a different column name
    private String description;

    private double price;

    // Getters and Setters
    // ...
}`
        }
      ]
    },
    {
      id: 1,
      title: "DAO (Data Access Object)",
      note: [
        {
          text1: `DAO stands for <b>Data Access Object</b>.
It is a design pattern used to <b>separate database logic</b> from business logic.

<b>Why DAO Layer?</b>
Keeps your code clean and modular
Easy to switch between databases
Central place for CRUD operations
Helps with unit testing (DAO can be mocked)

In Spring Boot, a DAO (Data Access Object) is a design pattern used to abstract and encapsulate all access to a data source, typically a database. It serves as a layer between the business logic of your application and the persistence mechanism, providing a common interface for performing database operations like creating, reading, updating, and deleting (CRUD) data.

<b>DAO</b> is a classic design pattern that abstracts and encapsulates all access to the data source. It’s typically implemented manually using <b>JDBC, Hibernate</b>, or <b>JPA</b>. Each entity may have its own <b>DAO</b> class, especially when more control over queries or transactions is needed beyond standard <b>CRUD</b> operations.`,
          code1: `// ---------------  ------------
          @Repository
public class UserDao {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public User getUserById(int id) {
        String sql = "SELECT * FROM users WHERE id=?";
        return jdbcTemplate.queryForObject(sql, new UserRowMapper(), id);
    }
}

//@Repository is used. This is important for \`exception translation\`
//----------------
@Repository
public class UserDAO {
    @PersistenceContext
    private EntityManager entityManager;

    public void save(User user) {
        entityManager.persist(user);
    }

    public User findById(Long id) {
        return entityManager.find(User.class, id);
    }
}

`
        }
      ]
    },
      {
      id: 1,
      title: "Lombok",
      note: [
        {
          text1: `Lombok is a Java library that helps you write less boilerplate code by automatically generating common code at compile time.
         
 <b>@Getter</b>
Definition:
Generates <b>getter methods</b> for all fields (or specific fields) of a class at compile time.
<i>Purpose</i>: Generates getter methods.
@Getter
public class CarDto {
    private String brand;
}
    ➡ Generates:
public String getBrand() { return brand; }

 <b>@Setter</b>
Definition:
Generates <b>setter methods</b> for all fields (or specific fields) of a class at compile time.
<i>Purpose</i>: Generates setter methods.
@Setter
public class CarDto {
    private String brand;
}
 ➡ Generates:   
public void setBrand(String brand) { this.brand = brand; }


 <b>@Data</b>
Definition:
A shortcut Lombok annotation that generates:
Getters
Setters
toString()
equals()
hashCode()
 @RequiredArgsConstructor
Used mainly for <b>DTOs.</b>
 @Data
public class CarDto {
    private String brand;
}


<b>@NoArgsConstructor</b>
Definition:
Generates a <b>no-argument constructor</b>, required by frameworks like <b>Spring, JPA, and Jackson.</b>
<i>Purpose</i>: Generates no-argument constructor.
@NoArgsConstructor
public class CarDto {}


 <b>@AllArgsConstructor</b>
Definition:
Generates a constructor that accepts <b>all class fields as parameters</b>.
<i>Purpose</i>: Generates constructor with all fields.
@AllArgsConstructor
public class CarDto {
    private String brand;
}


 <b>@Builder</b>
Definition:
Implements the <b>Builder design pattern</b>, allowing object creation using a readable, step-by-step approach.
<i>Purpose</i>: Builder pattern.
@Builder
public class CarDto {
    private String brand;
}
Usage:
CarDto car = CarDto.builder().brand("Tesla").build();


 <b>@SuperBuilder</b>
Definition:
An enhanced version of  <b>@Builder</b> that supports <b>inheritance</b>, enabling builders to work correctly with parent and child classes.

 <b>@Slf4j</b>
Definition:
Automatically creates an <b>SLF4J</b> logger instance named <b>log</b>, used for logging messages like <b>log.info()</b> and <b>log.error()</b>.


⚠️ <b>Important</b>: For <b>entities</b>, some people avoid @Data because equals() and hashCode() may break Hibernate proxy behavior in some cases.
Recommended for DTOs, but <b>@Getter + @Setter</b> is safest for JPA entities.
`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Repository",
      note: [
        {
          text1: `In Spring Boot, a repository is a component that acts as an abstraction layer for data persistence and retrieval, primarily interacting with a database. It simplifies the process of performing common data operations, allowing developers to focus on business logic rather than low-level database interactions.

          <b>Repository</b>:
Repository is a modern abstraction, especially popularized by Spring Data JPA. It provides ready-to-use CRUD methods and often eliminates the need to write boilerplate code. You simply define an interface, and Spring automatically generates the implementation for you.
          
          Here are the key aspects of a repository in Spring Boot:
<b>Data Access Layer</b>: Repositories form the data access layer of an application, responsible for managing the storage, retrieval, update, and deletion of data (CRUD operations) for specific entities.
<b>Simplifying Database Interaction</b>: Spring Data JPA, a part of the Spring ecosystem, significantly simplifies database interaction by providing interfaces like CrudRepository and JpaRepository. By extending these interfaces, developers gain access to a wide range of pre-defined methods for common database operations without needing to write manual SQL queries.
<b>Abstraction over Database</b>: Repositories abstract away the underlying database technology. Whether using a relational database (like MySQL or PostgreSQL) with JPA, a NoSQL database (like MongoDB), or another data store, the repository interface remains largely consistent, promoting portability and maintainability.
<b>@Repository Annotation</b>: The @Repository annotation is a specialization of @Component used to mark a class as a repository. This annotation also enables Spring's exception translation mechanism, converting technology-specific data access exceptions into a consistent hierarchy of Spring's DataAccessException.
<b>Dependency Injection</b>: Repository instances are managed by the Spring container and can be easily injected into other components, such as service classes, using dependency injection.

In this example(Ex: 1), UserRepository extends JpaRepository, providing ready-to-use methods for User entities, such as save(), findById(), findAll(), and delete(). A custom method findByEmail() is also defined, which Spring Data JPA will automatically implement based on the method name.

<b>JpaRepository</b> is used in the Repository (DAO) layer of a Spring Boot application to perform database operations. It provides built-in CRUD, pagination, sorting, and query methods. The service layer depends on these repositories to access the database.
`,
          code1: `// ---------- Ex: 1 ----------
          import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt;{
    // Custom query methods can be added here
    User findByEmail(String email);
}
    
// ------------- 
public interface UserRepository extends JpaRepository&lt;User, Long&gt;{
    Optional&lt;User&gt; findByEmail(String email);
}`
        }
      ]
    },
    {
      id: 1,
      title: "Meaning of CascadeType.ALL",
      note: [
        {
          text1: `CascadeType.ALL is a <b>JPA/Hibernate cascade option</b> that tells JPA to apply <b>all persistence operations</b> on a child entity whenever they are applied to the parent entity.
          
          Example Use Case
Parent: Order
Child: OrderItem
@Entity
public class Order {

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> items;
}

✔ If you save Order, all OrderItems will also be saved
orderRepository.save(order);

✔ If you delete Order, all OrderItems will also be deleted
orderRepository.delete(order);

<b>🚨 Important: CascadeType.ALL can be dangerous</b>
Because it includes REMOVE, it can delete child data unintentionally.
Example:
Deleting a customer may delete all orders → not always desired.

<b>What is CascadeType.ALL?</b>
<b>CascadeType.ALL</b> allows all entity operations (save, update, delete, etc.) performed on the parent to be automatically applied to the child. It includes PERSIST, MERGE, REMOVE, REFRESH, and DETACH.

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Cascade Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>PERSIST</b></td>
      <td>When parent is saved → child is saved</td>
    </tr>
    <tr>
      <td><b>MERGE</b></td>
      <td>When parent is updated → child is updated</td>
    </tr>
    <tr>
      <td><b>REMOVE</b></td>
      <td>When parent is deleted → child is deleted</td>
    </tr>
    <tr>
      <td><b>REFRESH</b></td>
      <td>When parent is refreshed → child is refreshed</td>
    </tr>
    <tr>
      <td><b>DETACH</b></td>
      <td>When parent is detached → child is detached</td>
    </tr>
  </tbody>
</table>
`,
          code1: ``
        }
      ]
    },
        {
      id: 1,
      title: "MapStruct",
      note: [
        {
          text1: `<b>MapStruct</b> is a <b>code generator for Java</b> that automates the process of mapping one object to another — typically between:

DTOs (Data Transfer Objects)
Domain models / entity classes

Instead of writing lots of repetitive code to copy fields from one class to another, <b>MapStruct generates that code automatically at compile time</b> based on simple annotations and configuration.

MapStruct is a Java annotation-based code generator used to map one Java object to another automatically.

It is mainly used to convert:
Entity → DTO
DTO → Entity
Model → Response Object

MapStruct is a Java annotation-based code generator that automatically maps objects like Entity and DTO at compile time, producing fast and type-safe mapping code.

Mapper Annotations:
<b>@Mapper</b>	Marks interface as mapper
<b>@Mapping</b>	Maps different field names
<b>componentModel="spring"</b>	Enables Spring injection
<b>@Mappings</b>	Multiple mappings`,
          code1: `//Without MapStruct:
          userDto.setId(user.getId());
userDto.setName(user.getName());
userDto.setEmail(user.getEmail());

// With MapStruct:
UserDto dto = userMapper.toDto(user);

//------------- Ex : 1 --------------
// Entity(modal) Car.java
package com.srihas.demo.CarController;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "cars", schema = "public")
@Getter        // generates getters for all fields
@Setter        // generates setters for all fields
@NoArgsConstructor   // no-args constructor (required by JPA)
@AllArgsConstructor  // all-args constructor (optional)
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private Double price;
}



// CarDto.java
package com.srihas.demo.CarController;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.*;
import lombok.experimental.SuperBuilder;
@Data
@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)  //When converting a Java object to JSON, do NOT include fields whose value is null.
public class CarDto {
    private Long id;

    private String brand;
    private String model;
    private Double price;
}



// CarController.java
package com.srihas.demo.CarController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<CarDto> getCustomCars() {
        return carService.getCustomCars(); // returns only id + brand
    }

    @GetMapping("/allCars")
    public List<CarDto> getAllCars(){
        return carService.getAllCars();
    }

    @GetMapping("/{id}")
    public CarDto getCarById(@PathVariable Long id) {
        return carService.getCarById(id); 
    }

    // Create new car
    @PostMapping
    public CarDto createCar(@RequestBody CarDto carDto) {
        return carService.saveCar(carDto); // returns CarDto
    }

    // Update car
    @PutMapping("/{id}")
    public CarDto updateCar(@PathVariable Long id, @RequestBody CarDto carDto) {
        return carService.updateCar(id, carDto); // returns CarDto
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
    }
}



// CarMapper.java
package com.srihas.demo.CarController;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CarMapper {
    @Named("full")
    CarDto toDto(Car car);           // full mapping
    Car toEntity(CarDto dto);        // full mapping

    @IterableMapping(qualifiedByName = "full")
    List<CarDto> toDtoList(List<Car> cars);

    @Named("summery")
    @Mapping(target = "id", source = "id")
    @Mapping(target = "brand", source = "brand")
    @Mapping(target = "model", ignore = true)
    @Mapping(target = "price", ignore = true)
    @IterableMapping(qualifiedByName = "summery")
    CarDto toDtoSummary(Car car);    // summary mapping (id + brand)
}




// CarService.java
package com.srihas.demo.CarController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarService {

    private final CarRepository carRepository;
    private final CarMapper carMapper;

    @Autowired
    public CarService(CarRepository carRepository, CarMapper carMapper) {
        this.carRepository = carRepository;
        this.carMapper = carMapper;
    }

    public List<CarDto> getCustomCars() {
        System.out.println(carRepository.findAll());
        return carRepository.findAll()
                .stream()
                .map(carMapper::toDtoSummary) // call only the summary method
                .collect(Collectors.toList());
    }

    public List<CarDto> getAllCars(){
        return carMapper.toDtoList(carRepository.findAll());
    }

    public CarDto getCarById(Long id) {
        return carRepository.findById(id)
                .map(carMapper::toDtoSummary)
                .orElse(null);
    }

    // Full DTO used for create/update
    public CarDto saveCar(CarDto dto) {
        Car car = carMapper.toEntity(dto);
        Car saved = carRepository.save(car);
        return carMapper.toDto(saved);
    }

    public CarDto updateCar(Long id, CarDto dto) {
        Car existing = carRepository.findById(id).orElse(null);
        if (existing == null)
            return null;

        existing.setBrand(dto.getBrand());
        existing.setModel(dto.getModel());
        existing.setPrice(dto.getPrice());

        return carMapper.toDto(carRepository.save(existing));
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }
}



// CarRepository.java
package com.srihas.demo.CarController;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}

          `
        }
      ]
    },
        {
      id: 1,
      title: "getters & setters",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
        {
      id: 1,
      title: "@ keywords (annotations) in Spring Boot",
      note: [
        {
          text1: `<!DOCTYPE html>
<html>
<head>
    <title>Spring Boot Annotations</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        th, td {
            border: 1px solid #999;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        h2 {
            margin-top: 40px;
        }
    </style>
</head>
<body>

<h1>Spring Boot @Annotations - Category Wise</h1>

<!-- 1. Application Level -->
<h2>1. Application Level</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@SpringBootApplication</td><td>Main entry point; Combines @Configuration, @EnableAutoConfiguration, @ComponentScan</td></tr>
    <tr><td>@EnableAutoConfiguration</td><td>Automatically configures beans based on dependencies</td></tr>
    <tr><td>@ComponentScan</td><td>Scans packages for components</td></tr>
    <tr><td>@Configuration</td><td>Marks a class as a configuration source</td></tr>
</table>

<!-- 2. Bean & Component Level -->
<h2>2. Bean & Component Annotations</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@Component</td><td>Generic Spring bean</td></tr>
    <tr><td>@Service</td><td>Business logic component</td></tr>
    <tr><td>@Repository</td><td>DAO layer component (exception translation)</td></tr>
    <tr><td>@Controller</td><td>MVC Controller</td></tr>
    <tr><td>@RestController</td><td>Returns JSON; @Controller + @ResponseBody</td></tr>
    <tr><td>@Bean</td><td>Manually defines a bean in configuration</td></tr>
</table>

<!-- 3. Dependency Injection -->
<h2>3. Dependency Injection</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@Autowired</td><td>Injects a bean automatically</td></tr>
    <tr><td>@Qualifier</td><td>Selects a specific bean when multiple exist</td></tr>
    <tr><td>@Value</td><td>Injects values from properties file</td></tr>
    <tr><td>@Lazy</td><td>Lazy initialization</td></tr>
    <tr><td>@Primary</td><td>Marks default bean when duplicates exist</td></tr>
</table>

<!-- 4. Spring Web / REST -->
<h2>4. Spring Web / REST API</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@GetMapping</td><td>Handles HTTP GET</td></tr>
    <tr><td>@PostMapping</td><td>Handles HTTP POST</td></tr>
    <tr><td>@PutMapping</td><td>Handles HTTP PUT</td></tr>
    <tr><td>@DeleteMapping</td><td>Handles HTTP DELETE</td></tr>
    <tr><td>@PatchMapping</td><td>Handles HTTP PATCH</td></tr>
    <tr><td>@RequestMapping</td><td>Maps any request type</td></tr>
    <tr><td>@PathVariable</td><td>Extracts value from URL</td></tr>
    <tr><td>@RequestParam</td><td>Extracts query parameter</td></tr>
    <tr><td>@RequestBody</td><td>Binds JSON body to object</td></tr>
    <tr><td>@ResponseBody</td><td>Returns JSON response</td></tr>
    <tr><td>@CrossOrigin</td><td>Enables CORS</td></tr>
</table>

<!-- 5. JPA / Hibernate -->
<h2>5. JPA / Hibernate</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@Entity</td><td>Marks a JPA entity</td></tr>
    <tr><td>@Table</td><td>Custom table mapping</td></tr>
    <tr><td>@Id</td><td>Primary key</td></tr>
    <tr><td>@GeneratedValue</td><td>Auto-generated primary key</td></tr>
    <tr><td>@Column</td><td>Column configuration</td></tr>
    <tr><td>@OneToOne</td><td>One-to-one relation</td></tr>
    <tr><td>@OneToMany</td><td>One-to-many relation</td></tr>
    <tr><td>@ManyToOne</td><td>Many-to-one relation</td></tr>
    <tr><td>@ManyToMany</td><td>Many-to-many relation</td></tr>
    <tr><td>@JoinColumn</td><td>Defines foreign key</td></tr>
    <tr><td>@Transactional</td><td>Transaction management</td></tr>
</table>

<!-- 6. Validation -->
<h2>6. Validation</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@Valid</td><td>Validates request body</td></tr>
    <tr><td>@NotNull</td><td>Value must not be null</td></tr>
    <tr><td>@NotBlank</td><td>String must not be blank</td></tr>
    <tr><td>@NotEmpty</td><td>Must not be empty</td></tr>
    <tr><td>@Size</td><td>Min/max size</td></tr>
    <tr><td>@Email</td><td>Valid email format</td></tr>
    <tr><td>@Min</td><td>Minimum numeric value</td></tr>
    <tr><td>@Max</td><td>Maximum numeric value</td></tr>
</table>

<!-- 7. Security -->
<h2>7. Security</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@EnableWebSecurity</td><td>Enables Spring Security</td></tr>
    <tr><td>@PreAuthorize</td><td>Method-level role check</td></tr>
    <tr><td>@Secured</td><td>Role-based access control</td></tr>
</table>

<!-- 8. Scheduling -->
<h2>8. Scheduling</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@EnableScheduling</td><td>Enables scheduled tasks</td></tr>
    <tr><td>@Scheduled</td><td>Run method on schedule</td></tr>
</table>

<!-- 9. Asynchronous -->
<h2>9. Asynchronous</h2>
<table>
    <tr><th>Annotation</th><th>Description</th></tr>
    <tr><td>@EnableAsync</td><td>Enables async execution</td></tr>
    <tr><td>@Async</td><td>Runs method in another thread</td></tr>
</table>

</body>
</html>
`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "pom.xml",
      note: [
        {
          text1: ``,
          code1: `&lt;dependencies&gt;
    &lt;!-- Spring Boot Starter Data JPA for JPA support --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- H2 Database for in-memory testing (optional, replace with your choice of database) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.h2database&lt;/groupId&gt;
        &lt;artifactId&gt;h2&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;

    &lt;!-- PostgreSQL Driver for PostgreSQL database connectivity (optional, replace with your database) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
        &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;

    &lt;!-- Spring Boot Starter Web for building REST APIs --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Spring Boot Starter Test for unit testing --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
        &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;`
        }
      ]
    },
    {
      id: 1,
      title: "relationships",
      note: [
        {
          text1: `In modern enterprise applications, managing relationships between different entities in a database is fundamental to effective data modeling. Spring Data JPA, built on top of the Jakarta Persistence API (JPA), offers a powerful and intuitive framework for handling these relationships. With annotations like @OneToOne, @OneToMany, @ManyToOne, and @ManyToMany, developers can define and manage how entities in a database are related to one another. This article not only explores these relationship annotations but also provides a comprehensive guide on implementing them, including setting up your project dependencies, configuring Spring Data JPA, and following best practices to ensure your application’s data layer is robust and performant.
          
          Spring Boot, in conjunction with Spring Data JPA and Hibernate, facilitates the management of relationships between entities in a relational database. These relationships are defined using annotations within your entity classes. The primary types of relationships are
          
          <b>One-to-One (@OneToOne)</b>:
Each instance of one entity is associated with exactly one instance of another entity.
<b>Example</b>: A User entity might have a one-to-one relationship with a UserProfile entity, where each user has one profile and each profile belongs to one user.
<b>Annotations</b>: @OneToOne, @JoinColumn (to specify the foreign key column).

<b>One-to-Many (@OneToMany) and Many-to-One (@ManyToOne)</b>:
<b>One-to-Many</b>: One instance of an entity can be associated with multiple instances of another entity.
<b>Many-to-One</b>: Multiple instances of an entity can be associated with a single instance of another entity. These are typically the inverse side of a one-to-many relationship.
<b>Example</b>: A Department entity can have a one-to-many relationship with Employee entities (one department has many employees), and an Employee entity has a many-to-one relationship with a Department entity (many employees belong to one department).
<b>Annotations</b>: @OneToMany, @ManyToOne, @JoinColumn (on the many-to-one side).

<b>Many-to-Many (@ManyToMany)</b>:
Each instance of one entity can be associated with multiple instances of another entity, and vice-versa.
This typically requires an intermediate "join table" in the database to manage the associations.
<b>Example</b>: A Student entity can enroll in multiple Course entities, and a Course entity can have multiple Student entities enrolled.
<b>Annotations</b>: @ManyToMany, @JoinTable (to configure the join table).`,
          code1: ``
        },
        {
          text1: `<b>Implementing Entity Relationships</b>
Entity relationships are a cornerstone of relational database design. Understanding and implementing these relationships correctly is crucial for ensuring data integrity and efficient data access. Below, we’ll explore each type of relationship in detail, with examples of how to implement them using Spring Data JPA.

@Entity is a JPA annotation used in Spring Boot to mark a class as a <b>database entity (table).</b>
When you put <b>@Entity</b> on a class, Spring + Hibernate treats that class as a <b>table in the database</b>, and each object becomes a <b>row</b>.

<b>One-to-One Relationship</b>
A one-to-one relationship is used when one entity is linked to exactly one other entity. This relationship is often seen in scenarios where an entity has a tightly coupled but separate set of data, which you want to store in a different table.

<b>@GeneratedValue</b> is a JPA annotation used along with <b>@Id</b> to tell the database how to auto-generate primary key values for an entity.
In simple words:
@GeneratedValue automatically generates the ID value when saving a new record.
Without @GeneratedValue, you must manually assign ID values for every new record, which increases the risk of duplicate IDs and potential conflicts in the database. With @GeneratedValue, the ID values are automatically created by the system, ensuring safe, unique, and consistent primary key generation without manual intervention.
`,
          code1: `//Entities: User & Profile (One-to-One)
          //User Entity
          import jakarta.persistence.*;

@Entity
@Table(name = "users") 
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This means when inserting a new row, the DB will automatically assign the id.
    private Long id;

    private String username;
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private Profile profile;

    // getters & setters
}


//Profile Entity
import jakarta.persistence.*;

@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String phone;

    @OneToOne(mappedBy = "profile")
    private User user;

    // getters & setters
}

`
        }
      ]
    },
    {
      id: 1,
      title: "application.properties",
      note: [
        {
          text1: `<b>application.properties</b> is a key configuration file in Spring Boot applications. It is typically located in the <b>src/main/resources</b> directory of a Spring Boot project. This file allows for externalized configuration, meaning that various settings and properties of the application can be defined outside of the main Java code. 

          application.properties is a <b>configuration file</b> used in <b>Spring Boot</b> projects. It contains key-value pairs that define settings for your application, like database connections, server ports, logging, and other framework-specific properties.
          <b>Purpose</b>
Centralized configuration for Spring Boot applications.
Allows you to externalize settings so you can change them without modifying code.
Can be overridden by environment-specific files like application-dev.properties.

<b>Key Points</b>
File location: <b>src/main/resources/application.properties.</b>
<b>Spring Boot automatically loads it</b> when your app starts.
Can also be written as <b>application.yml</b> using YAML format.
Supports profiles: <b>application-dev.properties, application-prod.properties.</b>

<b>Environment-specific profiles</b>: Create separate properties files, such as <b>application-dev.properties</b> or <b>application-prod.properties</b>, to manage settings for different environments.
          `,
          code1: `// ------- Database configuration ------------ 
          spring.datasource.url=jdbc:postgresql://localhost:5432/testdb
spring.datasource.username=postgres
spring.datasource.password=123
spring.datasource.driver-class-name=org.postgresql.Driver

// ------------ JPA / Hibernate settings -------------
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

// ------------- Server settings -----------
server.port=8080

// ------------Logging -------------
logging.level.org.springframework=INFO
logging.level.com.srihas.demo=DEBUG


// ------------- Liquibase settings ------------
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml


          `
        }
      ]
    },
    {
      id: 1,
      section: "Liquibase",
      title: "Liquibase",
      note: [
        {
          text1: `Liquibase is a database-independent, open-source tool for managing database schema changes. It tracks, versions, and deploys changes to your database in a controlled and organized way, allowing development teams to manage database schema evolution alongside application code. 
          
          <b>Changelog</b>: A file (typically in XML, YAML, JSON, or formatted SQL) that records all database changes. The changelog files are stored in version control, just like source code, providing a history of all modifications.
<b>Changeset</b>: A single, unique, and atomic database change within a changelog. Examples of changesets include creating a table, adding a column, or inserting data. Each changeset is identified by an author and an ID.
<b>DatabaseChangeLog table</b>: Liquibase maintains a DATABASECHANGELOG table in your database to track which changesets have already been executed. This prevents the same changeset from being run multiple times.
<b>DatabaseChangeLogLock table</b>: A lock table (DATABASECHANGELOGLOCK) is used to ensure that only one instance of Liquibase can update the database at a time, preventing conflicts.

<b>What is Liquibase?</b>
Liquibase is an open-source database migration tool that provides organizations with an effortless way to track, version, and deploy database schema changes.

Liquibase uses commands and Change Types (changes to database schemas) that allow you to specify what you need Liquibase to do and how you want it to be done.

Liquibase uses changelogs and tracking tables to determine what is deployed to the database after the commands have been run.

<b>Features of Liquibase</b>
Liquibase is <b>compatible with a broad range of databases</b>. For a complete list of supported databases, see Liquibase Getting Started.
A <b>flexible extension framework</b> that allows for seamless additions of newly released platforms and integrations.
Full control of when, where, and how database changes are deployed.

<b>Liquibase Supports</b>
Ability to merge changes from multiple developers.
Code branches.
Multiple databases.
Cluster-safe database upgrades.
Generation of starting changelogs from existing databases.
Generation of database change documentation.
Automated updates or generation of SQL.
<b>Database Schema Changes Supported Files</b>
-> SQL
-> XML
-> YAML
-> JSON
Changes are specified as <b>changelogs, changesets, and Change Types.</b>

<b>How Liquibase Works</b>
There are two main mechanisms, or concepts, that are the foundation of Liquibase. These two concepts are:
-> <b>Schema Changes</b> which consist of changelogs, changesets, and Change Types.
-> <b>Tracking tables</b> that record database changes.

<b>Schema Changes</b>
In SQL, schema changes are written using SQL statements that
create,
modify, or
drop database objects.

`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "DATABASECHANGELOG",
      note: [
        {
          text1: `The DATABASECHANGELOG table is a metadata table created by Liquibase in your database to track which database changesets have been executed. It serves as a single source of truth for the database's schema version history, ensuring that each change is applied only once.
          
          Liquibase tracks which changesets have been run by using the DATABASECHANGELOG (DBCL) table. If the table does not exist in the database, Liquibase creates one automatically.

The default name of the DBCL is DATABASECHANGELOG. You can specify a different name with the <b>--database-changelog-table-name</b> parameter.

<b>How it works</b>
When you run a Liquibase <b>update</b> command, it performs the following process: 
<b>Reads the changelog</b>: Liquibase reads the changelog file that contains all your database changesets.
<b>Checks the DATABASECHANGELOG table</b>: For each changeset in the file, Liquibase queries the DATABASECHANGELOG table to see if a record for that specific changeset already exists.
<b>Executes new changes</b>: If Liquibase does not find a record for a changeset, it executes the change against your database.
<b>Records the execution</b>: After a changeset successfully runs, Liquibase inserts a new row into the DATABASECHANGELOG table to mark it as having been deployed. This prevents the same changeset from being run again on future updates. 

<b>Table structure</b>
The <b>DATABASECHANGELOG</b> table contains several key columns that provide an audit trail of changes: 
<b>ID</b>: The identifier from the changeset in your changelog file.
<b>AUTHOR</b>: The author of the changeset, as specified in the changelog file.
<b>FILENAME</b>: The path to the changelog file where the changeset is defined.
<b>DATEEXECUTED</b>: The timestamp when the changeset was executed.
<b>ORDEREXECUTED</b>: The order in which the changesets were executed.
<b>EXECTYPE</b>: The execution status of the changeset, such as EXECUTED, FAILED, or SKIPPED.
<b>MD5SUM</b>: A checksum value to detect if a changeset has been changed since it was last executed. 

<b>Example scenario</b>
Imagine you have a changelog file with two changesets:
<b>Changeset 1</b>: Creates a <b>users</b> table.
<b>Changeset 2</b>: Adds an <b>email</b> column to the <b>users</b> table.
When you run <b>liquibase update</b> for the first time on an empty database:
Liquibase creates the <b>DATABASECHANGELOG</b> table.
It executes Changeset 1 and adds a row for it to the <b>DATABASECHANGELOG</b> table.
It executes Changeset 2 and adds a row for it to the <b>DATABASECHANGELOG</b> table.
If you run the <b>update</b> command again, Liquibase will see that both changesets already exist in the <b>DATABASECHANGELOG</b> table and will do nothing. This reliable tracking is fundamental to Liquibase's ability to manage database changes across different environments and development team members. 


<table>
    <thead>
      <tr>
        <th>Column</th>
        <th>Standard data type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>ID</strong></td>
        <td>VARCHAR(255)</td>
        <td>Value from the changeset <code>id</code> attribute. Part of the composite identifier (<code>id</code>, <code>author</code>, <code>filename</code>).</td>
      </tr>
      <tr>
        <td><strong>AUTHOR</strong></td>
        <td>VARCHAR(255)</td>
        <td>Value from the changeset <code>author</code> attribute. Part of the composite identifier.</td>
      </tr>
      <tr>
        <td><strong>FILENAME</strong></td>
        <td>VARCHAR(255)</td>
        <td>Path to the changelog that contains the changeset. Prefer a relative path for portability. The <code>logicalFilePath</code> attribute can also be used.</td>
      </tr>
      <tr>
        <td><strong>DATEEXECUTED</strong></td>
        <td>DATETIME</td>
        <td>Date/time when the changeset was executed. Used together with <code>ORDEREXECUTED</code> to determine rollback order.</td>
      </tr>
      <tr>
        <td><strong>ORDEREXECUTED</strong></td>
        <td>INT</td>
        <td>Numeric order of execution within a run. Ensures correct ordering even if timestamps have low resolution. Values are guaranteed to increase only within a single update run.</td>
      </tr>
      <tr>
        <td><strong>EXECTYPE</strong></td>
        <td>VARCHAR(10)</td>
        <td>How the changeset was executed: possible values include <code>EXECUTED</code>, <code>FAILED</code>, <code>SKIPPED</code>, <code>RERAN</code>, and <code>MARK_RAN</code>.</td>
      </tr>
      <tr>
        <td><strong>MD5SUM</strong></td>
        <td>VARCHAR(35)</td>
        <td>Checksum (MD5) of the changeset at the time it was executed. Liquibase uses this to detect unexpected modifications.</td>
      </tr>
      <tr>
        <td><strong>DESCRIPTION</strong></td>
        <td>VARCHAR(255)</td>
        <td>Auto-generated short, human-readable description of the changeset (e.g., "Create Table users").</td>
      </tr>
      <tr>
        <td><strong>COMMENTS</strong></td>
        <td>VARCHAR(255)</td>
        <td>Value from a changeset's <code>comment</code> attribute (if provided).</td>
      </tr>
      <tr>
        <td><strong>TAG</strong></td>
        <td>VARCHAR(255)</td>
        <td>Records tag names created by <code>liquibase tag</code>. Used for tag-based rollbacks.</td>
      </tr>
      <tr>
        <td><strong>LIQUIBASE</strong></td>
        <td>VARCHAR(20)</td>
        <td>Version of Liquibase used to execute the changeset (e.g., <code>4.29.2</code>).</td>
      </tr>
      <tr>
        <td><strong>CONTEXTS</strong></td>
        <td>VARCHAR(255)</td>
        <td>Contexts applied when executing the changeset (useful for environment-specific execution like <code>dev</code>, <code>prod</code>).</td>
      </tr>
      <tr>
        <td><strong>LABELS</strong></td>
        <td>VARCHAR(255)</td>
        <td>Labels used to select or filter changesets during execution.</td>
      </tr>
      <tr>
        <td><strong>DEPLOYMENT_ID</strong></td>
        <td>VARCHAR(10)</td>
        <td>Identifier assigned to all changesets executed in the same Liquibase run — useful to group a deployment batch.</td>
      </tr>
    </tbody>
  </table>

`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "liquibase.properties",
      note: [
        {
          text1: `A liquibase.properties file is a configuration file used by the Liquibase database change management tool. It is a simple key-value file that stores information needed to connect to and run operations against a database, such as connection details, driver classpath, and other properties. 
By using a liquibase.properties file, you can avoid repeatedly typing parameters on the command line, which saves time and reduces errors. For projects integrated with Maven or Spring Boot, the liquibase.properties file is often placed in the src/main/resources directory, where it is automatically picked up by Liquibase during execution. 

<b>Purpose</b>
-> Provides Liquibase with all required configuration for database migrations.
-> Can be used by the <b>Liquibase CLI, Maven plugin</b>, or <b>Gradle plugin</b>.
-> Avoids relying on Spring Boot’s <b>application.properties</b> when running Liquibase commands outside the app.
`,
          code1: `# Database connection
url=jdbc:postgresql://localhost:5432/testdb
username=postgres
password=123
driver=org.postgresql.Driver

# Changelog file
changeLogFile=src/main/resources/db/changelog/db.changelog-master.xml

# Optional settings
defaultSchemaName=public
logLevel=info

`
        }
      ]
    },
    {
      id: 1,
      title: "db.changelog-master.xml - (main or root changelog.)",
      note: [
        {
          text1: `This file (db.changelog-master.xml) acts like the “main script” — it controls and organizes all your versioned database changes.
          
          In Liquibase, the <b>db.changelog-master.xml</b> file is the main or "root" changelog. It serves as the starting point and blueprint for all database changes managed by Liquibase for an application. 
Instead of containing every database change directly, the master file typically acts as a hub that includes other, more granular changelog files using the &lt;include&gt; or &lt;includeAll&gt; tags. This approach helps keep your database changes organized, especially as projects grow in complexity. 

changeLogFile in liquibase.properties
The line:
changeLogFile=src/main/resources/db/changelog/db.changelog-master.xml
tells Liquibase <b>where your main changelog file is located.</b>

Liquibase will:
1) Read <b>liquibase.properties</b>
2) Find your <b>changeLogFile</b>
3) Open <b>db.changelog-master.xml</b>
4) Execute the included changelogs in order
  &nbsp;&nbsp; &nbsp; v1.0 → create <b>users</b> table
  &nbsp;&nbsp; &nbsp; v1.1 → create <b>posts</b> table
  &nbsp;&nbsp; &nbsp; v1.2 → add <b>created_at</b> column
5) Track all applied changes in the <b>DATABASECHANGELOG</b> table.
`,
          code1: `//db.changelog-master.xml
          &lt;databaseChangeLog
    xmlns=&quot;http://www.liquibase.org/xml/ns/dbchangelog&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xsi:schemaLocation=&quot;http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-4.18.xsd&quot;&gt;

    &lt;!-- Version 1.0 --&gt;
    &lt;include file=&quot;db/changelog/version/v1.0/create-users-table.xml&quot; /&gt;

    &lt;!-- Version 1.1 --&gt;
    &lt;include file=&quot;db/changelog/version/v1.1/add-posts-table.xml&quot; /&gt;

    &lt;!-- Version 1.2 --&gt;
    &lt;include file=&quot;db/changelog/version/v1.2/add-created-at-column.xml&quot; /&gt;

    &lt;!-- &lt;changeSet id=&quot;1&quot; author=&quot;anand&quot;&gt;
        &lt;createTable tableName=&quot;users&quot;&gt;
            &lt;column name=&quot;id&quot; type=&quot;SERIAL&quot;&gt;
                &lt;constraints primaryKey=&quot;true&quot;/&gt;
            &lt;/column&gt;
            &lt;column name=&quot;name&quot; type=&quot;VARCHAR(100)&quot;/&gt;
            &lt;column name=&quot;email&quot; type=&quot;VARCHAR(100)&quot;/&gt;
        &lt;/createTable&gt;
    &lt;/changeSet&gt; --&gt;
&lt;/databaseChangeLog&gt;
`
        }
      ]
    },
    {
      id: 1,
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
  ]
}





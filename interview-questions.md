# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What are props in React?

Your answer: "props are the wormhole and the items pass through"

Researched answer: props are arguments passed into react components via HTML attributes and props stand for properties. Props can be accessed as an entire object or destructered into separate variables. We can use the dot notation of this.props.whatever to gain access to the value of the props. We (I) used props on a light bulb challenge by passing a color to the component so you could have multiple light bulbs with independent colors.

2. What is a DOM event?

Your answer:

Researched answer: DOM events can be triggered with interactions with the UI. A DOM event is an object that is generally shortened to (e) as an argument. DOM events are notification of changes made by the user or in the browser. DOM events are the only way a user can interact with a web application. A time I used DOM events was using an onClick for Colorbox or the Lightbulb challenge.

3. What is object-oriented programming? How is it different than functional programming?

Your answer:

Researched answer: OOP is a computer programming model that organizes software around data and objects rather than functions and logic. FP uses immutable (unchangeable) data whereas OOP use mutable (changeable) data. OPP's main concpets are

- encapsualtion
- inheiritance
- polymorphism
- abstraction
  The concept that information is stored in objects. In OOP the main concepts are encapsulation meaning storage of information within an object, abstraction meaning only use the needed information within an object and nothing more, inheritance the passage of properties and methods to a child object, and polymorphism meaning a class/object can represent many things with the same configuration. OOP is based on objects while functional programming is based on functions. Objects store information while functions do not store information and depend only on the input arguments.

4. What is the difference between a Float and an Integer in Ruby?

Your answer:

Researched answer: Integers are WHole numbers that are positive negative and zero. Floats contains decimal points, can be rational (having a set number of decimal points ex 5.55) or irrational (having an infinite number of decimal points ex 3.33...)or can contain fractional parts. 

5. Ruby has an implicit return. What does that mean?

Your answer:

Researched answer: Ruby will return the last line of any method without explicitly stating the key word return. We used implicit returns in our text based game -- using the abort method when a player died and passing a message to be displayed. 

## Looking Ahead: Terms for Next Week

1. Instance Variable: is a type of variable that starts with the @ symbol. It is used in OOP to give objects their own private space to store data. That data will be accessible to the whole class. 

2. PostgreSQL: An open source DB system that supports relational and non-relational querying.

3. Ruby on Rails:  Rails is a server side Web application written in ruby. It provides structure for DB, web service and web pages

4. ORM: Object Relational Mapping is used to convert data from incompatible type systems using OOP. This creates a a virtual object DB that can be used within the language. Most DB such as SQL are not OOP and can only store Scaler Data which requires objects to be deconstructed and reconstructed to be used. 

5. Active Record: The M in MVC. The model which is layer is responsible presenting the buisness, data, and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database.
We use Active Record as a ORM for SQL queries. 

console.log("Creación de un objeto con propieadades");

const explorer = {
    name: "Kevin",
    age: 27,
    mission: "Node JS",
    stack: ["js", "node", "react", "vue"],
    blog:{
        url: "github.com/KevinChavarin/blog",
        posts: 5,
    }
};

console.log(explorer);

console.log("Accediendo a las propiedades del objeto");
console.log("Edad: ", explorer.age);
console.log(explorer["name"])

console.log("Ejemplo 3: Objeto con métodos");
const ajolonauta={
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function(){
        console.log("Soy el ajolonauta, qué onda");
    },
    tellMeMore: function(){
        return `Ajolonauta: ${this.name}`;
    }
}

console.log("Ajolonauta");
console.log(ajolonauta);
ajolonauta.sayHelloToExplorers();
console.log(ajolonauta.tellMeMore());
console.log("Examples 1");

const names=["Carlo", "Juan", "Pedro", "Pablo", "Jorge"];
console.log(names);

const explorers=[
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#",
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true,

            }
        }

    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        rate: 50,
        city: "Veracruz",
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false,
            },
            frontend:{
                isFinished: false,
                exercisesFinished: false
            }
        }

    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        rate: 100,
        city: "Sonora",
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true,

            }
        }

    },
]

console.log(explorers)

console.log("Ejercicio 2.1");
explorers.forEach(explorer => console.log(explorer.name))

console.log("Ejercicio 2.2");
explorers.forEach(item=>console.log(item.stack));

console.log("Ejercicio 2.3");
const explorers_stacks=explorers.map(item=>item.stack);
console.log(explorers_stacks);

console.log("Ejercicio 2.4");
const explorer_with_js=explorers.filter(item=>item.stack.includes("js"));
console.log(explorer_with_js);
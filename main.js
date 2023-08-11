// const ingD = {
//     name: "Dono",
//     age: 34,
//     approvedCourses: ["Curso 1"],
//     addCourse(newCourse){
//         this.approvedCourses.push(newCourse);
//     }
// };
//use properties Object
//console.log(Object.keys(ingD)); 
/*
0:"name"
1:"age"
2:"approvedCourses"
3:"addCourse"
length:4
*/
//console.log(Object.getOwnPropertyNames(ingD)); 
/*
0:"name"
1:"age"
2:"approvedCourses"
3:"addCourse"
length:4
*/
//console.log(Object.entries(ingD)); 
/*
0:(2) ['name', 'Dono']
1:(2) ['age', 34]
2:(2) ['approvedCourses', Array(1)]
3:(2) ['addCourse', ƒ]
length:4
*/

// console.log(Object.getOwnPropertyDescriptors(ingD));
/*
addCourse:{writable: true, enumerable: true, configurable: true, value: ƒ}
age:{value: 34, writable: true, enumerable: true, configurable: true}
approvedCourses:{value: Array(1), writable: true, enumerable: true, configurable: true}
name:{value: 'Dono', writable: true, enumerable: true, configurable: true}

*/
//para crear nuevas propiedades en el objeto
//no aparecerá en Object.keys , pero si en .getOwnPropertyNames
//puedo editarlo
// Object.defineProperty(ingD,"navigator", {
//     value: "Chrome",
//     writable: true, 
//     enumerable: false, 
//     configurable: true,
// });
//aparece en O.keys por enumerable
//pero no se edita , no actualiza los nuevos datos =
//pero si lo puedo borrar
// Object.defineProperty(ingD,"editor", {
//     value: "VSCode",
//     writable: false, 
//     enumerable: true, 
//     configurable: true,
// });
//puedo editarla  Y que aparezca en keys como en get...
//pero no dejará borrarla
// Object.defineProperty(ingD,"terminal", {
//     value: "WSL",
//     writable: true, 
//     enumerable: true, 
//     configurable: false,
// });
//no aparece en keys, no deja editar, y tampoco eliminar
// Object.defineProperty(ingD,"pruebaNasa", {
//     value: "extraterrestre",
//     writable: false, 
//     enumerable: false, 
//     configurable: false,
// });
//edita la propiedad a todos configurable:false
//no dejará borrar ninguna
// Object.seal(ingD);
//todas tendran congigurable:false y writable:false
//ni borrar ni editar
// Object.freeze(ingD);

// console.log(Object.getOwnPropertyDescriptors(ingD));

//object Copy

// const obj1={
//     a:"a",
//     b:"b",
//     c:{
//         d:"d",
//         e:"e",
//     },
//     editA() {
//         this.a = 'Abcd'
//     }
// }//afecta a "d y e" por la referencia

// const obj2 = {};
// solo funciona para un nivel
// for (prop in obj1){
//     obj2[prop] = obj1[prop]
// }

// const obj3 = Object.assign({},obj1);//lo mismo pero de un solo level

// const obj4 = Object.create(obj1);//apunta a objeto 1 Proto, las copias originales si afectan 
/*
{}
[[Prototype]]:Object
a:"a"
b:"b"
c:{d: 'd', e: 'e'}
*/

// -------------------------JSON
// const stringifyComplexObj = JSON.stringify(obj1);
//'{"a":"a","b":"b","c":{"d":"d","e":"e"}}'
// const obj2 = JSON.parse(stringifyComplexObj);
/*
a:"a"
b:"b"
c:{d: 'd', e: 'e'}
*/
//exepto cuando se trabaja con metodos, Parse no trabaja con metodos, nbo lo detecta y los omite


// function recursiva() {
//     if (/* Validacion */) {
//         //llamados recursivos
//     } else {
//         //llamados normales, sin recursividad
//     }
// }
// const numeritos=[0,1,2,3,4,5,5,6,7,8,923434,7,2,3]
// let numerito = 0;
// for(let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[index];
//     console.log({index,numerito});
// }

//con recursividad
// function recursiva(numbersArray) {
//     if (numbersArray.length != 0) {
//         //llamados recursivos
//         const firstNum = numbersArray[0];
//         console.log(firstNum);
//         numbersArray.shift();
//         recursiva(numbersArray);
//     }
// }

function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject= isObject(subject);
    const subjectIsArray= isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject){
        copySubject = {};
    }else {
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        }else{
            if (subjectIsArray){
                copySubject.push(subject[key]);
            }else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

// const juan = {
//     name: "Juanito",
//     approvedCourses: ["Curso 1","Curso 2"],
//     caracteristicas: {
//       age: 18,
//       colorCabello: 'Negro',
//       gustos: {
//         musica: ['rock', 'punk', 'ska'],
//         peliculas: ['drama', 'horros', 'comedia'],
//       },
//     },
//     addCourse(newCourse) {
//       console.log("This", this);
//       console.log("This.approvedCourses", this.approvedCourses);
//       this.approvedCourses.push(newCourse);
//     }
//   };

  function deepFreeze(obj) {
    if( typeof(obj)!=="object") return

    Object.freeze(obj); 

    for(let key in obj){
      deepFreeze(obj[key]) 
    }
}

//abstracción sin prototipos:
// const stundentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourse: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     },
// };

// const dono = deepCopy(stundentBase);
// Object.defineProperty(juan, "name",{
//     value: "Inge",
//     configurable:false,
// });
// Object.seal(dono);
// Object.isSealed(dono);//Boolean if configurate false?
// Object.isFrozen(dono);//Boolean if false?
// juan.name = "Inge";

function requiredParam(param) {
    throw new Error(param + " es Obligatorio");
}

function createlearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.lenght != 0) {
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre debe tener al menos un caracter");
            }
        },
        get courses() {
            return private["_courses"];
        },

    };
    return public;
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    approvedCourse = [],
    learningPaths = [],
    twitter,
    instagram,
    facebook,

    } = {} ) {
        const private = {
            "_name": name,
            "_learningPaths":learningPaths,

        };
        const public = {
            email,
            age,
            approvedCourse,
            // learningPaths,
            socialMedia: {
                twitter,
                instagram,
                facebook,
            },
            get name() {
                return private["_name"];
            },
            set name(newName) {
                if (newName.lenght != 0) {
                    private["_name"] = newName;
                }else{
                    console.warn("Tu nombre debe tener al menos un caracter");
                }
            },
            get learningPaths() {
                return private["_learningPaths"];
            },
            set learningPaths(newLP) {
                // AQUÍ empezamos a aplicar DUCK TYPING 👀🦆
                if(!newLP.name){
                    console.warn("Tu LP no tiene la propiedad Name");
                    return;
                }
                if (!newLP.courses){
                    console.warn("Tu LP no tiene courses");
                    return;
                }
                if (!isArray(newLP.courses)){
                    console.warn("Tu LP no es una lista (*de coursos)");
                    return;
                }
                // Si la nueva ruta de aprendizaje pasó por todas las validaciones
                // correctamente...Quiere decir que SÍ es una ruta válida tal como
                // la deseamos que fuese. Por tanto, procedemos a añadir ese Learning Path
                // a la lista de rutas del estudiante:
                private["_learningPaths"].push(newLP);
                
            },
            // readName(){
            //     return private["_name"];
            // },
            // changeName(newName){
            //     private["_name"] = newName;
            // },
        };

    // Object.defineProperty(public, "readName", {
    //     writable: false,
    //     configurable:false,
    // });
    // Object.changeName(public, "readName", {
    //     writable: false,
    //     configurable:false,
    // });

    return public;
}
const dono = createStudent({
    name: "ing",
    email: "ro@gm.co",
});

// Le asignamos al estudiante "juan" un ruta de aprendizaje:
// dono.learningPaths = "Nueva ruta de aprendizaje";
const ingD = {
    name: "Dono",
    age: 34,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};
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
Object.defineProperty(ingD,"navigator", {
    value: "Chrome",
    writable: true, 
    enumerable: false, 
    configurable: true,
});
//aparece en O.keys por enumerable
//pero no se edita , no actualiza los nuevos datos =
//pero si lo puedo borrar
Object.defineProperty(ingD,"editor", {
    value: "VSCode",
    writable: false, 
    enumerable: true, 
    configurable: true,
});
//puedo editarla  Y que aparezca en keys como en get...
//pero no dejará borrarla
Object.defineProperty(ingD,"terminal", {
    value: "WSL",
    writable: true, 
    enumerable: true, 
    configurable: false,
});
//no aparece en keys, no deja editar, y tampoco eliminar
Object.defineProperty(ingD,"pruebaNasa", {
    value: "extraterrestre",
    writable: false, 
    enumerable: false, 
    configurable: false,
});
//edita la propiedad a todos configurable:false
//no dejará borrar ninguna
// Object.seal(ingD);
//todas tendran congigurable:false y writable:false
//ni borrar ni editar
// Object.freeze(ingD);

// console.log(Object.getOwnPropertyDescriptors(ingD));

//object Copy

const obj1={
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e",
    }
}//afecta a "d y e" por la referencia

const obj2 = {};
// solo funciona para un nivel
for (prop in obj1){
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({},obj1);//lo mismo pero de un solo level

const obj4 = Object.create(obj1);//apunta a objeto 1 Proto, las copias originales si afectan 
/*
{}
[[Prototype]]:Object
a:"a"
b:"b"
c:{d: 'd', e: 'e'}
*/


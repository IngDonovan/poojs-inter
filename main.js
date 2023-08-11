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
  function deepFreeze(obj) {
    if( typeof(obj)!=="object") return

    Object.freeze(obj); 

    for(let key in obj){
      deepFreeze(obj[key]) 
    }
}


function requiredParam(param) {
    throw new Error(param + " es Obligatorio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;

    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // };

    // const public = {
    //     get name() {
    //         return private["_name"];
    //     },
    //     set name(newName) {
    //         if (newName.lenght != 0) {
    //             private["_name"] = newName;
    //         }else{
    //             console.warn("Tu nombre debe tener al menos un caracter");
    //         }
    //     },
    //     get courses() {
    //         return private["_courses"];
    //     },

    // };
    return public;
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    approvedCourse = [],
    learningPaths = [],
    twitter,
    instagram,
    facebook,

    } = {} ) {

        this.name = name;
        this.email = email;
        this.age = age;
        this.approvedCourse = approvedCourse;
        this.learningPaths = learningPaths;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }


    //     const private = {
    //         "_name": name,
    //         "_learningPaths":learningPaths,

    //     };
    //     const public = {
    //         email,
    //         age,
    //         approvedCourse,
    //         // learningPaths,
    //         socialMedia: {
    //             twitter,
    //             instagram,
    //             facebook,
    //         },
    //         get name() {
    //             return private["_name"];
    //         },
    //         set name(newName) {
    //             if (newName.lenght != 0) {
    //                 private["_name"] = newName;
    //             }else{
    //                 console.warn("Tu nombre debe tener al menos un caracter");
    //             }
    //         },
    //         get learningPaths() {
    //             return private["_learningPaths"];
    //         },
    //         set learningPaths(newLP) {
    //             // AQUÍ empezamos a aplicar DUCK TYPING 👀🦆
    //             if(!newLP.name){
    //                 console.warn("Tu LP no tiene la propiedad Name");
    //                 return;
    //             }
    //             if (!newLP.courses){
    //                 console.warn("Tu LP no tiene courses");
    //                 return;
    //             }
    //             if (!isArray(newLP.courses)){
    //                 console.warn("Tu LP no es una lista (*de coursos)");
    //                 return;
    //             }

    //             private["_learningPaths"].push(newLP);
                
    //         },

    //     };



    // return public;
}
const dono = new Student({
    name: "ing",
    email: "ro@gm.co",
});
// dono instanceof Student
// true

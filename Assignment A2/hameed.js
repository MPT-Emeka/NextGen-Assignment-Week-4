// Using the function object boy to show some OOP principles
function boy(name){
    // Here these properties were encapsulated to make them private.
    let School = "Nile University";
    let account = "Zenith Bank Tech Bro Domiciliary account"
    let course = "Computer Science"

    return {
        tribe: "Yoruba",
        location: "Abuja",
        occupation: "program manager",
        credentials: {
            name: name,
            School: School,
            course: course,
            account: account
        },
        apply: function(){
            return ` to Seamfix for the ${this.occupation} position`
        },
        hameedFriends: function(friends){ 
            if(friends === "James and John"){
                return "his two friends James and John are also students of nile university. "
            }
            else {
                return " He is a student of Nile University"
            }
        },
        modelHameed: function (){
            return `${name} is a ${this.tribe} boy, living in ${this.location}, 
            ${this.hameedFriends()}, studying ${course}, ${this.hameedFriends("James and John")}
            Hameed wants to send his credentials: ${this.credentials} ${this.apply()}`
        }
    }
} 
let test = new boy("Hameed")
console.log(test.modelHameed()); // Here with OOP inheritance, the test variable can call the .modelHameed() function belonging to boy.
console.log(test.credentials)       // Also with OOP abstraction, the modelHameed function is abstracted from the function boy, 
                                    // we don't know what the underlying code does or the properties it uses, 
                                    // but gives it gives a comprehensible output to the end user. 



// Below the OOP principle of polymorphism was used to change the .apply() function
// The place where Hameed's friend James wants to apply is Nextgen. 
let test2 = function (name){
    let james = boy.call(this, name)
    james.apply = function(){
        console.log(`James wants to apply to NextGen for the ${this.occupation} position`)
    }
    return james
}

let newTest = new test2("James")
newTest.apply();





// Using the plain object boy to show abstraction. 
//     const boy = {  
//     name: "Hameed",
//     tribe: "yoruba",
//     occupation: function(){
//         return "Computer Science student at Nile University"
//     },
//     friends: ["John", "James"],
//     apply: function (){
//         return "Seamfix program manager"
//     },
//     createAcct: function(){
//         return "Open a Domiciliary account with Zenith Bank for his tech bro salary"
//     },
//     modelHameed: function(){
//         return (`${this.name} is a ${this.tribe} boy, who is a ${this.occupation()}
//         his friends ${this.friends[0]} and ${this.friends[1]} are also students of Nile university. He wants 
//         to apply as a ${this.apply()}. After which he will ${this.createAcct()}.`)
//     }
// }
//    console.log(boy.modelHameed()) // Here with the OOP concept of Abstraction, we don't know what 
                            // happens when we call the modelHameed method. All we want to see is 
                            // a description of the Hameed model. 
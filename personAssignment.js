const moment = require('moment')
let { AgeFromDateString } = require('age-calculator');

function Person(myName){
    validatePerson = () => {
        if(typeof(myName) === "string"){
            return true;
        }
        else {
            return false;
        }
    }
    return {
        setName: function(){
            if(validatePerson()){
                console.log(myName);
            }
            else {
                console.log("Be like say you be Bot");
            }
        },
        height: "173 cm",
        occupation: "student",
        getAge: function (dateOfBirth) 
        {
            let EditedDob = moment(dateOfBirth, "DD-MM-YYYY").format('YYYY-MM-DD')
            let ageFromString = new AgeFromDateString(EditedDob).age;
            console.log(ageFromString)
        }
    }
}
function School (myName){
   return Person.call(this, myName)
}

let mySchool = new School("Nextgen Student")

console.log(mySchool)
mySchool.getAge("21-04-2004"); // sample date of birth 
mySchool.setName();

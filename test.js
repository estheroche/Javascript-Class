// create a function that accept the ffg parameter
//and builds an object from the parameter recieved
// a. name
//b. location
//c.gender
//d. month
//e.date-of-birth
//state-of-origin


function assignment(myName, myLocation, myGender, theMonth, DOB, SOF) {
    const person  = {
        "name":myName,
        "location": myLocation,
        "gender": myGender,
        "month": theMonth,
        "Date-of-birth":DOB,
        "state-of-origin": SOF  
    }
   console.log(person);
    
}
assignment("Ego", "Lagos", "female", "April", 7, "Lagos");
assignment("Esther", "Kaduna", "Male", "October", 10, "Kano");
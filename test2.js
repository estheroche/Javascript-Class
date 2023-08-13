//given a array of persons: ekoh,tola, mitong
// build a profile for each person
// the profile for each person
// the profile should include their name, occupation, gender, and stae
//write one function that impliments this solution

   const Student = ["ekoh", "tola", "mitong"]

function students(myName, myGender, myOccupation, myState){
    const persons =  {
        "name": myName,
        "Gender": myGender,
        "occupation": myOccupation,
        "State": myState,
       
        }
        console.log(persons); 
    }
      
students(Student[0], 8, "Male", "Mechanic", "Kano");
students(Student[1], 8, "Male", "Mechanic", "Kano");
students(Student[2], 8, "Male", "Mechanic", "Kano");
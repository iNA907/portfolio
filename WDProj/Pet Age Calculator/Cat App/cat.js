function calculate(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value; 
    
    if(age <= 1){
        catYears = 15;
    }
    if(age >= 2 && age <= 5){
        catYears = (age - 2) * 4 + 24;
    }
    if(age >= 6 && age <= 10){
        catYears = (age - 2) * 4 + 26;
    }
    if(age >= 11 && age <= 16){
        catYears = (age - 2) * 4 + 30;
    }
    else if (age > 16){
        catYears = "over 90";
    }

    if (age == "" || name == ""){
        alert ("Please fill in all fields correctly!");
    }
    else if(age <= 0){
        alert (name + " isn't born yet!");
    }
    else{
        alert(name + " is " + catYears + " years old!");
    }
}
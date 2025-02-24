function calculate(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value; 

    if(age <= 1){
        dogYears = 15;
    }
    if(age >=2 && age <= 10){
        dogYears = (age-2) * 4 + 24;
    }
    if(age >= 11 && age <= 20){
        dogYears = Math.floor(16 * Math.log(age) + 35);
    }
    else if (age > 20){
        dogYears = "over 100";
    }

    if (age == "" || name == ""){
        alert ("Please fill in all fields correctly!");
    }
    else if(age <= 0){
        alert (name + " isn't born yet!");
    }
    else{
        alert(name + " is " + dogYears + " years old!");
    }
}
// Practice Question # 20
//You are creating a website for your college. Create a class User with 2 properties, name & email. It also
//a method called viewData() that allow user to view website data 
console.log("Question No. 20");

let data = "Website Data";
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(data);
    }
}
let std1 = new user("owais", "owais@gamil.com");

// Practice Question # 21
//Create a new class called Admin which inherit from user. Add new method called editData to Admin that allow 
//it to edit the Data 
console.log("Question No. 21");

class admin extends user {
    editData() {
        data = "change the data";
    }
}

let admin1 = new admin("rana", "rana@gmail.com");
let admin2 =  new admin("kan", "khan@gmail.com")

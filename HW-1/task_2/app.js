let userInfo = {
  name: "Evgeniy",
  surname: "Kiselev",
}

let userSurname = prompt("User Surname");
let userName = prompt("User Name");

userInfo.name = userName;
userInfo.surname = userSurname.slice(0,1);

console.log(userInfo.name + "." + userInfo.surname);


let password = prompt("enter your passowrd");
if (password === "geolabreact123") {
  console.log("წვდომა დაშვებულია");
} else {
  console.log("წვდომა აკრძალულია");
}
let sum = 0;
for (let i = 0; i <= 20; i += 2) {
  sum += i;
}
console.log(sum);
let userChoice = prompt(
  "აირჩიე ოპერაცია:\n1 - შეამოწმე ბალანსი\n2 - შეტანა\n3 - გატანა\n4 - გამოსვლა"
);
let balance = 1000;
switch (userChoice) {
    case "1":
    alert("ბალანსი:" + balance);
    break;
  case "2":
    depositAmount = Number(prompt("შეიყვანეთ დასამატებელი თანხა:"));
    balance += depositAmount;
    alert("განახლებული ბალანსი: " + balance);
    break;
  case "3":
    let withdrawAmount = Number(prompt("შეიყვანეთ გამოსატანი თანხა:"));
    balance -= withdrawAmount;
    alert("განახლებული ბალანსი:" + balance);
  case "4":
    let userResponse = confirm("are you sure you want exit");
    break;     
}

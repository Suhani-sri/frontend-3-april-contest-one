let AddOne = document.getElementById("add-user");
let datarray = [];

function AddUser(name , profession , age)
{
  if(name == "" || profession == "" || age == "")
  {
    
    document.getElementById("errorOne").innerText = "Error : Please Make sure All the fields are filled before adding in an employee !";
  }
  else
  {
     let UserObject = {
         name: name, 
         profession : profession,
         age: age,
     }
    datarray.push(UserObject)
    datarray.forEach((item , i) => {
        item.id = i+1;
    })
    console.log(datarray)
    document.getElementById("errorOne").innerHTML = "<p>Success : Employee Added!</p>"
    let echart = datarray.map((item) => 
     document.getElementById("eChart").innerHTML = 
   `<div class = "inner-e">
   <div class = "inner-con">
    <div class = "inner-id">${item.id}.</div>
    <div class = "inner-id">Name:${item.name}</div>
    <div class = "inner-id">Prefession:${item.profession}</div>
    <div class = "inner-id">Age:${item.age}</div>
    </div>
    <div class = "inner-button"><button id = "delete-btn">delete</button></div>
   </div>`
    )
  document.getElementById("eChart").innerHTML = echart.join(" ");
  let deletefun = document.getElementById("delete-btn");
  deletefun.addEventListener("click" , () => {
   console.log("delete");
  })
  }
}
AddOne.addEventListener("click" , (event) => {
    event.preventDefault();
   let name = document.getElementById("name-input").value;
   let profession = document.getElementById("pro-input").value;
   let age = document.getElementById("age-input").value;
   AddUser(name , profession , age);
})
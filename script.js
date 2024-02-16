let item = document.querySelector(".finaldata");
let form = document.querySelector("form");


form.addEventListener("submit", handlesubnmit);


function handlesubnmit(e) {
    e.preventDefault();

    let name = e.target.uname;
    let email = e.target.email;
    let phone = e.target.phone;
    let flag = false;

    let userdetail = JSON.parse(localStorage.getItem("userdetail")) ?? []

    for (let val of userdetail) {
        if (email.value === val.data.email || phone.value === val.data.phone) {
            flag = true;
            break;
        }
        else{
            flag = false;
        }
    }

    if (flag === true) {
        alert(" enter email and phone already exits")
    }
    else {
        userdetail.push(
            { "data": { "name": `${name.value}`, "email": `${email.value}`, "phone": `${phone.value}` } }
        )

        let strjson = JSON.stringify(userdetail);

        localStorage.setItem("userdetail", strjson);
        e.target.reset();

    }
    createitem()
}

function createitem() {
    let userdetail = JSON.parse(localStorage.getItem("userdetail")) ?? [];
    let finaldata = "";

    userdetail.forEach((element, i) => {
        console.log(element);
        finaldata += `
        <div class="item" style="display:inline-block; border: 1px solid black; width: 250px; height: 280px; margin:20px 20px;">
        <h3>Name</h3>
        <p>${element.data.name}</p>
  
        <h3>Email</h3>
        <p>${element.data.email}</p>
  
        <h3>Phone</h3>
        <p>${element.data.phone}</p>
        
        <button onclick='removeelment(${i})'>Delete</button>
      </div>
        `

        item.innerHTML = finaldata;
    })

    // console.log(JSON.parse(localStorage.getItem()))
}



let removeelment = (index) => {
    let userdetail = JSON.parse(localStorage.getItem("userdetail")) ?? [];

    userdetail.splice(index, 1);

    localStorage.setItem("userdetail", JSON.stringify(userdetail));

    console.log(localStorage.setItem("userdetail", JSON.stringify(userdetail)));

    createitem();
}
createitem();


// let jsonobj = {"data":{"name":`${name.value}`,"email":`${email.value}`,"phone":`${phone.value}`}}
// let str = JSON.stringify(jsonobj.data);
// localStorage.setItem("name",str);

// console.log(JSON.parse(localStorage.getItem("name")));
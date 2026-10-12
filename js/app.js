const customer = JSON.parse(localStorage.getItem("customer")) || [];

function getData(){
    return {
        "id" : document.getElementById("txtid").value,
        "name" : document.getElementById("txtname").value,
        "age" : document.getElementById("txtage").value,
        "address" : document.getElementById("txtaddress").value
    };
}

function btnAddCustomerOnAction() {
    if (getData().id == "" || getData().name == "" || getData().age == "" || getData().address == "") {
        alert("Please input data");
    }else{
        customer.push(getData());
        localStorage.setItem("customer",JSON.stringify((customer)));
    }
    btnLoadTableOnAction();
    
}
function btnSearchCustomerOnAction() {
    
    customer.find(element => {
        if (element.id != getData().id) {
            document.getElementById("txtid").value=element.id;
            document.getElementById("txtname").value=element.name;
            document.getElementById("txtage").value=element.age;
            document.getElementById("txtaddress").value=element.address;
        }else{
            alert("Customer Not Found");
        }
    });
    
}
function btnDeleteCustomerOnAction() {
    const filteredCustomers = customer.filter(element => element.id != getData().id);
    localStorage.setItem("customer",JSON.stringify((filteredCustomers)));
    btnLoadTableOnAction();
    alert("Customer Deleted");
}
function btnUpdateCustomerOnAction() {
    customer.find(element => {
        if (element.id === getData().id) {
            element.id = document.getElementById("txtid").value;
            element.name = document.getElementById("txtname").value;
            element.age = document.getElementById("txtage").value;
            element.address = document.getElementById("txtaddress").value;
        }
    });
    localStorage.setItem("customer",JSON.stringify((customer)));
    btnLoadTableOnAction();
    alert("Customer Updated");
}
function btnClearStorageOnAction() {
    localStorage.clear();
    customer = [];
}
function btnLoadTableOnAction() {
    let body ="";
    customer.forEach(element => {
        body +=`
            
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.address}</td>
            </tr>    
        `
           
    }); 
        document.getElementById("tblCustomer").innerHTML=body;
}
btnLoadTableOnAction();
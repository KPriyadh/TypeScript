//Auto--Increment Variables
// let medicineIdAutoIncrement = 2000;
// let userIDAutoIncrement = 1000;
// let orderIDAutoIncrement = 3000;

// Current Logged in User Details
let CurrentorderID: string;
let CurrentuserName: string;
let CurrentUserWalletBalance: number;
let user: UserInfo;

//Acessing Medicine Details table body from HTML
const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
const ctablebody = document.querySelector("#canceltable tbody") as HTMLTableSectionElement;
const ptablebody = document.querySelector("#purchasetable tbody") as HTMLTableSectionElement;
const tabelBody2 = document.querySelector("#data1 tbody") as HTMLTableSectionElement;
const tabelBody3 = document.querySelector("#data2 tbody") as HTMLTableSectionElement;


//User Details Class
interface UserInfo {
    //Fields
    userID: number;
    userName: string;
    userPassword: string;
    userPhone: string;
    userWalletBalance: number;

    //Parameterised Constructor

}//Class


//Medicine Details Class
interface MedicineInfo {
    //Fields
    medicineId: number;
    medicineName: string;
    medicineCount: number;
    medicinePrice: number;
    expiryDate: string;
    
}//Class


//Order Details Class
interface OrderInfo {
    //Fields
    orderID: number;
    userID: number;
    medicineId: number;
    medicineName: string;
    MedicineQuantity: number;
    medicinePrice:number;
    orderStatus: string;
    

    //Constructor
   
}


async function addUser(user:UserInfo) : Promise<void> {
    const response = await fetch('http://localhost:5190/api/UserInfo' ,{
       method: 'POST',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(user)
       });
       if(!response.ok){
        throw new Error('Failed to add user');
       }
}

async function addMedicine(medicine:MedicineInfo) : Promise<void> {
    const response = await fetch('http://localhost:5190/api/MedicineInfo' ,{
       method: 'POST',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(medicine)
       });
       if(!response.ok){
        throw new Error('Failed to add medicine');
       }
}

async function addOrder(order:OrderInfo) : Promise<void> {
    const response = await fetch('http://localhost:5190/api/OrderInfo' ,{
       method: 'POST',
       headers:{
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(order)
       });
       if(!response.ok){
        throw new Error('Failed to add order');
       }
}

async function updateMedicine(id: number, medicine:MedicineInfo) : Promise<void>{
    const response = await fetch('http://localhost:5190/api/MedicineInfo' ,{
        method: 'PUT',
        headers:{
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
        });
        if(!response.ok){
         throw new Error('Failed to update medicine');
        }
}

async function updateOrder(id: number, order:OrderInfo) : Promise<void>{
    const response = await fetch('http://localhost:5190/api/OrderInfo' ,{
        method: 'PUT',
        headers:{
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
       
        });
        if(!response.ok){
         throw new Error('Failed to delete medicine');
        }
}

async function deleteMedicine(id:number): Promise<void>{
    const response = await fetch('http://localhost:5190/api/MedicineInfo' ,{
        method: 'DELETE',
        
        });
        if(!response.ok){
         throw new Error('Failed to delete medicine');
        }
}

async function fetchUser(): Promise<UserInfo[]>{
    const apiUrl = 'http://localhost:5190/api/UserInfo';
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch User');
    }
    return await response.json();
}

async function fetchMedicine(): Promise<MedicineInfo[]>{
    const apiUrl = 'http://localhost:5190/api/MedicineInfo';
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch Medicine');
    }
    return await response.json();
}

async function fetchOrder(): Promise<OrderInfo[]>{
    const apiUrl = 'http://localhost:5190/api/orderinfo';
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch Order');
    }
    return await response.json();
}

// FormData.addEventListener("submit" , (event) => {
//     const editingId 
//     const password
//     const name 
//     const phone
//     const balance
    
    
//     if(editingId !== 0 ){
//         const user: UserInfo = {
//             userID: editingId,
//             userName: name,
//             userPassword: password, 
//             userPhone: phone,
//             userWalletBalance: balance

//         };
//         updateMedicine(editingId, name,password,phone,balance);
//     }
//     else{
//         const user: UserInfo = {
//             userID: -1,
//             userName:name,
//             userPassword: password, 
//             userPhone: phone,
//             userWalletBalance: balance
            
//         }
//     }
    
// })


 //${contact.dob.split('T)[0].split('-').reverse().join('/') }  



// let userList: Array<UserInfo> = new Array<UserInfo>();

// userList.push(new UserInfo("Priya", "pswd1", "9789011226", 1000));
// userList.push(new UserInfo("Sai", "pswd1", "9445153060", 500));

// let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

// MedicineList.push(new MedicineInfo("Paracetomol", 5, 50,"29/05/2025"));
// MedicineList.push(new MedicineInfo("Colpal", 5, 60,"20/04/2025"));
// MedicineList.push(new MedicineInfo("Stepsil", 5, 70,"15/03/2025"));
// MedicineList.push(new MedicineInfo("Iodex", 5, 80,"30/04/2025"));
// MedicineList.push(new MedicineInfo("Acetherol", 5, 100,"29/06/2025"));

// let orderList: Array<OrderInfo> = new Array<OrderInfo>();

// Sign in
async function signIn() {
    let noExistinguserIDChecker: boolean = false;
    let existinguserID = (document.getElementById('existinguserID') as HTMLInputElement).value;

    let existinguserIDRegex = /^UID\d{4}$/;

    if (existinguserIDRegex.test(existinguserID)) {
        const userList = await fetchUser();

        for (let i = 0; i < userList.length; i++) {
        
            if (userList[i].userID == +existinguserID) {

                user = userList[i];

                // medicinePage();
                alert("Login Successful");
                (document.getElementById("menu") as HTMLDivElement).style.display="block";

                return;
            }
            else {
                noExistinguserIDChecker = true;
            }
        }

        if (noExistinguserIDChecker) {
            alert("Enter Valid User Id nest in");
        }
    }
    else {
        alert("Enter Valid User Id out.");
    } 
}


// Top Up Tab
function walletRecharge() {
    const RechargeAmount = (document.getElementById("rechargeamount") as HTMLInputElement).value;
    let ramount = +RechargeAmount;
    user.userWalletBalance += ramount;
    alert("Your Current Wallet Balance is: "+user.userWalletBalance);
}
function up(){
    let top = (document.getElementById("top") as HTMLDivElement).style.display="block";
}

// Show Balance Tab
function ShowBalance() {
    (document.getElementById("blc") as HTMLDivElement).innerHTML="Your Balance is " +user.userWalletBalance;
    (document.getElementById("blc") as HTMLDivElement).style.display="block";
    alert("Your Wallet Balance is: "+user.userWalletBalance);
}
async function Check(){
    (document.getElementById("medicine") as HTMLDivElement).style.display="block";
    let med = (document.getElementById("select") as HTMLSelectElement);
    let medicine = med[med.selectedIndex].innerHTML;
    let medcheck = (document.getElementById("check") as HTMLLabelElement);
    const medicineList = await fetchMedicine();
    for(let i=0; i<medicineList.length;i++){
        if(medicineList[i].medicineName==medicine){
            medcheck.innerHTML = `Medicine ID: ${medicineList[i].medicineId} || Medicine Name: ${medicineList[i].medicineName} || Medicine Count: ${medicineList[i].medicineCount} || Medicine Price: ${medicineList[i].medicinePrice} || Expiry Date: ${medicineList[i].expiryDate}`;
            displayMedicine();
        }
    }
}

function displayMedicine(){
    
    (document.getElementById("quantity") as HTMLLabelElement).style.display="block";

}







async function showHistory() {
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";

    let orderCount: number = 0;
    historyDisplay.innerHTML = "<h3>Order History</h3>";
    const orderList = await fetchOrder();
    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].userID == user.userID) {
            historyDisplay.innerHTML += `You buyed ${orderList[i].MedicineQuantity} ${orderList[i].medicineName}<br>`;
            orderCount++;
        }
    }

    if (orderCount == 0) {
        historyDisplay.innerHTML += "Order History is empty.<br>";
    }
}

function home(){
    let welcome = (document.getElementById("welcome") as HTMLDivElement).style.display="block";
}


    
    

async function purchase(){
    let proceed:boolean  = true;
    let finalCount : number = 0;
    let medName = (document.getElementById("mednam") as HTMLInputElement).value;
    let medquan = (document.getElementById("quan") as HTMLInputElement).value;
    alert(medquan);
    alert(medName);
    let newPrice: number =0;
    let regxm = /^\d{1,3}$/;
    const medicineList = await fetchMedicine();
    if(regxm.test(medquan) && +medquan>0){
        for(let i=0; i<medicineList.length;i++){
            if(medicineList[i].medicineName==medName){
                if(medicineList[i].medicineCount>0){
                    if(medicineList[i].medicineCount>+medquan){
                        newPrice+= +medquan*medicineList[i].medicinePrice;
                        if(user.userWalletBalance>newPrice){
                            medicineList[i].medicineCount -= +medquan;
                            user.userWalletBalance -= +newPrice;
                            const orderList = await fetchOrder();
                            const order: OrderInfo = {
                                orderID: 1003,
                                userID: user.userID,
                                medicineId: medicineList[i].medicineId,
                                medicineName: medicineList[i].medicineName,
                                MedicineQuantity: +medquan,
                                medicinePrice: newPrice,
                                orderStatus: "ordered"
                            }
                            addOrder(order);
                           // orderList.push(new OrderInfo(user.userID, medicineList[i].medicineId,medicineList[i].medicineName,+medquan,newPrice,"ordered"));
                            alert("Purchased Successfully");
                        }                       
                    }
                    
                }                
            }
        }
    }
}
function sign(){
    (document.getElementById("signup") as HTMLDivElement).style.display="block";

}
function log(){
    (document.getElementById("existingUserPage") as HTMLDivElement).style.display="block";

}
async function SignUp(){
    
    let newName = (document.getElementById("userName") as HTMLInputElement).value;
    let newEmail = (document.getElementById("email") as HTMLInputElement).value;
    let newPhone = (document.getElementById("phone") as HTMLInputElement).value;
    let newPassword = (document.getElementById("password") as HTMLInputElement).value;
    let newConfirmPassword = (document.getElementById("cpassword") as HTMLInputElement).value;
    let newBalance = (document.getElementById("balance") as HTMLInputElement).value;
    const userList = await fetchUser();

    //userList.push(new UserInfo(newName,newPassword,newPhone,+newBalance));

    const user: UserInfo = {
        userID: 1003,
        userName: newName,
        userPassword: newPassword,
        userPhone: newPhone,
        userWalletBalance: +newBalance

    }
    addUser(user);
    alert("pushed");
    for(let i=0;i<userList.length;i++){
        alert(userList[i].userName);
    }
    (document.getElementById("existingUserPage") as HTMLDivElement).style.display="block";
}

// Medicine Details Tab
const  ShowMed = async () => {
    (document.getElementById("meddetails") as HTMLDivElement).style.display="block";
    tableBody.innerHTML = "";
    const MedicineList = await fetchMedicine();
    MedicineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.medicineName}</td>
        <td>${item.medicineCount}</td>
        <td>${item.medicinePrice}</td>
        <td><button onclick="edit(${item.medicineId})">Edit</button>
          <button onclick="delete(${item.medicineId})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
};


async function order  (){
    (document.getElementById("tab") as HTMLDivElement).style.display="block";
    tabelBody2.innerHTML = "";
    const orderList = await fetchOrder();
    orderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${item.orderID}</td>
        <td>${item.medicineId}</td>
        <td>${item.medicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.orderStatus}</td>`;
        tabelBody2.appendChild(row);

    });

};
 async function delord   () {
    (document.getElementById("canbuttondetails") as HTMLDivElement).style.display="block";
    tabelBody3.innerHTML = "";
    const orderList = await fetchOrder();
    orderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${item.orderID}</td>
        <td>${item.medicineId}</td>
        <td>${item.medicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.orderStatus}</td>`;
        
        tabelBody3.appendChild(row);

    });

};

async function CancelTable  () {
    
    (document.getElementById("cancdetails") as HTMLDivElement).style.display="block";
    ctablebody.innerHTML = "";
    const orderList = await fetchOrder();
    orderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${item.orderID}</td>
        <td>${item.medicineId}</td>
        <td>${item.medicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.orderStatus}</td>
        <td>
          
          <button onclick="Cancel(${item.orderID})">Cancel</button>
        </td>`;
        ctablebody.appendChild(row);

    });
    alert("uff");
    
};
async function Cancel(id:number){
    const orderList = await fetchOrder();
    for(let i=0;i<orderList.length;i++){
        
        orderList[i].orderStatus=="cancelled";
    }
}

async function  PurchaseTable () {
    (document.getElementById("purdetails") as HTMLDivElement).style.display="block";
    ptablebody.innerHTML = "";
    const medicineList = await fetchMedicine();
    medicineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.medicineName}</td>
        <td>${item.medicineCount}</td>
        <td>${item.medicinePrice}</td>
        <td>
          
          <button onclick="Buy(${item.medicineId})">Buy</button>
        </td>`;
      
      ptablebody.appendChild(row);
    });
};

async function  Buy   (id: number)  {
    const medicineList = await fetchMedicine();
   
    medicineList.filter((item) => item.medicineId!== id);
    displayMedicine();
    
};
async function  cancel  (id:number){
    const orderList = await fetchOrder();
    orderList.filter((item) => item.orderID!==id);{
       
}
};






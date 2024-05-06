//Auto--Increment Variables
let MedicineIdAutoIncrement = 10;
let UserIdAutoIncrement = 1000;
let OrderIdAutoIncrement = 100;

//Current Logged in User Details
// let CurrentUserId: string;
// let CurrentUserName: string;
// let CurrentUserWalletBalance: number;
let user: UserInfo;

//Acessing Medicine Details table body from HTML
const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
const ctablebody = document.querySelector("#canceltable tbody") as HTMLTableSectionElement;
const ptablebody = document.querySelector("#purchasetable tbody") as HTMLTableSectionElement;
const tabelBody2 = document.querySelector("#data1 tbody") as HTMLTableSectionElement;
const tabelBody3 = document.querySelector("#data2 tbody") as HTMLTableSectionElement;


//User Details Class
class UserInfo {
    //Fields
    UserId: string;
    UserName: string;
    UserPassword: string;
    UserPhone: string;
    UserWalletBalance: number;

    //Parameterised Constructor
    constructor(paramUserName: string, paramUserPassword: string, paramUserPhone: string, paramWalletBalance: number)
    {
        UserIdAutoIncrement++;
        this.UserId = "UID" + UserIdAutoIncrement;
        this.UserName = paramUserName;
        this.UserPassword = paramUserPassword;
        this.UserPhone = paramUserPhone;
        this.UserWalletBalance = paramWalletBalance;

    }//Cpnstructor
}//Class


//Medicine Details Class
class MedicineInfo {
    //Fields
    MedicineId: number;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;
    ExpiryDate: string;
    //Parameterised Constructor
    constructor(paramMedicineName: string, paramMedicineCount: number, paraMedicinePrice: number, paramExpiryDate: string) {
        MedicineIdAutoIncrement++;
        this.MedicineId = MedicineIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paraMedicinePrice;
        this.ExpiryDate = paramExpiryDate;
    }//Constructor
}//Class


//Order Details Class
class OrderInfo {
    //Fields
    OrderId: number;
    UserId: string;
    MedicineId: number;
    MedicineName: string;
    MedicineQuantity: number;
    MedicinePrice:number;
    OrderStatus: string;
    

    //Constructor
    constructor(userId:string, medicineId: number,paramMedicineName: string,paramMedicineQuantity: number, paramMedicinePrice: number, orderStatus:string) {
        OrderIdAutoIncrement++;
        this.OrderId = OrderIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.UserId = userId;
        this.MedicineId = medicineId;
        this.MedicineQuantity = paramMedicineQuantity;
        this.MedicinePrice = paramMedicinePrice;
        this.OrderStatus = orderStatus;
        
    }
}


let userList: Array<UserInfo> = new Array<UserInfo>();

userList.push(new UserInfo("Priya", "pswd1", "9789011226", 1000));
userList.push(new UserInfo("Sai", "pswd1", "9445153060", 500));

let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

MedicineList.push(new MedicineInfo("Paracetomol", 5, 50,"29/05/2025"));
MedicineList.push(new MedicineInfo("Colpal", 5, 60,"20/04/2025"));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70,"15/03/2025"));
MedicineList.push(new MedicineInfo("Iodex", 5, 80,"30/04/2025"));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100,"29/06/2025"));

let orderList: Array<OrderInfo> = new Array<OrderInfo>();

// Sign in
function signIn() {
    let noExistingUserIdChecker: boolean = false;
    let existingUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;

    let existingUserIdRegex = /^UID\d{4}$/;

    if (existingUserIdRegex.test(existingUserId)) {

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].UserId == existingUserId) {

                // CurrentLoggedinUser.UserId = UserArrayList[i].UserId;
                // CurrentLoggedinUser.UserName = UserArrayList[i].UserName;
                // CurrentLoggedinUser.UserWalletBalance = UserArrayList[i].UserWalletBalance;
                user = userList[i];

                // medicinePage();
                alert("Login Successful");
                (document.getElementById("menu") as HTMLDivElement).style.display="block";

                return;
            }
            else {
                noExistingUserIdChecker = true;
            }
        }

        if (noExistingUserIdChecker) {
            alert("Enter Valid User Id nest in");
        }
    }
    else {
        alert("Enter Valid User Id out.");
    } 
}



// // Medicine Details Tab
// const ShowMed=()=>{
//     tableBody.innerHTML = "";
//     MedicineList.forEach((item) => {
//       const row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${item.MedicineName}</td>
//         <td>${item.MedicineCount}</td>
//         <td>${item.MedicinePrice}</td>
//       `;
//       tableBody.appendChild(row);
//     });
// };


// Top Up Tab
function walletRecharge() {
    const RechargeAmount = (document.getElementById("rechargeamount") as HTMLInputElement).value;
    let ramount = +RechargeAmount;
    user.UserWalletBalance += ramount;
    alert("Your Current Wallet Balance is: "+user.UserWalletBalance);
}
function up(){
    let top = (document.getElementById("top") as HTMLDivElement).style.display="block";
}

// Show Balance Tab
function ShowBalance() {
    (document.getElementById("blc") as HTMLDivElement).innerHTML="Your Balance is " +user.UserWalletBalance;
    (document.getElementById("blc") as HTMLDivElement).style.display="block";
    alert("Your Wallet Balance is: "+user.UserWalletBalance);
}
function Check(){
    (document.getElementById("medicine") as HTMLDivElement).style.display="block";
    let med = (document.getElementById("select") as HTMLSelectElement);
    let medicine = med[med.selectedIndex].innerHTML;
    let medcheck = (document.getElementById("check") as HTMLLabelElement);
    for(let i=0; i<MedicineList.length;i++){
        if(MedicineList[i].MedicineName==medicine){
            medcheck.innerHTML = `Medicine ID: ${MedicineList[i].MedicineId} || Medicine Name: ${MedicineList[i].MedicineName} || Medicine Count: ${MedicineList[i].MedicineCount} || Medicine Price: ${MedicineList[i].MedicinePrice} || Expiry Date: ${MedicineList[i].ExpiryDate}`;
            displayMedicine();
        }
    }
}

function displayMedicine(){
    
    (document.getElementById("quantity") as HTMLLabelElement).style.display="block";

}







function showHistory() {
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";

    let orderCount: number = 0;
    historyDisplay.innerHTML = "<h3>Order History</h3>";

    for (let i = 0; i < orderList.length; i++) {
        if (orderList[i].UserId == user.UserId) {
            historyDisplay.innerHTML += `You buyed ${orderList[i].MedicineQuantity} ${orderList[i].MedicineName}<br>`;
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


    
    

function purchase(){
    let proceed:boolean  = true;
    let finalCount : number = 0;
    let medName = (document.getElementById("mednam") as HTMLInputElement).value;
    let medquan = (document.getElementById("quan") as HTMLInputElement).value;
    alert(medquan);
    alert(medName);
    let newPrice: number =0;
    let regxm = /^\d{1,3}$/;
    if(regxm.test(medquan) && +medquan>0){
        for(let i=0; i<MedicineList.length;i++){
            if(MedicineList[i].MedicineName==medName){
                if(MedicineList[i].MedicineCount>0){
                    if(MedicineList[i].MedicineCount>+medquan){
                        newPrice+= +medquan*MedicineList[i].MedicinePrice;
                        if(user.UserWalletBalance>newPrice){
                            MedicineList[i].MedicineCount -= +medquan;
                            user.UserWalletBalance -= +newPrice;
                            orderList.push(new OrderInfo(user.UserId, MedicineList[i].MedicineId,MedicineList[i].MedicineName,+medquan,newPrice,"ordered"));
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
function SignUp(){
    
    let newName = (document.getElementById("username") as HTMLInputElement).value;
    let newEmail = (document.getElementById("email") as HTMLInputElement).value;
    let newPhone = (document.getElementById("phone") as HTMLInputElement).value;
    let newPassword = (document.getElementById("password") as HTMLInputElement).value;
    let newConfirmPassword = (document.getElementById("cpassword") as HTMLInputElement).value;
    let newBalance = (document.getElementById("balance") as HTMLInputElement).value;
    userList.push(new UserInfo(newName,newPassword,newPhone,+newBalance));
    alert("pushed");
    for(let i=0;i<userList.length;i++){
        alert(userList[i].UserName);
    }
    (document.getElementById("existingUserPage") as HTMLDivElement).style.display="block";
}

// Medicine Details Tab
const ShowMed=()=>{
    (document.getElementById("meddetails") as HTMLDivElement).style.display="block";
    tableBody.innerHTML = "";
    MedicineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.MedicineName}</td>
        <td>${item.MedicineCount}</td>
        <td>${item.MedicinePrice}</td>
        <td><button onclick="edit(${item.MedicineId})">Edit</button>
          <button onclick="delete(${item.MedicineId})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
};


const order = () =>{
    (document.getElementById("tab") as HTMLDivElement).style.display="block";
    tabelBody2.innerHTML = "";
    orderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${item.UserId}</td>
        <td>${item.MedicineId}</td>
        <td>${item.MedicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.OrderStatus}</td>`;
        tabelBody2.appendChild(row);

    });

};
const delord = () =>{
    (document.getElementById("canbuttondetails") as HTMLDivElement).style.display="block";
    tabelBody3.innerHTML = "";
    orderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${item.UserId}</td>
        <td>${item.MedicineId}</td>
        <td>${item.MedicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.OrderStatus}</td>`;
        
        tabelBody3.appendChild(row);

    });

};

const CancelTable = () =>{
    
    (document.getElementById("cancdetails") as HTMLDivElement).style.display="block";
    ctablebody.innerHTML = "";
    orderList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${item.UserId}</td>
        <td>${item.MedicineId}</td>
        <td>${item.MedicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.MedicinePrice}</td>
        <td>${item.OrderStatus}</td>
        <td>
          
          <button onclick="cancel(${item.OrderId})">Cancel</button>
        </td>`;
        ctablebody.appendChild(row);

    });
    alert("uff");
    
};
function cancel(id:number){
    for(let i=0;i<orderList.length;i++){
        orderList[i].OrderStatus=="cancelled";
    }
}

const PurchaseTable=()=>{
    (document.getElementById("purdetails") as HTMLDivElement).style.display="block";
    ptablebody.innerHTML = "";
    MedicineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.MedicineName}</td>
        <td>${item.MedicineCount}</td>
        <td>${item.MedicinePrice}</td>
        <td>
          
          <button onclick="Buy(${item.MedicineId})">Buy</button>
        </td>`;
      
      ptablebody.appendChild(row);
    });
};

const Buy = (id: number) => {
    MedicineList=MedicineList.filter((item) => item.MedicineId!== id);
    displayMedicine();
    
};
const cancel(id:number){
    orderList=orderList.filter((item) => {
        ${order.OrderId});
    };








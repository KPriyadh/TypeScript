"use strict";
//Auto--Increment Variables
// let medicineIdAutoIncrement = 2000;
// let userIDAutoIncrement = 1000;
// let orderIDAutoIncrement = 3000;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Current Logged in User Details
let CurrentorderID;
let CurrentuserName;
let CurrentUserWalletBalance;
let user;
//Acessing Medicine Details table body from HTML
const tableBody = document.querySelector("#dataTable tbody");
const ctablebody = document.querySelector("#canceltable tbody");
const ptablebody = document.querySelector("#purchasetable tbody");
const tabelBody2 = document.querySelector("#data1 tbody");
const tabelBody3 = document.querySelector("#data2 tbody");
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/UserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
    });
}
function addMedicine(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/MedicineInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to add medicine');
        }
    });
}
function addOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/OrderInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to add order');
        }
    });
}
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/MedicineInfo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update medicine');
        }
    });
}
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/OrderInfo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to delete medicine');
        }
    });
}
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5190/api/MedicineInfo', {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete medicine');
        }
    });
}
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5190/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch User');
        }
        return yield response.json();
    });
}
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5190/api/MedicineInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Medicine');
        }
        return yield response.json();
    });
}
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5190/api/orderinfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Order');
        }
        return yield response.json();
    });
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
function signIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let noExistinguserIDChecker = false;
        let existinguserID = document.getElementById('existinguserID').value;
        let existinguserIDRegex = /^UID\d{4}$/;
        if (existinguserIDRegex.test(existinguserID)) {
            const userList = yield fetchUser();
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].userID == +existinguserID) {
                    user = userList[i];
                    // medicinePage();
                    alert("Login Successful");
                    document.getElementById("menu").style.display = "block";
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
    });
}
// Top Up Tab
function walletRecharge() {
    const RechargeAmount = document.getElementById("rechargeamount").value;
    let ramount = +RechargeAmount;
    user.userWalletBalance += ramount;
    alert("Your Current Wallet Balance is: " + user.userWalletBalance);
}
function up() {
    let top = document.getElementById("top").style.display = "block";
}
// Show Balance Tab
function ShowBalance() {
    document.getElementById("blc").innerHTML = "Your Balance is " + user.userWalletBalance;
    document.getElementById("blc").style.display = "block";
    alert("Your Wallet Balance is: " + user.userWalletBalance);
}
function Check() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("medicine").style.display = "block";
        let med = document.getElementById("select");
        let medicine = med[med.selectedIndex].innerHTML;
        let medcheck = document.getElementById("check");
        const medicineList = yield fetchMedicine();
        for (let i = 0; i < medicineList.length; i++) {
            if (medicineList[i].medicineName == medicine) {
                medcheck.innerHTML = `Medicine ID: ${medicineList[i].medicineId} || Medicine Name: ${medicineList[i].medicineName} || Medicine Count: ${medicineList[i].medicineCount} || Medicine Price: ${medicineList[i].medicinePrice} || Expiry Date: ${medicineList[i].expiryDate}`;
                displayMedicine();
            }
        }
    });
}
function displayMedicine() {
    document.getElementById("quantity").style.display = "block";
}
function showHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "block";
        let orderCount = 0;
        historyDisplay.innerHTML = "<h3>Order History</h3>";
        const orderList = yield fetchOrder();
        for (let i = 0; i < orderList.length; i++) {
            if (orderList[i].userID == user.userID) {
                historyDisplay.innerHTML += `You buyed ${orderList[i].MedicineQuantity} ${orderList[i].medicineName}<br>`;
                orderCount++;
            }
        }
        if (orderCount == 0) {
            historyDisplay.innerHTML += "Order History is empty.<br>";
        }
    });
}
function home() {
    let welcome = document.getElementById("welcome").style.display = "block";
}
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        let proceed = true;
        let finalCount = 0;
        let medName = document.getElementById("mednam").value;
        let medquan = document.getElementById("quan").value;
        alert(medquan);
        alert(medName);
        let newPrice = 0;
        let regxm = /^\d{1,3}$/;
        const medicineList = yield fetchMedicine();
        if (regxm.test(medquan) && +medquan > 0) {
            for (let i = 0; i < medicineList.length; i++) {
                if (medicineList[i].medicineName == medName) {
                    if (medicineList[i].medicineCount > 0) {
                        if (medicineList[i].medicineCount > +medquan) {
                            newPrice += +medquan * medicineList[i].medicinePrice;
                            if (user.userWalletBalance > newPrice) {
                                medicineList[i].medicineCount -= +medquan;
                                user.userWalletBalance -= +newPrice;
                                const orderList = yield fetchOrder();
                                const order = {
                                    orderID: 1003,
                                    userID: user.userID,
                                    medicineId: medicineList[i].medicineId,
                                    medicineName: medicineList[i].medicineName,
                                    MedicineQuantity: +medquan,
                                    medicinePrice: newPrice,
                                    orderStatus: "ordered"
                                };
                                addOrder(order);
                                // orderList.push(new OrderInfo(user.userID, medicineList[i].medicineId,medicineList[i].medicineName,+medquan,newPrice,"ordered"));
                                alert("Purchased Successfully");
                            }
                        }
                    }
                }
            }
        }
    });
}
function sign() {
    document.getElementById("signup").style.display = "block";
}
function log() {
    document.getElementById("existingUserPage").style.display = "block";
}
function SignUp() {
    return __awaiter(this, void 0, void 0, function* () {
        let newName = document.getElementById("userName").value;
        let newEmail = document.getElementById("email").value;
        let newPhone = document.getElementById("phone").value;
        let newPassword = document.getElementById("password").value;
        let newConfirmPassword = document.getElementById("cpassword").value;
        let newBalance = document.getElementById("balance").value;
        const userList = yield fetchUser();
        //userList.push(new UserInfo(newName,newPassword,newPhone,+newBalance));
        const user = {
            userID: 1003,
            userName: newName,
            userPassword: newPassword,
            userPhone: newPhone,
            userWalletBalance: +newBalance
        };
        addUser(user);
        alert("pushed");
        for (let i = 0; i < userList.length; i++) {
            alert(userList[i].userName);
        }
        document.getElementById("existingUserPage").style.display = "block";
    });
}
// Medicine Details Tab
const ShowMed = () => __awaiter(void 0, void 0, void 0, function* () {
    document.getElementById("meddetails").style.display = "block";
    tableBody.innerHTML = "";
    const MedicineList = yield fetchMedicine();
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
});
function order() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("tab").style.display = "block";
        tabelBody2.innerHTML = "";
        const orderList = yield fetchOrder();
        orderList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.orderID}</td>
        <td>${item.medicineId}</td>
        <td>${item.medicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.orderStatus}</td>`;
            tabelBody2.appendChild(row);
        });
    });
}
;
function delord() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("canbuttondetails").style.display = "block";
        tabelBody3.innerHTML = "";
        const orderList = yield fetchOrder();
        orderList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.orderID}</td>
        <td>${item.medicineId}</td>
        <td>${item.medicineName}</td>
        <td>${item.MedicineQuantity}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.orderStatus}</td>`;
            tabelBody3.appendChild(row);
        });
    });
}
;
function CancelTable() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("cancdetails").style.display = "block";
        ctablebody.innerHTML = "";
        const orderList = yield fetchOrder();
        orderList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
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
    });
}
;
function Cancel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderList = yield fetchOrder();
        for (let i = 0; i < orderList.length; i++) {
            orderList[i].orderStatus == "cancelled";
        }
    });
}
function PurchaseTable() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("purdetails").style.display = "block";
        ptablebody.innerHTML = "";
        const medicineList = yield fetchMedicine();
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
    });
}
;
function Buy(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const medicineList = yield fetchMedicine();
        medicineList.filter((item) => item.medicineId !== id);
        displayMedicine();
    });
}
;
function cancel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderList = yield fetchOrder();
        orderList.filter((item) => item.orderID !== id);
        {
        }
    });
}
;

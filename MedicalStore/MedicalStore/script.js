//Auto--Increment Variables
var MedicineIdAutoIncrement = 10;
var UserIdAutoIncrement = 1000;
var OrderIdAutoIncrement = 100;
//Current Logged in User Details
// let CurrentUserId: string;
// let CurrentUserName: string;
// let CurrentUserWalletBalance: number;
var user;
//Acessing Medicine Details table body from HTML
var tableBody = document.querySelector("#dataTable tbody");
var ctablebody = document.querySelector("#canceltable tbody");
var ptablebody = document.querySelector("#purchasetable tbody");
var tabelBody2 = document.querySelector("#data1 tbody");
var tabelBody3 = document.querySelector("#data2 tbody");
//User Details Class
var UserInfo = /** @class */ (function () {
    //Parameterised Constructor
    function UserInfo(paramUserName, paramUserPassword, paramUserPhone, paramWalletBalance) {
        UserIdAutoIncrement++;
        this.UserId = "UID" + UserIdAutoIncrement;
        this.UserName = paramUserName;
        this.UserPassword = paramUserPassword;
        this.UserPhone = paramUserPhone;
        this.UserWalletBalance = paramWalletBalance;
    } //Cpnstructor
    return UserInfo;
}()); //Class
//Medicine Details Class
var MedicineInfo = /** @class */ (function () {
    //Parameterised Constructor
    function MedicineInfo(paramMedicineName, paramMedicineCount, paraMedicinePrice, paramExpiryDate) {
        MedicineIdAutoIncrement++;
        this.MedicineId = MedicineIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paraMedicinePrice;
        this.ExpiryDate = paramExpiryDate;
    } //Constructor
    return MedicineInfo;
}()); //Class
//Order Details Class
var OrderInfo = /** @class */ (function () {
    //Constructor
    function OrderInfo(userId, medicineId, paramMedicineName, paramMedicineQuantity, paramMedicinePrice, orderStatus) {
        OrderIdAutoIncrement++;
        this.OrderId = OrderIdAutoIncrement;
        this.MedicineName = paramMedicineName;
        this.UserId = userId;
        this.MedicineId = medicineId;
        this.MedicineQuantity = paramMedicineQuantity;
        this.MedicinePrice = paramMedicinePrice;
        this.OrderStatus = orderStatus;
    }
    return OrderInfo;
}());
var userList = new Array();
userList.push(new UserInfo("Priya", "pswd1", "9789011226", 1000));
userList.push(new UserInfo("Sai", "pswd1", "9445153060", 500));
var MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 50, "29/05/2025"));
MedicineList.push(new MedicineInfo("Colpal", 5, 60, "20/04/2025"));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70, "15/03/2025"));
MedicineList.push(new MedicineInfo("Iodex", 5, 80, "30/04/2025"));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100, "29/06/2025"));
var orderList = new Array();
// Sign in
function signIn() {
    var noExistingUserIdChecker = false;
    var existingUserId = document.getElementById('existingUserId').value;
    var existingUserIdRegex = /^UID\d{4}$/;
    if (existingUserIdRegex.test(existingUserId)) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].UserId == existingUserId) {
                // CurrentLoggedinUser.UserId = UserArrayList[i].UserId;
                // CurrentLoggedinUser.UserName = UserArrayList[i].UserName;
                // CurrentLoggedinUser.UserWalletBalance = UserArrayList[i].UserWalletBalance;
                user = userList[i];
                // medicinePage();
                alert("Login Successful");
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
    var RechargeAmount = document.getElementById("rechargeamount").value;
    var ramount = +RechargeAmount;
    user.UserWalletBalance += ramount;
    alert("Your Current Wallet Balance is: " + user.UserWalletBalance);
}
function up() {
    var top = document.getElementById("top").style.display = "block";
}
// Show Balance Tab
function ShowBalance() {
    alert("Your Wallet Balance is: " + user.UserWalletBalance);
}
function Check() {
    document.getElementById("medicine").style.display = "block";
    var med = document.getElementById("select");
    var medicine = med[med.selectedIndex].innerHTML;
    var medcheck = document.getElementById("check");
    for (var i = 0; i < MedicineList.length; i++) {
        if (MedicineList[i].MedicineName == medicine) {
            medcheck.innerHTML = "Medicine ID: ".concat(MedicineList[i].MedicineId, " || Medicine Name: ").concat(MedicineList[i].MedicineName, " || Medicine Count: ").concat(MedicineList[i].MedicineCount, " || Medicine Price: ").concat(MedicineList[i].MedicinePrice, " || Expiry Date: ").concat(MedicineList[i].ExpiryDate);
            displayMedicine();
        }
    }
}
function displayMedicine() {
    document.getElementById("quantity").style.display = "block";
}
function showHistory() {
    var historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "block";
    var orderCount = 0;
    historyDisplay.innerHTML = "<h3>Order History</h3>";
    for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].UserId == user.UserId) {
            historyDisplay.innerHTML += "You buyed ".concat(orderList[i].MedicineQuantity, " ").concat(orderList[i].MedicineName, "<br>");
            orderCount++;
        }
    }
    if (orderCount == 0) {
        historyDisplay.innerHTML += "Order History is empty.<br>";
    }
}
function home() {
    var welcome = document.getElementById("welcome").style.display = "block";
}
function Cancel() {
    alert("hello");
    for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].UserId == user.UserId) {
            alert("yes");
            for (var i_1 = 0; i_1 < MedicineList.length; i_1++) {
                alert("what");
                if (MedicineList[i_1].MedicineId == orderList[i_1].MedicineId) {
                    MedicineList[i_1].MedicineCount += orderList[i_1].MedicineQuantity;
                    user.UserWalletBalance += orderList[i_1].MedicinePrice;
                    orderList[i_1].OrderStatus = "Cancelled";
                    alert("why");
                    alert(MedicineList[i_1].MedicineCount);
                    alert(user.UserWalletBalance);
                    CancelTable();
                }
            }
        }
    }
}
function purchase() {
    var proceed = true;
    var finalCount = 0;
    var medName = document.getElementById("mednam").value;
    var medquan = document.getElementById("quan").value;
    alert(medquan);
    alert(medName);
    var newPrice = 0;
    var regxm = /^\d{1,3}$/;
    if (regxm.test(medquan) && +medquan > 0) {
        for (var i = 0; i < MedicineList.length; i++) {
            if (MedicineList[i].MedicineName == medName) {
                if (MedicineList[i].MedicineCount > 0) {
                    if (MedicineList[i].MedicineCount > +medquan) {
                        newPrice += +medquan * MedicineList[i].MedicinePrice;
                        if (user.UserWalletBalance > newPrice) {
                            MedicineList[i].MedicineCount -= +medquan;
                            user.UserWalletBalance -= +newPrice;
                            orderList.push(new OrderInfo(user.UserId, MedicineList[i].MedicineId, MedicineList[i].MedicineName, +medquan, newPrice, "ordered"));
                            alert("Purchased Successfully");
                        }
                    }
                }
            }
        }
    }
}
function SignUp() {
    var newName = document.getElementById("username").value;
    var newEmail = document.getElementById("email").value;
    var newPhone = document.getElementById("phone").value;
    var newPassword = document.getElementById("password").value;
    var newConfirmPassword = document.getElementById("cpassword").value;
    var newBalance = document.getElementById("balance").value;
    userList.push(new UserInfo(newName, newPassword, newPhone, +newBalance));
    alert("pushed");
    for (var i = 0; i < userList.length; i++) {
        alert(userList[i].UserName);
    }
}
// Medicine Details Tab
var ShowMed = function () {
    tableBody.innerHTML = "";
    MedicineList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.MedicineName, "</td>\n        <td>").concat(item.MedicineCount, "</td>\n        <td>").concat(item.MedicinePrice, "</td>\n      ");
        tableBody.appendChild(row);
    });
};
var order = function () {
    tabelBody2.innerHTML = "";
    orderList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.UserId, "</td>\n        <td>").concat(item.MedicineId, "</td>\n        <td>").concat(item.MedicineName, "</td>\n        <td>").concat(item.MedicineQuantity, "</td>\n        <td>").concat(item.MedicinePrice, "</td>\n        <td>").concat(item.OrderStatus, "</td>");
        tabelBody2.appendChild(row);
    });
};
var delord = function () {
    tabelBody3.innerHTML = "";
    orderList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.UserId, "</td>\n        <td>").concat(item.MedicineId, "</td>\n        <td>").concat(item.MedicineName, "</td>\n        <td>").concat(item.MedicineQuantity, "</td>\n        <td>").concat(item.MedicinePrice, "</td>\n        <td>").concat(item.OrderStatus, "</td>\n        <td>\n          <button onclick=\"cancel(").concat(item.OrderId, ")\">Cancel</button>\n        </td>");
        tabelBody3.appendChild(row);
    });
};
var CancelTable = function () {
    ctablebody.innerHTML = "";
    orderList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.UserId, "</td>\n        <td>").concat(item.MedicineId, "</td>\n        <td>").concat(item.MedicineName, "</td>\n        <td>").concat(item.MedicineQuantity, "</td>\n        <td>").concat(item.MedicinePrice, "</td>\n        <td>").concat(item.OrderStatus, "</td>\n        <td>\n          <button onclick=\"cancel(").concat(item.OrderId, ")\">Cancel</button>\n        </td>");
        ctablebody.appendChild(row);
    });
};
var PurchaseTable = function () {
    ptablebody.innerHTML = "";
    MedicineList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.MedicineName, "</td>\n        <td>").concat(item.MedicineCount, "</td>\n        <td>").concat(item.MedicinePrice, "</td>\n        <td>\n          <button onclick=\"edit(").concat(item.MedicineId, ")\">Edit</button>\n          <button onclick=\"delete(").concat(item.MedicineId, ")\">Delete</button>\n          <button onclick=\"Buy(").concat(item.MedicineId, ")\">Buy</button>\n        </td>");
        ptablebody.appendChild(row);
    });
};
var Buy = function (id) {
    MedicineList = MedicineList.filter(function (item) { return item.MedicineId !== id; });
    displayMedicine();
};
var cancel = function (id) {
    orderList = orderList.filter(function (item) { return item.OrderId !== id; });
    alert("remove");
    Cancel();
};

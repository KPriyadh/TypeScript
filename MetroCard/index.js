var userAutoIncrement = 1001;
var travelAutoIncrement = 2000;
var ticketAutoIncrement = 3000;
var user;
var ttableBody = document.querySelector("#ticketTable tbody");
var ftableBody = document.querySelector("#fairtable tbody");
var trtableBody = document.querySelector("#travelTable tbody");
var UserInfo = /** @class */ (function () {
    function UserInfo(userName, phone, balance) {
        this.CardNumber = "CMRL" + +userAutoIncrement++;
        this.UserName = userName;
        this.Phone = phone;
        this.Balance = balance;
    }
    return UserInfo;
}());
var TravelInfo = /** @class */ (function () {
    function TravelInfo(cardNumber, fromLocation, toLocation, travelCost) {
        this.TravelID = travelAutoIncrement++;
        this.CardNumber = cardNumber;
        this.FromLocation = fromLocation;
        this.ToLocation = toLocation;
        this.TravelCost = travelCost;
    }
    return TravelInfo;
}());
var TicketFairInfo = /** @class */ (function () {
    function TicketFairInfo(fromLocation, toLocation, fair) {
        this.TicketID = ticketAutoIncrement++;
        this.FromLocation = fromLocation;
        this.ToLocation = toLocation;
        this.Fair = fair;
    }
    return TicketFairInfo;
}());
var userList = new Array();
userList.push(new UserInfo("Ravi", "9848812345", 1000));
userList.push(new UserInfo("Baskaran", "9948854321", 1000));
var travelList = new Array();
var ticketList = new Array();
ticketList.push(new TicketFairInfo("Airport", "Egmore", 55));
ticketList.push(new TicketFairInfo("Airport", "Koyambedu", 25));
ticketList.push(new TicketFairInfo("Alandur", "Koyambedu", 25));
ticketList.push(new TicketFairInfo("Koyambedu", "Egmore", 32));
ticketList.push(new TicketFairInfo("Vadapalani", "Egmore", 45));
ticketList.push(new TicketFairInfo("Arumbakkam", "Egmore", 25));
ticketList.push(new TicketFairInfo("Vadapalani", "Koyambedu", 25));
ticketList.push(new TicketFairInfo("Arumbakkam", "Koyambedu", 16));
function signupDisplay() {
    document.getElementById("form").style.display = "block";
}
function signinDisplay() {
    document.getElementById("loginform").style.display = "block";
}
function signUp() {
    var newName = document.getElementById("name").value;
    var newPhone = document.getElementById("phone").value;
    var newBalance = document.getElementById("balance").value;
    userList.push(new UserInfo(newName, newPhone, +newBalance));
    alert("pushed");
    for (var i = 0; i < userList.length; i++) {
        alert(userList[i].UserName);
    }
    document.getElementById("loginform").style.display = "block";
}
function signIn() {
    var noExistingUserIdChecker = false;
    var newCardNumber = document.getElementById("login").value;
    var cregx = /^CMRL\d{4}$/;
    if (cregx.test(newCardNumber)) {
        for (var i = 0; i < userList.length; i++) {
            if (newCardNumber == userList[i].CardNumber) {
                alert("Logged In Successfully");
                user = userList[i];
                document.getElementById("front2").style.display = "block";
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
function Home() {
    document.getElementById("welcome").innerHTML = "<h2>Welcome! </h2>" + user.UserName;
    document.getElementById("welcome").style.display = "block";
}
var ticketFairTable = function () {
    document.getElementById("ticktable").style.display = "block";
    ttableBody.innerHTML = "";
    ticketList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.TicketID, "</td>\n        <td>").concat(item.FromLocation, "</td>\n        <td>").concat(item.ToLocation, "</td>\n        <td>").concat(item.Fair, "</td>");
        ttableBody.appendChild(row);
    });
};
function RechargeDisplay() {
    document.getElementById("rechargeform").style.display = "block";
}
function Recharge() {
    var amount = document.getElementById("recharge").value;
    var newRAmount = +amount;
    alert(user.Balance);
    user.Balance += newRAmount;
    alert(newRAmount);
    alert(user.Balance);
}
function BalanceCheck() {
    document.getElementById("balancecheck1").innerHTML = "Your Balance is " + user.Balance;
    document.getElementById("balancecheck1").style.display = "block";
}
var fairTables = function () {
    document.getElementById("fatable").style.display = "block";
    ftableBody.innerHTML = "";
    ticketList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.TicketID, "</td>\n        <td>").concat(item.FromLocation, "</td>\n        <td>").concat(item.ToLocation, "</td>\n        <td>").concat(item.Fair, "</td>\n        <td> \n            <button onclick=\"book(").concat(item.TicketID, ")\">Book</button>\n        </td>");
        ftableBody.appendChild(row);
    });
};
var book = function (id) {
    ticketList = ticketList.filter(function (item) { return item.TicketID !== id; });
    Book();
};
function Book() {
    document.getElementById("travel").style.display = "block";
}
function Travel() {
    alert("hi");
    var newID = document.getElementById("book").value;
    alert(newID);
    var tregx = /^\d{4}$/;
    if (tregx.test(newID)) {
        for (var i = 0; i < ticketList.length; i++) {
            if (+newID == ticketList[i].TicketID) {
                if (user.Balance > ticketList[i].Fair) {
                    user.Balance -= ticketList[i].Fair;
                    alert("hello");
                    travelList.push(new TravelInfo(user.CardNumber, ticketList[i].FromLocation, ticketList[i].ToLocation, ticketList[i].Fair));
                    document.getElementById("front2").style.display = "block";
                    alert("Ticket Booked successfully!");
                }
            }
        }
    }
}
var travelsTable = function () {
    document.getElementById("travletable").style.display = "block";
    trtableBody.innerHTML = "";
    travelList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.TravelID, "</td>\n        <td>").concat(item.CardNumber, "</td>\n        <td>").concat(item.FromLocation, "</td>\n        <td>").concat(item.ToLocation, "</td>\n        <td>").concat(item.TravelCost, "</td>");
        trtableBody.appendChild(row);
    });
};

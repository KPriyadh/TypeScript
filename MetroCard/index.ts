let userAutoIncrement = 1001;
let travelAutoIncrement = 2000;
let ticketAutoIncrement = 3000;

let user: UserInfo;

const ttableBody = (document.querySelector("#ticketTable tbody") as HTMLTableSectionElement);
const ftableBody = (document.querySelector("#fairtable tbody") as HTMLTableSectionElement);
const trtableBody = (document.querySelector("#travelTable tbody") as HTMLTableSectionElement);

class UserInfo{
    CardNumber: string;
    UserName: string;
    Phone: string;
    Balance: number;

    constructor(userName: string, phone: string, balance: number){
        this.CardNumber = "CMRL" + +userAutoIncrement++;
        this.UserName = userName;
        this.Phone = phone;
        this.Balance = balance;
    }
}

class TravelInfo{
    TravelID: number;
    CardNumber: string;
    FromLocation: string;
    ToLocation: string;
    
    TravelCost: number;

    constructor(cardNumber: string, fromLocation:string, toLocation:string, travelCost:number){
        this.TravelID = travelAutoIncrement++;
        this.CardNumber = cardNumber;
        this.FromLocation = fromLocation;
        this. ToLocation = toLocation;
        
        this.TravelCost = travelCost;
    }
}

class TicketFairInfo{
    TicketID: number;
    FromLocation: string;
    ToLocation: string;
    Fair: number;

    constructor(fromLocation:string, toLocation:string, fair:number){
        this.TicketID = ticketAutoIncrement++;
        this.FromLocation = fromLocation;
        this.ToLocation = toLocation;
        this.Fair = fair;
    }
}

let userList: Array<UserInfo> = new Array<UserInfo>();
userList.push(new UserInfo("Ravi","9848812345",1000));
userList.push(new UserInfo("Baskaran","9948854321",1000));

let travelList: Array<TravelInfo> = new Array<TravelInfo>();

let ticketList: Array<TicketFairInfo> = new Array<TicketFairInfo>();
ticketList.push(new TicketFairInfo("Airport", "Egmore", 55));
ticketList.push(new TicketFairInfo("Airport", "Koyambedu", 25));
ticketList.push(new TicketFairInfo("Alandur", "Koyambedu", 25));
ticketList.push(new TicketFairInfo("Koyambedu", "Egmore", 32));
ticketList.push(new TicketFairInfo("Vadapalani", "Egmore", 45));
ticketList.push(new TicketFairInfo("Arumbakkam", "Egmore", 25));
ticketList.push(new TicketFairInfo("Vadapalani", "Koyambedu", 25));
ticketList.push(new TicketFairInfo("Arumbakkam", "Koyambedu", 16));


function signupDisplay(){
    (document.getElementById("form") as HTMLDivElement).style.display="block";
}
function signinDisplay(){
    (document.getElementById("loginform") as HTMLDivElement).style.display="block";
}
function signUp(){
    let newName = (document.getElementById("name") as HTMLInputElement).value;
    let newPhone = (document.getElementById("phone") as HTMLInputElement).value;
    let newBalance = (document.getElementById("balance") as HTMLInputElement).value;
    userList.push(new UserInfo(newName,newPhone,+newBalance));
    alert("pushed");
    for(let i=0; i<userList.length;i++){
        alert(userList[i].UserName);
    }

    
    (document.getElementById("loginform") as HTMLDivElement).style.display="block";
}

function signIn(){
    let noExistingUserIdChecker: boolean = false;
    let newCardNumber = (document.getElementById("login") as HTMLInputElement).value;
    let cregx = /^CMRL\d{4}$/;
    if(cregx.test(newCardNumber)){
        for(let i=0;i<userList.length;i++){
            if(newCardNumber==userList[i].CardNumber){
                alert("Logged In Successfully");
                user = userList[i];
                (document.getElementById("front2") as HTMLDivElement).style.display="block";
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


function Home(){
    (document.getElementById("welcome") as HTMLDivElement).innerHTML="<h2>Welcome! </h2>" + user.UserName;
    (document.getElementById("welcome") as HTMLDivElement).style.display="block";
}

const ticketFairTable = () => {
    (document.getElementById("ticktable") as HTMLDivElement).style.display="block";
    ttableBody.innerHTML = "";
    ticketList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.TicketID}</td>
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.Fair}</td>`;
        ttableBody.appendChild(row);   
    });
};

function RechargeDisplay(){
    (document.getElementById("rechargeform") as HTMLDivElement).style.display="block";   
}
function Recharge(){
    const amount = (document.getElementById("recharge") as HTMLInputElement).value;
    let newRAmount = +amount;
    alert(user.Balance);
    user.Balance += newRAmount;
    alert(newRAmount);
    alert(user.Balance);
}

function BalanceCheck(){
    (document.getElementById("balancecheck1") as HTMLDivElement).innerHTML= "Your Balance is " + user.Balance;
    (document.getElementById("balancecheck1") as HTMLDivElement).style.display="block";
}

const fairTables = () => {
    (document.getElementById("fatable") as HTMLDivElement).style.display="block";
    ftableBody.innerHTML = "";
    ticketList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.TicketID}</td>
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.Fair}</td>
        <td> 
            <button onclick="book(${item.TicketID})">Book</button>
        </td>`;
        ftableBody.appendChild(row);   
    });
};

const book = (id:number) =>{
    ticketList=ticketList.filter((item) => item.TicketID !== id);
    Book();
}
function Book(){
    (document.getElementById("travel") as HTMLDivElement).style.display="block";
}

function Travel(){
    alert("hi");
    let newID = (document.getElementById("book") as HTMLInputElement).value;
    alert(newID);
    let tregx = /^\d{4}$/;
    if(tregx.test(newID)){
        for(let i=0; i<ticketList.length;i++){
            if(+newID == ticketList[i].TicketID){
                if(user.Balance>ticketList[i].Fair){
                    user.Balance-=ticketList[i].Fair;
                    alert("hello");
                    travelList.push(new TravelInfo(user.CardNumber,ticketList[i].FromLocation,ticketList[i].ToLocation,ticketList[i].Fair));
                    for(let i=0;i<travelList.length;i++){
                        alert(travelList[i].FromLocation);

                    }
                    (document.getElementById("front2") as HTMLDivElement).style.display="block";
                    alert("Ticket Booked successfully!");
                    
                }
                else{
                    alert("Insufficient Balance");
                }
            }   
        }   
    }   
}

const travelsTable = () => {
    (document.getElementById("travletable") as HTMLDivElement).style.display="block";
    trtableBody.innerHTML = "";
    travelList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.TravelID}</td>
        <td>${item.CardNumber}</td>
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.TravelCost}</td>`;
        
        trtableBody.appendChild(row); 
    });
};
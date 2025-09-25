let noselectedplayers;
let totalplayercost;

// to get the number of selected players 
const calculation = (noplayers) => {
    noselectedplayers = noplayers;
};

// first calculations of players cost
const calcbtn  = document.getElementById("calc");

calcbtn.addEventListener("click", function(){
    const playercost = parseInt(document.getElementById("P_cost").value);
    totalplayercost = parseInt(noselectedplayers) * playercost;
    const expence = document.getElementById("expenses");
    expence.style = ("text-yellow-500");
    expence.innerHTML = ("Player Expenses: $" + totalplayercost);
});

// final calculations of players cost, manager cost & coach cost
const final_cost  = document.getElementById("final_cost");
const show_inal_cost  = document.getElementById("f_cost");

final_cost.addEventListener("click", function(){
    const managerCost = parseInt(document.getElementById("m_cost").value);
    const coachCost = parseInt(document.getElementById("c_cost").value);
    show_inal_cost.innerHTML = "$ " + parseInt(managerCost + coachCost + totalplayercost);
});

// console.log('alu');
// let selectPlayer = document.querySelector('.player-select');
// selectPlayer.addEventListener('click',function(){
//     console.log('clicked');
// })

function GetPlayerId(x){
    
    const totailLi = document.getElementsByTagName('li')
    const numberofli = totailLi.length;
    // console.log(numberofli);
    if (numberofli >= 5) {
        const disablebutton = document.getElementsByTagName('button')
        disablebutton.disabled=true;
        disablebutton.style.backgroundColor='gray'
        console.log(numberofli);
    }else{
        x.disabled = true;
        const id = x.id;
        const DisColor = document.getElementById(id)
        DisColor.style.backgroundColor='gray'

        const ListOfPlayers = document.getElementById('List-of-players')
        const CreatList = document.createElement('li')
        CreatList.innerText=x.id;
        CreatList.style.color='white'
        ListOfPlayers.appendChild(CreatList)
    }
    
}


const AmountCal = ()=>{
    const totailLi = document.getElementsByTagName('li')
    const numberofli = totailLi.length;

    const TotalAmountofPlayerfild = document.getElementById('per-player-amount-fild')
    const getInputValue = TotalAmountofPlayerfild.value;
    const totalPlayersExpanse = getInputValue*numberofli;
    console.log(totalPlayersExpanse);

    const DisplayPlayersAmmount = document.getElementById('ammount-of-players')
    DisplayPlayersAmmount.innerText=totalPlayersExpanse;

    return totalPlayersExpanse;

}

const TotalCalculation =()=>{
    const TotalPlayersValue = AmountCal();

    const AmountofMenagerfild = document.getElementById('Maneger-amount')
    const getInputValueM = AmountofMenagerfild.value;

    const AmountofCoachfild = document.getElementById('Coach-amount')
    const getInputValueC = AmountofCoachfild.value;

    const TotalGameBudget = TotalPlayersValue + parseInt(getInputValueM ) + parseInt(getInputValueC);
    console.log(TotalGameBudget);

    const DisplayGameAmmount = document.getElementById('display-total-ammount')
    DisplayGameAmmount.innerText=TotalGameBudget;


}
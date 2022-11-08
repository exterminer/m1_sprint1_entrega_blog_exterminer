const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
      ],
    };
    
    function makeWithDrawal(){
        let responseWithDraw = 0
        let withdrawalAmount = 0
        responseWithDraw = parseInt(prompt('digite 1 para poupança ou 2 para crédito'))
        withdrawalAmount = parseInt(prompt('Digite o valor do saque'))

        if (withdrawalAmount < 5 || withdrawalAmount > 1000){
            return  alert ('This value is not allowed')
        }

        if(responseWithDraw == 1){
            if(user.savingsBalance < withdrawalAmount){
                return alert ('Balance unavailable')
            }else if(user.savingsBalance > withdrawalAmount){
                 user.savingsBalance = user.savingsBalance - withdrawalAmount
                
                 return alert ('Withdrawal carried out')
            }
        }else if (responseWithDraw == 2){
            if(user.creditBalance < withdrawalAmount){
                return alert ('Balance unavailable')
            }else if(user.cardsInformation[0].creditBalance > withdrawalAmount){
                 user.cardsInformation[0] = user.cardsInformation[0].creditBalance - withdrawalAmount
                 return alert('Withdrawal carried out')
            }
            
        }
        
    }
    

   function getBalance(){
    let responseBalance = 0
    let balance = 0 
    responseBalance = parseInt(prompt('digite 1 para poupança ou 2 para crédito'))
    if(responseBalance == 1){
        balance = user.savingsBalance 
    }else if(responseBalance == 2){
        balance = user.cardsInformation[0].creditBalance
    }else{
        return alert('Valor invalido')
    }

    return alert(`Seu saldo é ${balance}`)

   }

   function makeDeposit(){
    let valueForDeposit = 0
    
    valueForDeposit = parseInt(prompt('Digite o valor a ser depositado'))
    if (valueForDeposit < 5 || valueForDeposit > 1000){
        return  alert ('This value is not allowed')
    }else {
        user.savingsBalance = user.savingsBalance + valueForDeposit
        return('Deposit made successfully')
    }
   }


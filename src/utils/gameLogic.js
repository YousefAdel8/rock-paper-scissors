const choices = ["Rock", "Paper", "Scissors"];

/*
    Math.random() return Num (0...1)
    we need (0...2) so we will multiply the Math.random() * 3 
    and get the floor of num
*/
export function getComputerChoice() {
    const randomIndex = Math.random() * choices.length; 
    const Index =Math.floor(randomIndex) 
    return choices[Index];
}

export function getWhoWin(PlayerChoice,ComputerChoice)
{
    if(PlayerChoice===ComputerChoice)
    {
        return "DRAW"
    }
    else if(PlayerChoice==="Paper"&&ComputerChoice==="Rock" ||
            PlayerChoice==="Rock"&&ComputerChoice==="Scissors" ||
            PlayerChoice==="Scissors"&&ComputerChoice==="Paper"
    )
    {
        return "YOU WIN"
    }
        
    return "YOU LOSS"
}
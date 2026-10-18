const choices = ["Rock", "Paper", "Scissors"];

/*
    Math.random() return Num (0...1)
    we need (0...2) so we will multiply the Math.random() * 3 
    and get the floor of num
*/
export function getComputerChoice() {
    const randomIndex = Math.random()*3; 
    const Index =Math.floor(randomIndex) 
    return choices[Index];
}
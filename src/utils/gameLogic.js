const choices = ["Rock", "Paper", "Scissors"];

/*
    Math.random() return Num (0...1)
    we need (0...2) so we will multiply the Math.random() * 3 
    and get the floor of num
*/
function getComputerChoice() {
    const randomIndex = Math.random(); 
    return choices[randomIndex];
}
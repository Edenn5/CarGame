// Variables
let car = {
    make:'Tesla' , 
    model: 'Model X',
    color: 'black',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 10;
        alert(`New Mileage: ${this.mileage}`);
    },
}

// Functions
// Logs all out car's current stats to the console
const rewriteStats()=>{

}

// Main Process
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup(event) => {

    // Captures the keypress, converts it to lowercase and saves it to a variable.
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if(letter ==='d'){
        car.driveToWork();
        rewriteStats();
    }
}

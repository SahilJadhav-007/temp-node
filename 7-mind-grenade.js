const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`)
}

addValues() // even if we did'nt assigned our module to any of the data in app module it will still run if we just import it in app via 'require' and called it in its own file

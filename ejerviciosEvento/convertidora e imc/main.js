document.getElementById('calculateBtn').addEventListener('click', () => {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMts = height / 100; 
        const bmi = (weight / (heightInMts * heightInMts)).toFixed(2); 

        const resultText = `Tu IMC es: ${bmi}`;
        document.getElementById('result').value = resultText;
       
    } else {
        alert('Por favor, introduce el peso y la altura.');
    }
});


document.getElementById('dolar').addEventListener('input', () => {
    const usdAmount = parseFloat(document.getElementById('dolar').value);
    const tasaDeCambio = 140; 
    const arsAmount = (usdAmount * tasaDeCambio).toFixed(2);
    document.getElementById('peso').value = arsAmount;
})
document.getElementById('peso').addEventListener('input', ()=>{
    const arsAmount = parseFloat(document.getElementById('peso').value);
    const tasaDeCambio = 140; 
    const usdAmount = (arsAmount / tasaDeCambio).toFixed(2);
    document.getElementById('dolar').value = usdAmount;
});

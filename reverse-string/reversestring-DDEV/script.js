// Obtener referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const realtimeResult = document.getElementById('realtimeResult');
const finalResult = document.getElementById('finalResult');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const copyMessage = document.getElementById('copyMessage');

// Función para invertir una cadena
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Actualizar resultado en tiempo real mientras se escribe
inputText.addEventListener('input', function() {
    const inputValue = this.value;
    const reversedValue = reverseString(inputValue);
    
    // Actualizar el resultado en tiempo real
    realtimeResult.textContent = reversedValue;
    
    // Habilitar/deshabilitar botón de invertir según la longitud
    if (inputValue.length >= 3) {
        reverseBtn.disabled = false;
    } else {
        reverseBtn.disabled = true;
    }
    
    // Deshabilitar el botón de copiar si no hay texto invertido final
    copyBtn.disabled = finalResult.textContent.length === 0;
});

// Invertir texto al hacer clic en el botón
reverseBtn.addEventListener('click', function() {
    const inputValue = inputText.value;
    const reversedValue = reverseString(inputValue);
    
    // Actualizar el resultado final
    finalResult.textContent = reversedValue;
    
    // Habilitar el botón de copiar
    copyBtn.disabled = false;
});

// Copiar texto invertido al portapapeles
copyBtn.addEventListener('click', function() {
    // Crear un elemento de texto temporal
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = finalResult.textContent;
    document.body.appendChild(tempTextArea);
    
    // Seleccionar y copiar el texto
    tempTextArea.select();
    document.execCommand('copy');
    
    // Eliminar el elemento temporal
    document.body.removeChild(tempTextArea);
    
    // Mostrar mensaje de confirmación
    copyMessage.classList.add('show');
    
    // Ocultar el mensaje después de 2 segundos
    setTimeout(function() {
        copyMessage.classList.remove('show');
    }, 2000);
});
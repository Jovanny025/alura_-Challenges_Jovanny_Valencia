document.getElementById('encrypt').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const result = caesarCipher(text, 3); // Usamos un desplazamiento de 3 como ejemplo
    document.getElementById('result').textContent = result;
});

document.getElementById('decrypt').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const result = caesarCipher(text, -3); // Usamos un desplazamiento de -3 para desencriptar
    document.getElementById('result').textContent = result;
});

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const shiftBase = char.toUpperCase() === char ? 65 : 97;
            return String.fromCharCode(((code - shiftBase + shift) % 26 + 26) % 26 + shiftBase);
        }
        return char;
    }).join('');
}
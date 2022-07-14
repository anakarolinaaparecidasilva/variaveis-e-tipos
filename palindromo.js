// palíndromo: frase ou palavra que se pode ler da esquerda para direita e vice-versa.
// Atividade: verificar duas maneiras diferentes entre si, se uma String é um palíndromo.

// Solução 1
function verificaPalindromo (string){
    if (!string) return;
    console.log(string === string.split ('').reverse().json(''));
}
verificaPalindromo('cat');

// Solução 2
function verificaPalindromo2 (string){
    if (!string) return;
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log (false);
        }
    }
    return console.log (true);
}

verificaPalindromo2('asa');
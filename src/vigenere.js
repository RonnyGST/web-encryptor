
/*
Cifra de Vigenère

Legendas:
C = índice da letra criptografada
K = índice da letra da chave
P = índice da letra da mensagem
T = tamanho do banco de letras

Fórmula para Criptografar: C = (P + K) % T
Fórmula para Descriptografar: P = (C - K + T) % T
*/



// Variáveis globais
let charBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ1234567890abcdefghijklmnopqrstuvwxyzç !?@#$%&*()-_+,.;:/^~'`<>=ãáàâéêíóôõú";
let userMessage = inputField.value;
let password = passwordField.value;


// Criptografa a mensagem com base na senha
function EncryptVigenere()
{
    userMessage = inputField.value;
    password = passwordField.value;
    let result = "";
    let passwordRepeated = ReapeatPassword(userMessage);
    let charPositions = AddVectors(GetCharPositionInBank(userMessage), GetCharPositionInBank(passwordRepeated));
    
    for(let i=0; i<StringRealSize(userMessage); i++)
    {
        result += charBank.at(charPositions.at(i));
    }
    return result;
}

// Descriptografa a mensagem com base na senha
function DecryptVigenere()
{
    userMessage = inputField.value;
    password = passwordField.value;
    let result = "";
    let passwordRepeated = ReapeatPassword(userMessage);
    let charPositions = SubtractVectors(GetCharPositionInBank(userMessage), GetCharPositionInBank(passwordRepeated));
    
    for(let i=0; i<StringRealSize(userMessage); i++)
    {
        result += charBank.at(charPositions.at(i));
    }
    return result;
}

// Repetir a senha até o tamanho da mensagem
function ReapeatPassword(message)
{
    let result = "";
    let count = 0;
    for(let i=0; i<StringRealSize(message); i++)
    {
        if(count>=StringRealSize(password)){count = 0;}
        result += password[count];
        count++;
    }
    return result;
}

// Retorna o valor numérico da posição da string do parâmetro em relação ao banco de caracteres
function GetCharPositionInBank(value)
{
    let result = [];
    for(let i=0; i<StringRealSize(value); i++)
    {
        for(let j=0; j<StringRealSize(charBank); j++)
        {
            // Verificar se a letra consta no banco de letras e retornar a posição no banco
            if(value[i] == charBank[j])
            {
                result.push(j);
            }
        }
    }
    return result;
}

// Retorna a soma dos valores de dois vetores de inteiro
function AddVectors(x = [], y = [])
{
    let result = []; // Dessa forma eu crio um array dinâmico que posso adicionar elementos de forma semelhante ao vector do c++
    let vectorSize = x.length;
    for(let i=0; i<vectorSize; i++)
    {
        result.push((x[i] + y[i]) % charBank.length);
    }
    return result;
}

// Retorna a subtração dos valores de dois vetores de inteiro
function SubtractVectors(x = [], y = [])
{
    let result = [];
    let vectorSize = x.length;
    for(let i=0; i<vectorSize; i++)
    {
        result.push((x[i] - y[i] + charBank.length) % charBank.length);
    }
    return result;
}

/*
Retorna corretamente o tamanho de uma string, pois se usar caracteres do Unicode, tais quais letras com acentos ou emojis,
faz com que a letra na string tenha 2 bytes ou mais, e para um loop ou função que conta a quantidade de caracteres em uma 
string (que usam os bytes para contar), ficaria totalmente inconsistente e errado. Com esta função faço a contagem usando
a quantidade de bytes do caractere.
*/
function StringRealSize(str) {
    return [...new Intl.Segmenter().segment(str)].length;
}



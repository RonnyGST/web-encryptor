
var inputField = document.getElementById("UserInputField");
var resultField = document.getElementById("ResultField");


// Criptografar a mensagem
function Encrypt(input)
{
    let result = "";
    let charBank = "abcdefghijklmnopqrstuvwxyz";
    let inputSize = input.length;
    let charBankSize = charBank.length;

    
    // Cifra de César
    for(let i=0; i<inputSize; i++) 
    {
        let tempCharBank = charBank;
        for(let j=0; j<charBankSize; j++)
        {
            if (input[i] == charBank[j]) 
            {
                let newIndex = (j + 3) % charBankSize;
                input = ChangeStringAt(input, i, charBank[newIndex]);
                break;
            }
        }
    }

    
    // Trocar letras por símbolos
    for(let i=0; i<inputSize; i++)
    {
        if(input[i] == 'u')
        {
            input = ChangeStringAt(input, i, "~");
        } else if(input[i] == 'o')
        {
            input = ChangeStringAt(input, i, "^");
        } else if(input[i] == 'i')
        {
            input = ChangeStringAt(input, i, "&");
        } else if(input[i] == 'e')
        {
            input = ChangeStringAt(input, i, "*");
        } else if(input[i] == 'a')
        {
            input = ChangeStringAt(input, i, "#");
        }
    }
    
    // Trocar posição das letras
    for(let i=0; i<inputSize - 1; i++)
    {
        if(i%2==0)
        {
            input = SwapChars(input, i, i+1);
        }
    }
    
    // Inverter a string
    for(let i=inputSize-1; i>=0; i--) {result += input[i];}

    return result;
}

// Descriptografar a mensagem
function Decrypt(input)
{
    let result = "";
    let charBank = "abcdefghijklmnopqrstuvwxyz";
    let inputSize = input.length;
    let charBankSize = charBank.length;
    
    // Colocar a string na direção normal
    for(let i = inputSize - 1; i>=0; i--)
    {
        result += input[i];
    }
    
    // Colocar as letras em suas posições originais
    for(let i=0; i<inputSize - 1; i++)
    {
        if(i%2==0)
        {
            result = SwapChars(result, i, i+1);
        }
    }
    
    // Trocar símbolos por letras
    for(let i=0; i<inputSize; i++)
    {
        if(result[i] == '~')
        {
            result = ChangeStringAt(result, i, "u");
        } else if(result[i] == '^')
        {
            result = ChangeStringAt(result, i, "o");
        } else if(result[i] == '&')
        {
            result = ChangeStringAt(result, i, "i");
        } else if(result[i] == '*')
        {
            result = ChangeStringAt(result, i, "e");
        } else if(result[i] == '#')
        {
            result = ChangeStringAt(result, i, "a");
        }
    }
    
    
    // Reverter a Cifra de César
    for(let i=0; i<inputSize; i++) 
    {
        let tempCharBank = charBank;
        for(let j=0; j<charBankSize; j++)
        {
            if (result[i] == charBank[j]) 
            {
                let newIndex = (j - 3 + charBankSize) % charBankSize;
                result = ChangeStringAt(result, i, charBank[newIndex]);
                break;
            }
        }
    }
    
    return result;
}

/*
Não é possível mudar um char dentro de uma string.
Para isso, essa função cria versão da string em formato de array de char, 
depois retorna tudo juntado novamente.
*/
// String é a string que deve ser modificada. Index é a posição a ser alterada. NewChar é o novo caractere
function ChangeStringAt(string, index, newChar)
{
    let tempString = string.split("");
    tempString[index] = newChar;
    return tempString.join("");
}

/*
Devido ao fato dos caracteres de strings serem imutáveis individualmente no javascript,
foi necessário esta função para converter a string em uma array de char, desta forma permitindo a 
mudança de um caractere individualmente e depois juntar essa array em uma string e retornar isso.
*/
// str é a string a ser mudada, i e j são as posições a serem trocadas
function SwapChars(str, i, j) {
  let arr = [...str];      // transforma em array
  [arr[i], arr[j]] = [arr[j], arr[i]]; // troca
  return arr.join("");     // volta pra string
}




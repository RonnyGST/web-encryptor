
const savedData = localStorage.getItem("UsersList"); // Recuperando os dados salvos

var registeredUsers = [];
var currentUser = JSON.parse(localStorage.getItem("CurrentUser") || "{}");

/*JSON.parse() → reconstrói o array que estava salva como string JSON
Se não existir nada no storage, getItem retorna null, então usamos [] como fallback
*/
registeredUsers = savedData ? JSON.parse(savedData) : [];


// Pega o index do usuário atual na lista de usuários salvos
function GetCurrentUserIndex()
{
    for(let i=0; i < registeredUsers.length; i++)
    {
        if(currentUser.name === registeredUsers[i].name)
        {
            return i;
        }
    }
}

function SaveUser()
{
    registeredUsers[GetCurrentUserIndex()].history = currentUser.history;
    localStorage.setItem("UsersList", JSON.stringify(registeredUsers));
    console.log("salvo")
}

function RemoveUser()
{
    /*
    O método splice() remove o item de uma array.
    O primeiro parâmetro é o index e o segundo é a quantidade.
    */
    registeredUsers.splice(GetCurrentUserIndex(), 1);

    // Após remover o usuário indicado, salva a lista atualizada e volta para a tela de login
    localStorage.setItem("UsersList", JSON.stringify(registeredUsers)); // Salvar lista atualizada
    window.location.href = "./login.html";
}

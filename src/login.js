
const userNameField = document.getElementById("UserNameField");
const userPasswordField = document.getElementById("UserPasswordField");
const userPasswordConfirmField = document.getElementById("UserPasswordConfirmField");
const loginAlert = document.getElementById("LoginAlert");
const createAccount = document.getElementById("NewUserButton");

let isLogin = false;



function CreateNewUser()
{
  // Verificar se as senhas combinam
  if(userPasswordField.value === userPasswordConfirmField.value)
  {
    let newUser = new User(userNameField.value, userPasswordField.value, "");
    
    registeredUsers.push(newUser);
    currentUser = newUser;
    // Converter a array em JSON e depois em string para que possa ser salva.
    localStorage.setItem("UsersList", JSON.stringify(registeredUsers));
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser)); // Salvar o usuário atual (ao mudar de html as variáveis resetam)
  
    window.location.href = "./Encryptor.html"; // Desta forma posso abrir links diretamente do javascript
  } else
  {
    loginAlert.innerHTML = "Passwords do not match...";
  }
}

function Login()
{
  if(registeredUsers.length > 0)
  {
    let containsUser = false;
    for(let i=0; i < registeredUsers.length; i++)
    {
      // Se os campos preenchidos correspondem a um usuário que já existe, então faça login
      if(registeredUsers[i].name === userNameField.value && registeredUsers[i].password === userPasswordField.value)
      {
        currentUser = registeredUsers[i];
        containsUser = true;
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
        window.location.href = "./Encryptor.html";
      }
    }
    // Se após percorrer a lista de usuários não encontrar nenhum que corresponda...
    if(!containsUser)
    {
      loginAlert.innerHTML = "Incorrect username or password...";
    }
  } else 
  {
    loginAlert.innerHTML = "User does not exist...";
  }
}


// MUDAR ESTILO DO BOTÃO
userNameField.addEventListener('input', function(){
  let currentValue = userNameField.value;
  loginAlert.innerHTML = "";
  if(!!currentValue)
  {
    createAccount.disabled = false;
    createAccount.style.cursor = "pointer";
    createAccount.style.backgroundColor = "#10b981";
  } else
  {
    createAccount.disabled = true;
    createAccount.style.cursor = "not-allowed";
    createAccount.style.backgroundColor = "gray";
  }
});


// VERIFICAR SE USUÁRIO EXISTE
createAccount.addEventListener('click', function(){
  if(isLogin)
  {
    Login();
  }
  
  // Verificar se não tem nenhum usuário ainda
  if(registeredUsers.length > 0)
  {
    let containsUser = false;
    for(let i=0; i < registeredUsers.length; i++)
    {
      // Se os campos preenchidos correspondem a um usuário que já existe, então não deixe criar outra conta
      if(registeredUsers[i].name === userNameField.value)
      {
        loginAlert.innerHTML = "User name already exists!";
        containsUser = true;
      }
    }
    // Se após percorrer a lista de usuários não encontrar nenhum que corresponda, crie um usuário
    if(!containsUser)
    {
      CreateNewUser();
    }
    
  } else
  {
    CreateNewUser();
  }
});


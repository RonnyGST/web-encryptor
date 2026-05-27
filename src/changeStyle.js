
//HTML elements
const encodeButton = document.getElementById("EncodeButton");
const decodeButton = document.getElementById("DecodeButton");
const cipherSelector = document.getElementById("SelectCipher");
const passwordField = document.getElementById("Password");
var encryptDecryptButton = document.getElementById("EncryptDecryptButton");

var isEncrypt = true;
const greenColor = "#10b981";
const orangeColor = "#f59e0b";
const blackColor = "#0f172a";
const grayColor = "#93a2b7";


encodeButton.addEventListener("click", function() {
  inputField.placeholder = "Type or paste text to encode...";
  encryptDecryptButton.innerHTML = "🔒Encrypt";
  isEncrypt = true;

  encryptDecryptButton.style.backgroundColor = greenColor;
  encodeButton.style.backgroundColor = greenColor;
  decodeButton.style.backgroundColor = blackColor;
  decodeButton.style.color = grayColor;
  encodeButton.style.color = blackColor;
});

decodeButton.addEventListener("click", function() {
  inputField.placeholder = "Paste encrypted text to decode...";
  encryptDecryptButton.innerHTML = "🔓Decrypt";
  isEncrypt = false;

  encryptDecryptButton.style.backgroundColor = orangeColor;
  decodeButton.style.backgroundColor = orangeColor;
  encodeButton.style.backgroundColor = blackColor;
  encodeButton.style.color = grayColor;
  decodeButton.style.color = blackColor;
});

cipherSelector.addEventListener("change", function(selectEvent){
  switch(cipherSelector.selectedIndex)
  {
    case 0:
      passwordField.style.display = "none";
      break;

    case 1:
      passwordField.style.display = "block";
      break;
  }
});





function EncryptDecrypt()
{
  let selectedCipher = cipherSelector.selectedIndex;
  let checkInput = inputField.value;
  let checkKey = passwordField.value;

  
  // Verifica se o local para colocar a mensagem está vazio.
  if(!!checkInput)
  {
    switch(selectedCipher)
    {
      case 0:
        if(isEncrypt)
        {
          resultField.innerHTML = Encrypt(inputField.value);
          resultField.style.display = "block";
          AddElementToSidebar();
        } else{
          resultField.innerHTML = Decrypt(inputField.value);
          resultField.style.display = "block";
        }

        break;

      case 1:
        if(isEncrypt)
        {
          if(!!checkKey)
          {
            resultField.innerHTML = EncryptVigenere();
            resultField.style.display = "block";
            AddElementToSidebar();
          }
          
        } else{
          resultField.innerHTML = DecryptVigenere();
          resultField.style.display = "block";
        }

        break;
    }
  }
}



function PlayNotifyAnim()
{
  const element = document.getElementById("NotifyCopy");
  
  // Reinicia animação
  element.classList.remove("ShowNotifyAnim");
  
  void element.offsetWidth;
  element.classList.add("ShowNotifyAnim");
}

function ReturnToLoginWindow()
{
  window.location.href = "./login.html";
}

// Muda o nome do perfil de usuário
function ChangeDisplayName()
{
  document.getElementById("DisplayUserName").innerHTML = `Hello ${currentUser.name}!`;
}

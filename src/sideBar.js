
const sidebar = document.getElementById("Sidebar");
const openSidebarButton = document.getElementById("SidebarOpenButton");
const closeSidebarButton = document.getElementById("CloseSidebarButton");


openSidebarButton.addEventListener("click", function(){
    sidebar.classList.add("OpenedSidebar");
})

closeSidebarButton.addEventListener("click", function(){
    sidebar.classList.remove("OpenedSidebar");
})

document.addEventListener("click", function(event){
    // Verifica se clicou fora da Sidebar e que não clicou no botão de abrir a Sidebar
    if(!sidebar.contains(event.target) && event.target !== openSidebarButton)
    {
        sidebar.classList.remove("OpenedSidebar");
    }
});



// COPIAR CIFRA OU SENHA PARA A ÁREA DE TRANSFERÊNCIA DO USUÁRIO

/*
Aqui eu disparo um evento sempre que clico em um elemento da classe indicada (ou filho dele).
Para isso, eu faço um loop em cada elemento dessa classe e adiciono um listener para cada um.
Ao clicar neste elemento específico, ele tem a referência de si mesmo como no parâmetro "element".
Com isso posso pegar o conteúdo de cada elemento sem precisar de IDs ou coisa do tipo.
*/

// Copiar cifra ou senha, pois todos os elementos que forem filhos do elemento que tiver essa classe irá ativar o evento
document.querySelectorAll(".HistoryContent").forEach((item) => {
    item.addEventListener("click", (element) => {
        //element.target.textContent retorna o conteúdo do elemento clicado.
        navigator.clipboard.writeText(element.target.textContent);
        PlayNotifyAnim();
    });
});

// Copiar o resultado da cifra
resultField.addEventListener("click", (element) => {
    navigator.clipboard.writeText(element.target.textContent);
    PlayNotifyAnim();
});

/*
Como o elemento do botão que deleta o histórico ainda não existe,
foi preciso delegar o evento de click para todos os elementos e filtrar através do if para este código 
executar somente nos elementos com essa classe.
*/

// Deletar histórico
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("DeleteHistory")) {
        event.target.parentElement.remove();
        currentUser.history = document.getElementById("HistoryContent").outerHTML;
        SaveUser();
    }
});


function AddElementToSidebar()
{
    let newElementContent = `
        <div class="HistoryElement">
            <div class="HistoryPassword">${passwordField.value}</div> <br>
            <div class="HistoryCipher">${resultField.value}</div>
            <button class="DeleteHistory">Delete</button>
        </div>
    `

    // Jeito antigo. Fazia com que o elemento mais recente ficasse por último na lista
    //document.getElementById("HistoryContent").innerHTML += newElementContent;
    document.getElementById("HistoryContent").innerHTML = newElementContent + document.getElementById("HistoryContent").innerHTML;

    // Posso salvar o elemento HTML inteiro... Vou usar isso por enquanto por ser mais rápido.
    currentUser.history = document.getElementById("HistoryContent").outerHTML;
    SaveUser(); // Salvar o usuário
}

// Verifica se o histórico do usuário está vazio. Se estiver vazio, não tente preencher a sidebar
if(!currentUser.history)
{
    console.log("Empty History");    
} else
{
    // Pegar o histórico diretamente do banco de dados de usuários
    document.getElementById("HistoryContent").innerHTML = registeredUsers[GetCurrentUserIndex()].history
}


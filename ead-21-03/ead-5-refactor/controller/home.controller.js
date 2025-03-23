var $ctrl = this;

$ctrl.usuariosArray = [];

$ctrl.addUser = addUser;
$ctrl.removeUser = removeUser;
$ctrl.navigateTo = navigateTo;

const ids = {
    userName: "userName",
    userEmail: "email",
    usersList: "usersList"
}

function addUser() {

    var nome = document.getElementById(ids.userName).value;
    var email = document.getElementById(ids.userEmail).value;

    if (nome == "" || email == "") {

        alert("Preencha todos os campos!");

        return;

    }

    var usuario = {nome: nome, email: email};

    usuariosArray.push(usuario);

    addUserToList(usuario.nome, usuario.email);

    document.getElementById(ids.userName).value = "";
    document.getElementById(ids.userEmail).value = "";

}

function removeUser(email) {

    for (var i = 0; i < usuariosArray.length; i++) {

        if (usuariosArray[i].email === email) {

            usuariosArray.splice(i, 1);

            break;

        }

    }

    cleanUserList();

    for (var i = 0; i < usuariosArray.length; i++) {
        addUserToList(usuariosArray[i].nome, usuariosArray[i].email)
    }

}

function navigateTo(pathHtml) {
    window.location.href = pathHtml;
}

function addUserToList(userName, userEmail) {

    var li = document.createElement("li");

    li.innerHTML = userName + " - " + userEmail + " <span class='fa fa-trash' onclick='$ctrl.removeUser(\"" + userEmail + "\")'></span>";

    document.getElementById(ids.usersList).appendChild(li);

}

function cleanUserList() {
    document.getElementById("usersList").innerHTML = "";


}



var $ctrl = this;

$ctrl.navigateTo = navigateTo;
$ctrl.sendRequest = sendRequest;

function navigateTo(pathHtml) {
    window.location.href = pathHtml;
}

function sendRequest() {
    alert("Mensagem Enviada")
}



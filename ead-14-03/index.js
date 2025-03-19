var $ctrl = this;

$ctrl.loadSection = loadSection;
$ctrl.onInit = onInit;


function onInit() {
    $ctrl.loadSection('personal-informations');
}

function loadSection(sectionId) {

    document.querySelectorAll('.content section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

}


    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function () {

        if (value.length <= 11) {
            cpfInput.value = value.replace(/(\d{3})(\d{3}).(\d{3})-(\d{2})/, '$1.$2.$3-$4');
        }

    });

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function () {
        phoneInput.value = phoneInput.value.replace(/\D/g, '')
            .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    });

    const cellphoneInput = document.getElementById('cellphone');
    cellphoneInput.addEventListener('input', function () {
        cellphoneInput.value = cellphoneInput.value.replace(/\D/g, '')
            .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    });

    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', function () {
        cepInput.value = cepInput.value.replace(/\D/g, '')
            .replace(/^(\d{5})(\d{3})$/, '$1-$2');
    });

    const creditCardInput = document.getElementById('credit-card-number');
    creditCardInput.addEventListener('input', function () {
        creditCardInput.value = creditCardInput.value.replace(/\D/g, '')
            .replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, '$1 $2 $3 $4');
    });

    const cvvInput = document.getElementById('security-code');
    cvvInput.addEventListener('input', function () {
        cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 3);
    });


    const agencyInput = document.getElementById('agency');
    agencyInput.addEventListener('input', function () {
        agencyInput.value = agencyInput.value.replace(/\D/g, '').slice(0, 4);
    });

    const accountInput = document.getElementById('account-number');
    accountInput.addEventListener('input', function () {
        accountInput.value = accountInput.value.replace(/\D/g, '').slice(0, 6);
    });

    const cardExpiryInput = document.getElementById('card-expiry');
    cardExpiryInput.addEventListener('input', function () {
        cardExpiryInput.value = cardExpiryInput.value.replace(/\D/g, '')
            .replace(/^(\d{2})(\d{2})$/, '$1/$2');
    });



$ctrl.onInit();

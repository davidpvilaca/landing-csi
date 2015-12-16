(function(){
    'use strict';
    angular.module('app', [])
        .controller('evento', app);
    
    function app(){
        var vm = this;
        vm.people = {
            name: '',
            email: '',
            cel: '',
            cpf: ''
        };
        vm.subscribe = subscribe;
        
        function _validate(from){
            var isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (from === 'news'){
                return isEmail.test(vm.people.email);
            }
            var isCel = /\(\d{2}\) \d{5}-\d{4}/;
            var isCpf = function (cpf) {  
    cpf = cpf.replace(/[^\d]+/g,'');    
    if(cpf == '') return false; 
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            return false;       
    // Valida 1o digito 
    add = 0;    
    for (i=0; i < 9; i ++)       
        add += parseInt(cpf.charAt(i)) * (10 - i);  
        rev = 11 - (add % 11);  
        if (rev == 10 || rev == 11)     
            rev = 0;    
        if (rev != parseInt(cpf.charAt(9)))     
            return false;       
    // Valida 2o digito 
    add = 0;    
    for (i = 0; i < 10; i ++)        
        add += parseInt(cpf.charAt(i)) * (11 - i);  
    rev = 11 - (add % 11);  
    if (rev == 10 || rev == 11) 
        rev = 0;    
    if (rev != parseInt(cpf.charAt(10)))
        return false;       
    return true;   
};
            return !!vm.people.name.length &&
                isEmail.test(vm.people.email) && 
                isCel.test(vm.people.cel) &&
                isCpf(vm.people.cpf)
        }
        
        function subscribe(){
            var msg;
            if(!_validate('subscribe')){
                msg = "Inscrição não realizada!"
                window.alert(msg);
                return false;
            }
            msg = "Inscrição realizada com sucesso!";
            window.alert(msg);
            return true;
        }
    }
    
})();
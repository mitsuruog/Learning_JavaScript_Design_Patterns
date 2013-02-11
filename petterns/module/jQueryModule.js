function coreModule(module) {
    
    $(function(module){
        if(module.init){
            module.init();
        }
    });
    
    return module;
}

//Usage
var myModule = coreModule(function(){
    
    return {
        init: function(){
            return 'myModule init';
        }  
    };
});

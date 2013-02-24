var myModule = (function(){
    
    var module = {},
        privateVal = 'private';
        
    function privateMethod(){
        
    }
    
    //公開I/F
    module.publicVal = 'public';
    module.publicMethod = function(){
        return privateVal;
    };
    
    //エクスポート
    return module;
    
})();

//Usage

myModule.publicVal;
myModule.publicMethod();
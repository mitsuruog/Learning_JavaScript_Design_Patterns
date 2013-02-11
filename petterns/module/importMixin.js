var myModule = (function(jQ, _){
    
    function privateMethod1(){
        jQuery('#hoge').html();
    }
    
    function privateMethod2(){
        console.log(_.min([100, 1, 1000]));
    }
    
    return {
        publicMethod: function(){
            privateMethod2();
        }
    };
    
})($, _);

//Usage
myModule.publicMethod();
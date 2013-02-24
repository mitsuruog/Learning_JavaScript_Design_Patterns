var myObject = function(){
    
    var privateVal = 'private val',
        publicVal = 'my name is mitsuruog';
    
    function privateGetVal(){
        return privateVal;
    }
    
    function publicGetVal(){
        privateGetVal();
    }
    
    function publicSetVal(val){
        privateVal = val;    
    }
    
    return {
        setVal: publicSetVal,
        getVal: publicGetVal,
        name: publicVal
    }
    
};

//Usage
myObject.getVal();
myObject.name;

myObject.setVal('hoge');
myObject.getVal();
myObject.name;


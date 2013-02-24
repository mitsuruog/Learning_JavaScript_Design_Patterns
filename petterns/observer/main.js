/**
 * 
 * * ovserverを操作できるcheckboxを追加できるボタン
 * * subject（他のチェックボックスをチェックする場合に通知する）として働くcontrolチェックボックス
 * * 新しいチェックボックスを追加するためのコンテナ
 */
var $controlCheckbox = $('#control'),
    $addButton = $('#addObserver'),
    $observers = $('#observers');
    
/**
 * ConcreteSubject
 */

Extend(new Subject(), $controlCheckbox);

$controlCheckbox.on('click', function(){
    $controlCheckbox.Notify($controlCheckbox.is(':checked'));
});

$addButton.on('click', AddNewObserver);

/**
 * ConcreteObserver
 */
 
function AddNewObserver(){
    
    var $check = $('<input type="checkbox" />');
    
    Extend(new Observer(), $check);
    
    //OberverのUpdate関数を上書き
    $check.Update = function(value){
        if(!!value){
            $(this).attr('checked', !!value);
        }else{
            $(this).removeAttr('checked');
        }
    };
    
    //新しいObserverをObserverListに追加する
    $controlCheckbox.AddObserver($check);
    
    //画面のobserversに追加する
    $observers.append($check);
    
}

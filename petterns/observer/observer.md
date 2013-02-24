# オブザーバパターン

オブザーバパターンは、observer（観察者）がsubject（観察対象）のリストを管理し、それらに対して自動的に状態の変更を通知する。
subjectは何か必要がある場合にobserverに対して通知を行い、observerが通知をブロードキャストする。
subjectにて通知が不要になった場合は、observerのリストから削除することができる。

## オブザーバパターンの登場人物

+ **Subject：**　observerの管理リストとの状態を維持するクラス。追加・削除。
+ **Observer：**　subjectの変更を通知するためのインターフェースを提供する
+ **ConcreteSubject：**　実際の観察対象
+ **ConcreteObserver：**　実際の観察者

observerがsubjectを管理するリストの部分。

````
var ObserverList, extend;

ObserverList= function(){
    this.observerList = {};
};

ObserverList.prototype.Add = function(obj){
  return this.observerList.push(obj);  
};

ObserverList.prototype.Empty = function(){
    this.observerList = [];
};

ObserverList.prototype.Count = function(){
    return this.observerList.length;
};

ObserverList.prototype.Get = function(index){
  
  if(index > -1 && index < this.observerList.length){
      return this.observerList[index];
  }
    
};

ObserverList.prototype.Insert = function(obj, index){
  
  var pointer = -1;
  
  if(index === 0){
      this.observerList.unshift(obj);
      pointer = index;
  }else if(index === this.observerList.length){
      this.observerList.push(obj);
      pointer = index;
  }
  return pointer;
  
};

ObserverList.prototype.IndexOf = function(obj, startIndex) {
  
  var i = startIndex,
    pointer = -1;
    
    while(i < this.observerList.length){
        if(this.observerList[i] === obj){
            pointer = i;
        }
        i++;
    }
    return pointer;
    
};

ObserverList.prototype.RemoveAt = function(index){
  
  if(index === 0){
      this.observerList.shift();
  }else if(index === this.observerList.length - 1){
      this.observerList.pop();
  }
  
};

extend = function(extension, obj){
    
    for(var key in extension){
        obj[key] = extension[key];
    }
    
};
````


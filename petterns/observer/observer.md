# オブザーバパターン

オブザーバパターンは、observer（観察者）がsubject（観察対象）のリストを管理し、それらに対して自動的に状態の変更を通知する。
subjectは何か必要がある場合にobserverに対して通知を行い、observerが通知をブロードキャストする。
subjectにて通知が不要になった場合は、observerのリストから削除することができる。

## オブザーバパターンの登場人物

+ **Subject：**　observerの管理リストとの状態を維持するクラス。追加・削除。
+ **Observer：**　subjectの変更を通知するためのインターフェースを提供する
+ **ConcreteSubject：**　実際の観察対象
+ **ConcreteObserver：**　実際の観察者


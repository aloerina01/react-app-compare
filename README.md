# react-app-compare
reactアプリのデータフロー・ロジック周りを比較する

## 仕様
* サーバからAPI経由でデータを取得し画面に表示するアプリ
* APIは2本
  * 1本は表示しうるコンテンツすべて(20件程度)がレスポンスに含まれるAPIでCDNに乗っている
  * もう1本はユーザの属性情報(性別、地域、趣味嗜好、またはABテストのグループなど)がレスポンスされるAPIでキャッシュされない
* フロントでは2本のAPIを叩き、ユーザ固有の情報をもとにどのコンテンツを表示するか(=表示対象)を判断する
* コンテンツは`id`, `title`, `description`, `imageSrc`の4つのプロパティを持つ
* コンテンツの中には「Banditアルゴリズム対象」のものが交じることがある
* Banditアルゴリズム対象のコンテンツは上記4つのプロパティに加え`arms`プロパティを持つ
  * armsプロパティはオブジェクトで、`armId`をkeyとし、valueには`title`, `description`, `imageSrc`プロパティを含むオブジェクトを持つ
* リロードをトリガーとし表示対象からランダムで5件表示する
* 表示されたものに対しユーザは「like」と「dislike」を選択でき、dislikeになったものは表示対象から外す
* like, dislikeされずに3回表示されたものは表示対象から外す
* likeされたものはその印を表示し、表示対象から外れなくなる
* 表示対象がすべて除外され0件になってしまったら、表示対象からランダムで5件表示する

## コンテンツAPIのレスポンスサンプル
```js
contents: [
  {
    id: 1
    title: 'hoge',
    description: 'xxxxxxxxxxxxxxxx',
    imageSrc: '/assets/1000.jpg'
  },
  {
    id: 2
    title: 'fuga',
    description: 'yyyyyyyyyyyyyyyyy',
    imageSrc: '/assets/2000.jpg',
    arms: {
      arm1: {
        title: `fffffuga`,
        description: 'yyyyyyyyyyyyyyyyy',
        imageSrc: '/assets/2000.jpg'
      },
      arm2: {
        title: `fugaaaa`,
        description: 'yyyyyyyyyyyyyyyyy',
        imageSrc: '/assets/2000.jpg'
      }
  }, ...
```

## 実装ルール
* Shared以下のものはいじらない
  * React Functional Componentで実装されたView
  * APIのMOCK
* データフロー、ビジネスロジックを実装する
* 画面には表示要素を5件と、それぞれの要素に対する「like」「dislike」ボタンを表示する
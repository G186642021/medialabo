// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

let b = document.querySelector('#print');
b.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="seisu"]');
    let h = i.value;
    let yoso = Number(h);   
    
    let result = document.querySelector('#result')
    let p = document.createElement('p');

    kaisu++;
    let s = document.querySelector('span#kaisu');
    s.textContent = kaisu;

    let a = document.querySelector('div#seisu');
    a.textContent = yoso;

    
    if (yoso == kotae) {
        result.textContent="正解ですおめでとう";
    } else if (kaisu == 3) {
        result.textContent="まちがい.残念でした答えは" +kotae+ "です";
    } else if (kaisu >= 4) {
        result.textContent="答えは" +kotae+ "でした.すでにゲームは終わっています";
    } else if (yoso < kotae) {
        result.textContent="まちがい.答えはもっと大きいですよ";
    } else if (yoso > kotae) {
        result.textContent="まちがい.答えはもっと小さいですよ";
    }
}

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
    let i = document.querySelector('select[name="prefecture"]');
    let genre = i.value;
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.results.shop[9].name);
    
    let G001 = document.querySelector('#G001');
    G001.textContent = data.results.shop[9].name;


    console.log(data.results.shop[0].name);
    
    let G002 = document.querySelector('#G002');
    G002.textContent = data.results.shop[0].name;


    console.log(data.results.shop[2].name);
    
    let G003 = document.querySelector('#G003');
    G003.textContent = data.results.shop[2].name;
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
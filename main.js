let game = {
    words: [
        `html`,
        `!doctype`,
        `<head></head>`,
        `lang`,
        `en`,
        `ja`,
        `<meta>`,
        `charset`,
        `UTF-8`,
        `content`,
        `name`,
        `<title></title>`,
        `<body></body>`,
        `<br>`,
        `<h1></h1>`,
        `<p></p>`,
        `<a>`,
        `href`,
        `<img>`,
        `src`,
        `alt`,
        `<ul></ul>`,
        `<li></li>`,
        `<table></table>`,
        `<th></th>`,
        `<tr></tr>`,
        `<td></td>`,
        `<iframe>`,
        `width`,
        `heght`,
        `frameborder`,
        `allow`,
        `allowfullscreen`,
        `<script></script`,
        `document.write( );`,
        `console.log( );`,
        `true`,
        `false`,
        `let`,
        `if( ){ }elseif{ }else{ }`,
        `!`,
        `||`,
        `&&`,
        `===`,
        `==`,
        `!==`,
        `!=`,
        `for( ; ; ){ }`,
        `i++`,
        `let numbers=[342,493,532,693];`,
        `numbers.push( )`,
        `numbers.length`,
        `function`,
        `return`,
        `id`,
        `getTime`,
        `getElementById`,
        `innerText`,
        `setInterval()`,
        `confirm()`,
        `onkeydown`,
        `Date.now();`,
        `background-color`,
        `link`,
        `rel`,
        `list-style-type`,
        `square`,
        `margin`,
        `10px`,
        `font-weight`,
        `bold`,
        `transform`,
        `rotateX`,
        `60deg`,
        `color`,
        `opacity`,
        `use strict`,
        `const`,
        `var`,
        `charCodeAt`,
        `replaceAll`,
        `assert`,
        `onclick`,
        `createElement`,
        `<div></div>`,
        `class`,
        `deta-text`,
        `deta-show-count`,
        `async`,
        `<input />`,
        `type`,
        `text`,
        `size`,
        `maxlength`,
        `<button />`,
        
    ],
    currentWord: ``,
    matchedIndex: 0,
    startTime: null,
    isPlaying: false,
    mainArea: document.getElementById(`main`),
    resultArea: document.getElementById(`result`),
    start: function() {
        game.isPlaying = true;
        game.startTime = Date.now();
        game.setWord();
    },
    setWord: function() {
        game.currentWord = game.words.shift() || '';
        game.matchedIndex = 0;
        game.displayWord();
    },
    displayWord: function () {
        game.mainArea.innerText = `_`.repeat(game.matchedIndex) + game.currentWord.substring(game.matchedIndex); 
    },

    isFinished: function(){
        return game.words.length === 0;
    },
    displayResult: function(){
        const currentTime = Date.now();
        const elapsedTime = formattedSeconds(currentTime - game.startTime);
        game.resultArea.innerText = `${elapsedTime}秒かかりました。\nもう一度プレイする場合にはブラウザをリロードしてください。`;
        game.isPlaying = false;
    }
};

document.onclick = () => {
    if (game.isPlaying === false) {
        game.start();
    }
};

document.onkeydown = (event) => {
    if(event.key !== game.currentWord[game.matchedIndex]){
        return;
    }

    game.matchedIndex++;
    game.displayWord();
    if (game.matchedIndex === game.currentWord.length) {
        if (game.isFinished()){
            game.displayResult();
        }
        game.setWord();
    }
};

//utils
function formattedSeconds(ms){
    return (ms / 1000).toFixed(2);
}
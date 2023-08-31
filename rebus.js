class RebusWord{
    constructor(word, imagePath) {
        this.rebus = document.getElementById("rebus");
        let content = document.createElement('div');

        // background image
        let div = document.createElement('div');
        div.style.backgroundImage = "url('"+imagePath+"')";
        div.style.backgroundSize = "contain";
        content.appendChild(div);

        // word input field
        let input = document.createElement('input');
        input.classList.add('rebusInput');
        content.appendChild(input);

        this.rebus.appendChild(content)
    }
}
class Rebus{
    constructor(wordList){
        this.game = document.getElementById("game");
        this.wordList = wordList;
        this.rebusWordList = [];
        for (let i = 0; i < wordList.length; i++){
            let rebusWord = new RebusWord(wordList[i][0], wordList[i][1])
            this.rebusWordList.push(rebusWord);
        }

        let submit = document.createElement('input');
        submit.type = "submit";
        submit.addEventListener('click', ()=>{rebus.submit()});
        this.game.appendChild(submit);
    }
    submit(){
        let answerCheck = true;
        let inputList = document.getElementsByClassName("rebusInput")
        for (let i = 0; i < this.rebusWordList.length; i++){
            if (inputList[i].value !== this.wordList[i][0]){
                answerCheck = false
            }
        }
        if (answerCheck){
            document.getElementById('pogingen').innerText = "je hebt alles goed";
            document.getElementById('pogingen').style.color = "limegreen";
            window.open("index.html", "_self");
        }else {
            document.getElementById('pogingen').innerText = "je hebt nog niet alles goed";
            document.getElementById('pogingen').style.color = "red";
        }
    }

}
let rebus = new Rebus([["h", 'images/SignH.png'], ["a", 'images/SignA.png'], ["a", 'images/SignA.png'], ["r", 'images/SignR.png'], ["d", 'images/SignD.png']]);

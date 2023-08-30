class RebusWord{
    constructor(word, imagePath) {
        this.rebus = document.getElementById("rebus");

        // background image
        let div = document.createElement('div');
        div.style.backgroundImage = "url('"+imagePath+"')";
        div.style.backgroundSize = "contain";
        div.style.width = "140px";
        div.style.height = "140px";
        this.rebus.appendChild(div);

        // word input field
        let input = document.createElement('input');
        input.classList.add('rebusInput');
        this.rebus.appendChild(input);
    }
}
class Rebus{
    constructor(wordList){
        this.rebus = document.getElementById("rebus");
        this.result = document.createElement('p');
        this.result.style.fontSize = "30px";
        this.result.setAttribute("id", "result");
        this.rebus.appendChild(this.result)
        this.wordList = wordList;
        this.rebusWordList = [];
        for (let i = 0; i < wordList.length; i++){
            let rebusWord = new RebusWord(wordList[i][0], wordList[i][1])
            this.rebusWordList.push(rebusWord);
        }

        let submit = document.createElement('input');
        submit.type = "submit";
        submit.addEventListener('click', ()=>{rebus.submit()});
        this.rebus.appendChild(submit);
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
            document.getElementById('result').innerText = "je hebt alles goed";
            document.getElementById('result').style.color = "limegreen";
        }else {
            document.getElementById('result').innerText = "je hebt nog niet alles goed";
            document.getElementById('result').style.color = "red";
        }
    }

}
let rebus = new Rebus([["appel", 'images/apple.png'], ["peer", 'images/pear.png'], ["aardbei", 'images/strawberry.gif']]);

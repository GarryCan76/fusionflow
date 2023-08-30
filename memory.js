let ok = [["appel", 'images/apple.png'], ["peer", 'images/pear.png'], ["kers", 'images/cherry.png'], ["avocado", 'images/avocado.png'],
    ["watermeloen", 'images/watermelon.png'], ["aardbei", 'images/strawberry.gif']];
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
class Memory{
    constructor(cardList) {

        this.cardList = cardList
        this.selectedCard = false;
        this.matches = 0;
        this.unlock = true;
    //    assign id to cards
        this.cardListShufled = [];
        for (let i = 0; i < cardList.length; i++){
            this.cardListShufled.push([i, cardList[i][0], "text"]);
            this.cardListShufled.push([i, cardList[i][1], "image"]);
        }
        shuffle(this.cardListShufled);
        for (let i = 0; i < this.cardListShufled.length; i++){
            this.cardListShufled[i].push(i)
            let div = document.createElement('div');
            div.addEventListener("click", ()=>{
                mem.check(this.cardListShufled[i])
            });
            div.setAttribute("id", "card");
            if (this.cardListShufled[i][2] === "text"){
                let p = document.createElement('p');
                p.innerText = this.cardListShufled[i][1];
                div.appendChild(p)
            }else {
                let imgDiv = document.createElement('div')
                imgDiv.style.width = "100%"
                imgDiv.style.height = "100%"
                imgDiv.style.backgroundImage = "url('"+this.cardListShufled[i][1]+"')";
                div.appendChild(imgDiv)
            }

            document.getElementById("memory").appendChild(div)
        }
    }
    async check(card) {
        if (this.selectedCard === false && this.selectedCard[3] !== card[3]) {
            document.getElementById('memory').children[card[3]].children[0].style.display = "flex";
            this.selectedCard = card;
        } else if (this.selectedCard[3] !== card[3] && this.unlock){
            this.unlock = false;
            document.getElementById('memory').children[card[3]].children[0].style.display = "flex";
            if (this.selectedCard[0] === card[0]) {
                this.matches += 1;
                if (this.matches === this.cardList.length){
                    console.log("you win")
                }
                this.unlock = true;
                this.selectedCard = false;
            } else {
                await delay(1000);
                document.getElementById('memory').children[card[3]].children[0].style.display = "none";
                document.getElementById('memory').children[this.selectedCard[3]].children[0].style.display = "none";
                this.selectedCard = false;
                this.unlock = true;
            }
        }
    }
}
let mem = new Memory(ok)


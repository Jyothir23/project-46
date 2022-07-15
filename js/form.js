class Form{
    constructor(){
    this.input= createInput("").attribute("placeholder","Enter Your Name")
    this.playButton= createButton("Play")
    }


setElementsPosition() {
this.input.position(width/2-110,height/2-100)
this.playButton.position(width/2-90,height/2-20)

}

setElementsStyle(){
    this.input.class("customInput")
    this.playButton.class("customButton")
}

display(){
    this.setElementsPosition();
    this.setElementsStyle();
}

}
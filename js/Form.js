class Form {
  constructor() {
    this.input=createInput("Name")
    this.button=createButton("Play")
    this.greeting=createElement("h2")
    
  }
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
 // var input = createInput("Name");
 // var button = createButton('Play');
    
  this.input.position(130, 160);
  this.button.position(250, 200);
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();



    player.name=this.input.value()

    playerCount+=1;
    
    player.updateCount(playerCount)

    this.greeting.html("Hello "+ player.name)
    this.greeting.position(130,100)


  })



  // button.mousePressed(function(){
  // input.hide();
  // button.hide();

  //     var name = input.value();
      
  //    // playerCount+=1;
  //     //player.update(name)
  //     //player.updateCount(playerCount);
  //     var greeting = createElement('h3');
  //     greeting.html("Hello " + name )
  //     greeting.position(130, 160)
  //   });

  }
}

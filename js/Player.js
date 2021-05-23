class Player{

    constructor(){
    
    }

    //get the playerCount  reading data from the database on() or once()
    getCount(){
        //to read the data;
    var playerCountRef= database.ref('playerCount')
    playerCountRef.on("value",(data)=>{
        playerCount=data.val()
    })
    
    }

    //update the count to the database write to the database set() or update()
    //to write the playerCount;
    updateCount(count){
    database.ref('/').update(
        {
            playerCount:count
        }
    )
    }
}

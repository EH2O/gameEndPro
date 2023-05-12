var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 640,
    height: 640,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 1500 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    } 
  };
  
  var game = new Phaser.Game(config);
  var level = 2;
  var input;
  var lock = 0;
  var deaths = 0;
  var clicks = 0;
  var playerXSpawn = 0;
  var playerYspawn = 0;
  var currentClicks = 0;  
  

  function preload() {

    if(level == 1){
        this.load.tilemapTiledJSON('map', 'assets/map1.json');
        this.load.image('tiles', 'assets/tiles2.png')
        this.load.image('player', 'assets/player.png'); 
        playerXSpawn = 100;
        playerYspawn = 450;
    }
    if(level == 2){
        this.load.tilemapTiledJSON('map', 'assets/map2.json');
        this.load.image('tiles', 'assets/tiles2.png')
        this.load.image('player', 'assets/player.png'); 
        playerXSpawn = 90;
        playerYspawn = 100;
    }
  
    // simple coin image

  }
  

function create() {
    input=this.input;

    const map = this.make.tilemap({ key: 'map' })
    const tileset = map.addTilesetImage('Sprits', 'tiles')

    groundLayer = map.createDynamicLayer('Ground', tileset, 0, 0);
   
    groundLayer.setCollisionByExclusion([-1]);
  
    deathLayer = map.createDynamicLayer('Death', tileset, 0, 0);

    deathLayer.setCollisionByExclusion([-1]);

    goalLayer = map.createDynamicLayer('Goal', tileset, 0, 0);

    goalLayer.setCollisionByExclusion([-1]);


    deathC = this.add.text(0, 0, 'Deaths: 0', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#ff0000', fontSize: '32px' });
    clickC = this.add.text(0, 40, 'Jumps: 0', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#ffff00', fontSize: '32px' });
    clickTotC = this.add.text(400, 0, 'Total jumps: 0', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#ffff00', fontSize: '32px' });
    this.cameras.main.setBackgroundColor("#d5d5d5");
    player = this.physics.add.sprite(200, 200, 'player'); 
    player.setBounce(0); 
    
   
  

  
    cursors = this.input.keyboard.createCursorKeys();
        
    this.physics.add.collider(player, deathLayer, function () {
      player.x = playerXSpawn;
      player.y = playerYspawn
      player.setVelocity(0);
      deaths ++;
      clicks += currentClicks;
      deathC.setText("Deaths: " + deaths);
      clickTotC.setText("Total jumps: " + clicks);
      currentClicks = 0;

    });
    this.physics.add.collider(player, groundLayer, function () {
      player.setVelocity(0);
    });
    this.physics.add.collider(player, goalLayer, function () {
      console.log("You WIN!")
      player.setVelocity(0);
      
    });


    player.setCollideWorldBounds(false,true,true,true);
        // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // make the camera follow the player
    player.x = playerXSpawn;
    player.y = playerYspawn;
    player.setScale(1);
    player.flipX =true;

  }
  

  
  function update() {
    player.setDrag(100);

    if(player.y > 4000){
      player.y = playerYspawn;
      player.x = playerXSpawn;
      player.setVelocity(0);
    }



    this.input.on('pointerdown', pointer => {
        if(lock <= 0){
          this.physics.moveTo(player,input.x,input.y,-780);
          lock++;
          checkIfFlip(player, input);
          currentClicks++;
    
          clickC.setText("Jumps: " + currentClicks)
        }
    });
    this.input.on('pointerup', pointer => {
      if(lock > 0){
        lock -= 1;
      }
  });

 

  }
function checkIfFlip(player, input){
  if(player.x < input.x){
    player.flipX = false;
  }else{
    player.flipX = true;
  }
}
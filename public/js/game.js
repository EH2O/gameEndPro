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
  
  function preload() {
    this.load.tilemapTiledJSON('map', 'assets/map1.json');
    // tiles in spritesheet 
 
    this.load.image('tiles', 'assets/tiles2.png')
    this.load.image('player', 'assets/player.png');
    // simple coin image

  }
  
var input;
var lock = 0;
var deaths = 0;
var clicks = 0;
var currentClicks = 0;

  function create() {
    input=this.input;

    const map = this.make.tilemap({ key: 'map' })
    const tileset = map.addTilesetImage('Sprits', 'tiles')

     groundLayer = map.createDynamicLayer('Ground', tileset, 0, 0);
    // the player will collide with this layer
    groundLayer.setCollisionByExclusion([-1]);
  
    deathLayer = map.createDynamicLayer('Death', tileset, 0, 0);
    // the player will collide with this layer
    deathLayer.setCollisionByExclusion([-1]);
    // "Ground" layer will be on top of "Background" layer
    goalLayer = map.createDynamicLayer('Goal', tileset, 0, 0);
    // the player will collide with this layer
    goalLayer.setCollisionByExclusion([-1]);

      // "Ground" layer will be on top of "Background" layer
    deathC = this.add.text(0, 0, 'Deaths: 0', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#ff0000', fontSize: '32px' });
    clickC = this.add.text(0, 40, 'Jumps: 0', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#ffff00', fontSize: '32px' });
    clickTotC = this.add.text(400, 0, 'Total jumps: 0', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#ffff00', fontSize: '32px' });
    this.cameras.main.setBackgroundColor("#d5d5d5");
    player = this.physics.add.sprite(200, 200, 'player'); 
    player.setBounce(0); 
    
   
  
    player.setCollideWorldBounds(true); // don't go out of the map
  
    cursors = this.input.keyboard.createCursorKeys();
        
    this.physics.add.collider(player, deathLayer, function () {
      player.x = 100;
      player.y = 460
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



        // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // make the camera follow the player
    player.x = 100;
    player.y = 400;
    player.setScale(1);
    player.flipX =true;

  }
  

  
  function update() {
    player.setDrag(100);

    if(player.y > 480){
      player.y = 400;
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
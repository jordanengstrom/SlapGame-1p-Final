//CONTROLLER RESPONSIBILITIES:
    // User controls, interactions between the data and the user
    // Draw function
    // giveWeapon
    // attack
    // Page reload

function SlapController() {
    //private
    var slapService = new SlapService();

    /////////// HTML manipulation for Target(s) ///////////
    document.getElementById('target1-name').innerText = slapService.getPlayer(0);

    update = function update() {
        document.getElementById('health1').innerText = slapService.getHealth(0);
        document.getElementById('hits1').innerText = slapService.getHits(0);
        document.getElementById('prog-bar1').style.width = slapService.getHealth(0) + '%';
    }
    
    //public
     //Given target, add weapon choice to Target.weapons
    this.giveWeapon = function giveWeapon(playerIndex, choice) {
        slapService.giveWeapon(playerIndex, choice);
    }

    this.attack = function attack(playerIndex, attackType) {
        slapService.attack(playerIndex, attackType);
        update();
    }

    update();
}
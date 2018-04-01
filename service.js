// SERVICE RESPONSIBILITIES:
    // Service is responsible for all data and data manipulation

function SlapService() {
    // private
    function Target(name, slap, punch, kick) {
        this.name = name;
        this.health = 100;
        this.hits = 0;
        this.weapons = [];
        this.attacks = {
            slap: slap,
            punch: punch,
            kick: kick
        };
    }

    ///////////////// Creating game players ///////////////////
        var players = [];
        var Po = new Target("Po", 2, 4, 5);
        players.push(Po);



    this.getHealth = function getHealth(playerIndex) {
        var target = players[playerIndex];
        console.log("Health: " , target);
        return target.health;
    }

    this.getPlayer = function getPlayer(playerIndex) {
        var target = players[playerIndex];
        return target.name;
    }

    this.getHits = function getHits(playerIndex) {
        var target = players[playerIndex];
        return target.hits
    }

    ///////////////// WEAPONS ///////////////////
    function Weapon(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    }

    var weapons = {
        // Leave positive numbers here. We subtract them later.
        shuriken: new Weapon("shuriken", 2, "little damage"),
        katana: new Weapon("katana", 3, "medium damage"),
        nunchaku: new Weapon("nunchaku", 5, "very ouch")
    }

    //Given target, add weapon choice to Target.weapons
    this.giveWeapon = function giveWeapon(playerIndex, choice) {
        var target = players[playerIndex];
        var weapon = weapons[choice];
        if(!target.weapons.includes(weapon)){
            target.weapons.push(weapon);
        }    
    }

    ///////////////// addMods function ///////////////////
    function addMods(target) {
        // var target = players[playerIndex] --> already aliased by attack function
        var sum = 1;
        if (target.weapons.length !== 0) {
            sum = 0
            for (var i = 0; i < target.weapons.length; i++) {
                sum += target.weapons[i].modifier;
            }
        }
        return sum;
    }


    //public
    this.attack = function attack(playerIndex, attackType) {
        var target = players[playerIndex];
        target.health -= target.attacks[attackType] * addMods(target);
        target.hits += 1;
        if (target.health <= 0) {
            alert("Successful K.O.!");
            window.location.reload(); // this should double as my reset function
            target.health = 0;
        }
    }
}
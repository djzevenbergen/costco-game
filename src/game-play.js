import { Character } from './../src/characters.js';
import { PizzaCutter } from './../src/characters.js';
import { ChickenCooker } from './../src/characters.js';
import { ProduceStocker } from './../src/characters.js';
import { DoorPerson } from './../src/characters.js';
import { Supervisor } from './../src/characters.js';
import { Manager } from './../src/characters.js';
import { StoreManager } from './../src/characters.js';


export class Game {
  constructor(){
    this.characters = [];
  }
  addCharacter(name, characterType) {
     if (characterType === 'pizzaCutter'){
      let character = new PizzaCutter(name, characterType);
      this.characters.push(character);
    } else if (characterType === 'chickenCooker') {
      let character = new ChickenCooker(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'produceStocker') {
      let character = new ProduceStocker(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'doorPerson') {
      let character = new DoorPerson(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'supervisor'){
      let character = new Supervisor(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'manager') {
      let character = new Manager(name, characterType);
      this.characters.push(character);
      return characterType;  
    } else if (characterType === 'storeManager') {
      let character = new StoreManager(name, characterType);
      this.characters.push(character);
      return characterType;
    } 
  }

  startGame(name, characterType){
    this.addCharacter(name, characterType);
    
    this.characters.push(new Supervisor("Devious DJ", "supervisor"));
    this.characters.push(new ChickenCooker("Malevolent Mikah", "chickenCooker"));
    this.characters.push(new Supervisor("Needling Nitun", 'supervisor'));
    this.characters.push(new Manager("Joyless Julia", "manager"));
    this.characters.push(new StoreManager("Juanita", "storeManager"));
  }


  chooseOpponent(){
    let ranNumber = Math.floor(Math.random() * characters.length) + 1;
    return ranNumber;
  }

  diceRoll(){
    let dicePair = [];
    for (i = 0; i < 2; i++) {
      let ranNumber = Math.floor(Math.random() * 6) + 1;
      dicePair.push(diceNumber);
    }
    return dicePair;
  }

  battle(){
    let enemyIndex = chooseOpponent();

    


    let roll = diceRoll();

    



  }

};

//let ranNumber = Math.floor(Math.random() * 6)+1;
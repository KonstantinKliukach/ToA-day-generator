import getRandomInt from "./getRandomInt";

class DiceRoller {
  static rollD20() {
    return getRandomInt(1, 20);
  }
}

export default DiceRoller;

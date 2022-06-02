class Die {
    constructor(size=6) {
        this.current_value = null;
        this.size = size;
    }

    roll() {
        this.current_value = randInt(this.size);
    }
}

let randInt = (max, min=1) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let gen_pairs = (dice_results) => {
    let pairs = [];
    let pairs_of_pairs = [];
    let number_of_dice_rolls = dice_results.length;
    for (let i = 0; i < number_of_dice_rolls; i++) {
        let current_el = dice_results.pop(0);
        dice_results.forEach((j) => {
            pairs.push([current_el, j]);
        })
    }

    let number_of_pairs = pairs.length
    for (let i = 0; i < number_of_pairs; i++) {
        let current_el = pairs.pop(0)
        pairs.forEach((j) => {
            if(!(j.includes(current_el[0])) & !(j.includes(current_el[1]))){
                let pair0_value0 = current_el[0].current_value
                let pair0_value1 = current_el[1].current_value
                let pair1_value0 = j[0].current_value
                let pair1_value1 = j[1].current_value
                pairs_of_pairs.push([[pair0_value0, pair0_value1],[pair1_value0, pair1_value1]])                
            }
        })
    }

    return pairs_of_pairs
}

let roll_dice = (numberOfDice, sizeOfDice) => {
    let dice_rolls = [];
    let i = 0;
    do {
        die = new Die(size=sizeOfDice);
        die.roll();
        dice_rolls.push(die);
        i += 1;

    } while (i < numberOfDice);

    return dice_rolls
}


const args = process.argv.slice(2);
console.log(gen_pairs(roll_dice(args[0], args[1])))
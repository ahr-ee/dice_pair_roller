from random import randint
from typing import List, Tuple
from sys import argv


class Die():
    def __init__(self, size=6):
        self.current_value = None
        self._size = size

    def roll(self):
        self.current_value = randint(1, self._size)


def gen_pairs(dice_results: List[Die]) -> List[Tuple[int]]:
    pairs = []
    pairs_of_pairs = []
    number_of_dice_rolls = len(dice_results)
    for _ in range(0, number_of_dice_rolls):
        current_el = dice_results.pop(0)
        for j in dice_results:
                pairs.append((current_el,j))

    number_of_pairs = len(pairs)

    for _ in range(0, number_of_pairs):
        current_el = pairs.pop(0)
        for j in pairs:
            if ((current_el[0] not in j) & (current_el[1] not in j)):
                pair0_value0 = current_el[0].current_value
                pair0_value1 = current_el[1].current_value
                pair1_value0 = j[0].current_value
                pair1_value1 = j[1].current_value
                pairs_of_pairs.append(((pair0_value0, pair0_value1),(pair1_value0, pair1_value1)))

    return pairs_of_pairs

def roll_dice(number_of_dice:int, size_of_dice:int) -> List[Die]:
    dice_rolls = []
    for _ in range(0, number_of_dice):
        die = Die(size=size_of_dice)
        die.roll()
        dice_rolls.append(die)

    return dice_rolls



if __name__ == '__main__':
    dice_rolls = roll_dice(int(argv[1]), int(argv[2]))
    pairs_of_pairs = gen_pairs(dice_rolls)
    print(pairs_of_pairs)
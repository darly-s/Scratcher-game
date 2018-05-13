import bonfireImage from '../../../../assets/images/scratch-image/magic_forest_bonfire.png';
import bowImage from '../../../../assets/images/scratch-image/magic_forest_bow.png';
import leafImage from '../../../../assets/images/scratch-image/magic_forest_leaf.png';
import ropeImage from '../../../../assets/images/scratch-image/magic_forest_rope.png';
import tentImage from '../../../../assets/images/scratch-image/magic_forest_tent.png';

/**
 * Change card image based on random number
 *
 * @param {number} params - Random number from 0 to 4
 * @returns {blob}        - Image instance
 */

export function chooseCard(params) {
    switch (params) {
        case 0:
            return bonfireImage;
        case 1:
            return bowImage;
        case 2:
            return leafImage;
        case 3:
            return ropeImage;
        case 4:
            return tentImage;
    }
}

/**
 * In the case of winning selected an image, which will be present 3 times
 *
 * @param {number} rate   - Random number from 0 to 1
 * @returns {blob}        - Image instance
 */
export function chooseWinner(rate) {
    if (rate <= (10 / 30)) {
        return bonfireImage;
    } else if (rate <= ((8 + 10) / 30)) {
        return bowImage;
    } else if (rate <= ((6 + 8 + 10) / 30)) {
        return leafImage;
    } else if (rate <= ((4 + 6 + 8 + 10) / 30)) {
        return ropeImage;
    } else {
        return tentImage;
    }
}

/**
 * In the case of winning selected an image, which will be present 3 times
 *
 * @param {blob} params   - Winner Image instance
 * @returns {number}      - Amount of coins
 */
export function checkWinnerAmount(params) {
    switch (params) {
        case bonfireImage:
            return 25;
        case bowImage:
            return 30;
        case leafImage:
            return 35;
        case ropeImage:
            return 50;
        case tentImage:
            return 100;
    }
}

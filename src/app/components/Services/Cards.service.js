import bonfireImage from '../../../../assets/images/scratch-image/magic_forest_bonfire.png';
import bowImage from '../../../../assets/images/scratch-image/magic_forest_bow.png';
import leafImage from '../../../../assets/images/scratch-image/magic_forest_leaf.png';
import ropeImage from '../../../../assets/images/scratch-image/magic_forest_rope.png';
import tentImage from '../../../../assets/images/scratch-image/magic_forest_tent.png';

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

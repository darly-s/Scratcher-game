import ExpoPixi from 'expo-pixi';

export function disappointed() {
}

export function happyBonus() {
}

export function happyCard() {
}

export function idle() {
}

export function loading() {
}

export function worry() {
}

const Animations = {
    disappointed: {
        start: 'red_disappointed_st',
        loop: 'red_disappointed_loop',
        end: 'red_disappointed_end'
    },
    happyBonus: {
        start: 'red_happy_bonus_st',
        loop: 'red_happy_bonus_loop',
        end: 'red_happy_bonus_end'
    },
    happyCard: {
        start: 'red_happy_card_st',
        loop: 'red_happy_card_loop',
        end: 'red_happy_card_end'
    },
    idle: {
        start: 'red_idle_st',
        loop: 'red_idle_loop',
        end: 'red_idle_end'
    },
    loading: {
        start: 'red_loading_screen_animation_st',
        loop: 'red_loading_screen_animation_loop',
        end: 'red_loading_screen_animation_end'
    },
    worry: {
        start: 'red_worry_st',
        loop: 'red_worry_loop',
        end: 'red_worry_end'
    }
};

/**
 *
 * Append WebGL context for character animation
 *
 * @param {object} context - WebGL context for character animation
 *
 */

export default async context => {
    const app = ExpoPixi.application({
        context,
        transparent: true,
    });

    app.stage.interactive = true;

    const red = await ExpoPixi.spineAsync({
        json: require('../../../../assets/character-assets/red.json'),
        atlas: require('../../../../assets/character-assets/red.atlas'),
        assetProvider: {
            'red.png': require('../../../../assets/character-assets/red.png'),
        },
        backgroundColor: 'transparent',
    });

    red.x = app.renderer.width - (app.renderer.width / 2);
    red.y = app.renderer.height - (app.renderer.height / 3);

    red.scale.set((app.renderer.height / red.height) / 2);

    red.stateData.setMix(Animations.idle.start, Animations.idle.loop, 0.2);
    red.stateData.setMix(Animations.idle.loop, Animations.idle.end, 0.4);
    red.stateData.setMix(Animations.idle.end, Animations.idle.start, 0.4);
    red.stateData.setMix(Animations.idle.end, Animations.happyBonus.start, 0.2);
    red.stateData.setMix(Animations.happyBonus.start, Animations.happyBonus.loop, 0.4);
    red.stateData.setMix(Animations.happyBonus.loop, Animations.happyBonus.end, 0.4);
    red.stateData.setMix(Animations.happyBonus.end, Animations.idle.start, 0.4);

    red.state.setAnimation(0, Animations.idle.start, false);
    red.state.addAnimation(0, Animations.idle.loop, true, 0);

    disappointed = () => {
        red.stateData.setMix(Animations.idle.end, Animations.disappointed.start, 0.2);
        red.stateData.setMix(Animations.disappointed.start, Animations.disappointed.loop, 0.4);
        red.stateData.setMix(Animations.disappointed.loop, Animations.happyBonus.end, 0.4);
        red.stateData.setMix(Animations.disappointed.end, Animations.idle.loop, 0.4);

        red.state.setAnimation(0, Animations.idle.end, false);
        red.state.setAnimation(0, Animations.disappointed.start, false);
        red.state.addAnimation(0, Animations.disappointed.loop, true, 0);
        red.state.addAnimation(0, Animations.disappointed.end, false, 3);
        red.state.addAnimation(0, Animations.idle.loop, true, 0);
    };

    happyBonus = () => {
        red.stateData.setMix(Animations.idle.end, Animations.happyBonus.start, 0.2);
        red.stateData.setMix(Animations.happyBonus.start, Animations.happyBonus.loop, 0.4);
        red.stateData.setMix(Animations.happyBonus.loop, Animations.happyBonus.end, 0.4);
        red.stateData.setMix(Animations.happyBonus.end, Animations.idle.loop, 0.4);

        red.state.setAnimation(0, Animations.idle.end, false);
        red.state.setAnimation(0, Animations.happyBonus.start, false);
        red.state.addAnimation(0, Animations.happyBonus.loop, true, 0);
        red.state.addAnimation(0, Animations.happyBonus.end, false, 3);
        red.state.addAnimation(0, Animations.idle.loop, true, 0);
    };

    happyCard = () => {
        red.stateData.setMix(Animations.idle.end, Animations.happyCard.start, 0.2);
        red.stateData.setMix(Animations.happyCard.start, Animations.happyCard.loop, 0.4);
        red.stateData.setMix(Animations.happyCard.loop, Animations.happyCard.end, 0.4);
        red.stateData.setMix(Animations.happyCard.end, Animations.idle.loop, 0.4);

        red.state.setAnimation(0, Animations.idle.end, false);
        red.state.setAnimation(0, Animations.happyCard.start, false);
        red.state.addAnimation(0, Animations.happyCard.loop, true, 0);
        red.state.addAnimation(0, Animations.happyCard.end, false, 3);
        red.state.addAnimation(0, Animations.idle.loop, true, 0);
    };

    loading = () => {
        red.stateData.setMix(Animations.idle.end, Animations.loading.start, 0.2);
        red.stateData.setMix(Animations.loading.start, Animations.loading.loop, 0.4);
        red.stateData.setMix(Animations.loading.loop, Animations.loading.end, 0.4);
        red.stateData.setMix(Animations.loading.end, Animations.idle.loop, 0.4);

        red.state.setAnimation(0, Animations.idle.end, false);
        red.state.setAnimation(0, Animations.loading.start, false);
        red.state.addAnimation(0, Animations.loading.loop, true, 0);
        red.state.addAnimation(0, Animations.loading.end, false, 3);
        red.state.addAnimation(0, Animations.idle.loop, true, 0);
    };

    worry = () => {
        red.stateData.setMix(Animations.idle.end, Animations.worry.start, 0.2);
        red.stateData.setMix(Animations.worry.start, Animations.worry.loop, 0.4);
        red.stateData.setMix(Animations.worry.loop, Animations.worry.end, 0.4);
        red.stateData.setMix(Animations.worry.end, Animations.idle.loop, 0.4);

        red.state.setAnimation(0, Animations.idle.end, false);
        red.state.setAnimation(0, Animations.worry.start, false);
        red.state.addAnimation(0, Animations.worry.loop, true, 0);
        red.state.addAnimation(0, Animations.worry.end, false, 1);
        red.state.addAnimation(0, Animations.idle.loop, true, 0);
    };
    app.stage.addChild(red);
};

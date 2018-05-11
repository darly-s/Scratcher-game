import ExpoPixi from 'expo-pixi';

const Animations = {
    disappointed: () => {},
    happyBonus: () => {},
    happyCard: () => {},
    idle: () => {},
    loading: () => {},
    worry: () => {}
};

const disappointed = {
    start: 'red_disappointed_st',
    loop: 'red_disappointed_loop',
    end: 'red_disappointed_end'
};
const happyBonus = {
    start: 'red_happy_bonus_st',
    loop: 'red_happy_bonus_loop',
    end: 'red_happy_bonus_end'
};
const happyCard = {
    start: 'red_happy_card_st',
    loop: 'red_happy_card_loop',
    end: 'red_happy_card_end'
};
const idle = {
    start: 'red_idle_st',
    loop: 'red_idle_loop',
    end: 'red_idle_end'
};
const loading = {
    start: 'red_loading_screen_animation_st',
    loop: 'red_loading_screen_animation_loop',
    end: 'red_loading_screen_animation_end'
};
const worry = {
    start: 'red_worry_st',
    loop: 'red_worry_loop',
    end: 'red_worry_end'
};

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

    red.stateData.setMix(idle.start, idle.loop, 0.2);
    red.stateData.setMix(idle.loop, idle.end, 0.4);
    red.stateData.setMix(idle.end, idle.start, 0.4);
    red.stateData.setMix(idle.end, happyBonus.start, 0.2);
    red.stateData.setMix(happyBonus.start, happyBonus.loop, 0.4);
    red.stateData.setMix(happyBonus.loop, happyBonus.end, 0.4);
    red.stateData.setMix(happyBonus.end, idle.start, 0.4);

    red.state.setAnimation(0, idle.start, false);
    red.state.addAnimation(0, idle.loop, true, 0);

    Animations.disappointed = () => {
        red.stateData.setMix(idle.end, disappointed.start, 0.2);
        red.stateData.setMix(disappointed.start, disappointed.loop, 0.4);
        red.stateData.setMix(disappointed.loop, happyBonus.end, 0.4);
        red.stateData.setMix(disappointed.end, idle.loop, 0.4);

        red.state.setAnimation(0, idle.end, false);
        red.state.setAnimation(0, disappointed.start, false);
        red.state.addAnimation(0, disappointed.loop, true, 0);
        red.state.addAnimation(0, disappointed.end, false, 3);
        red.state.addAnimation(0, idle.loop, true, 0);
    };

    Animations.happyBonus = () => {
        red.stateData.setMix(idle.end, happyBonus.start, 0.2);
        red.stateData.setMix(happyBonus.start, happyBonus.loop, 0.4);
        red.stateData.setMix(happyBonus.loop, happyBonus.end, 0.4);
        red.stateData.setMix(happyBonus.end, idle.loop, 0.4);

        red.state.setAnimation(0, idle.end, false);
        red.state.setAnimation(0, happyBonus.start, false);
        red.state.addAnimation(0, happyBonus.loop, true, 0);
        red.state.addAnimation(0, happyBonus.end, false, 3);
        red.state.addAnimation(0, idle.loop, true, 0);
    };

    Animations.happyCard = () => {
        red.stateData.setMix(idle.end, happyCard.start, 0.2);
        red.stateData.setMix(happyCard.start, happyCard.loop, 0.4);
        red.stateData.setMix(happyCard.loop, happyCard.end, 0.4);
        red.stateData.setMix(happyCard.end, idle.loop, 0.4);

        red.state.setAnimation(0, idle.end, false);
        red.state.setAnimation(0, happyCard.start, false);
        red.state.addAnimation(0, happyCard.loop, true, 0);
        red.state.addAnimation(0, happyCard.end, false, 3);
        red.state.addAnimation(0, idle.loop, true, 0);
    };

    Animations.loading = () => {
        red.stateData.setMix(idle.end, loading.start, 0.2);
        red.stateData.setMix(loading.start, loading.loop, 0.4);
        red.stateData.setMix(loading.loop, loading.end, 0.4);
        red.stateData.setMix(loading.end, idle.loop, 0.4);

        red.state.setAnimation(0, idle.end, false);
        red.state.setAnimation(0, loading.start, false);
        red.state.addAnimation(0, loading.loop, true, 0);
        red.state.addAnimation(0, loading.end, false, 3);
        red.state.addAnimation(0, idle.loop, true, 0);
    };

    Animations.worry = () => {
        red.stateData.setMix(idle.end, worry.start, 0.2);
        red.stateData.setMix(worry.start, worry.loop, 0.4);
        red.stateData.setMix(worry.loop, worry.end, 0.4);
        red.stateData.setMix(worry.end, idle.loop, 0.4);

        red.state.setAnimation(0, idle.end, false);
        red.state.setAnimation(0, worry.start, false);
        red.state.addAnimation(0, worry.loop, true, 0);
        red.state.addAnimation(0, worry.end, false, 3);
        red.state.addAnimation(0, idle.loop, true, 0);
    };
    app.stage.addChild(red);
};


export function emit() {
    Animations.happyCard();
}

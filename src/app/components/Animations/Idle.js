import ExpoPixi from 'expo-pixi';

const start = 'red_idle_st';
const loop = 'red_idle_loop';
const end = 'red_idle_end';

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

    red.scale.set((app.renderer.height/red.height) / 2);

    red.stateData.setMix(start, loop, 0.2);
    red.stateData.setMix(loop, end, 0.2);
    red.stateData.setMix(end, loop, 0.2);
    red.stateData.setMix(loop, start, 0.2);

    red.state.setAnimation(0, start, true);
    red.state.addAnimation(0, loop, true, 0);
    red.state.addAnimation(0, end, true, 0);
    red.state.addAnimation(0, loop, true, 0);
    red.state.addAnimation(0, start, true, 0);
    red.state.addAnimation(0, loop, true, 0);

    app.stage.addChild(red);
};
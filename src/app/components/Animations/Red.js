import ExpoPixi from 'expo-pixi';

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

    red.stateData.setMix('red_idle_st', 'red_idle_loop', 0.2);
    red.stateData.setMix('red_idle_loop', 'red_idle_end', 0.4);
    red.stateData.setMix('red_idle_end', 'red_idle_loop', 0.6);
    red.stateData.setMix('red_idle_loop', 'red_idle_st', 0.8);

    red.state.setAnimation(0, 'red_idle_loop', true);

    app.stage.addChild(red);

    global.document.addEventListener('touchstart', function() {
        red.state.setAnimation(0, 'red_idle_end', false);
        red.state.addAnimation(0, 'red_idle_loop', true, 0);
        red.state.addAnimation(0, 'red_idle_st', true, 0);
        red.state.addAnimation(0, 'red_idle_loop', true, 0);
        red.state.setAnimation(0, 'red_idle_end', true, 0);
    });
};
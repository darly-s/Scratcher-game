import ExpoPixi, { PIXI } from 'expo-pixi';

const handlers = {
    pointerUp: () => {},
    pointerMove: () => {},
    pointerDown: () => {}
};


export default async (context) => {
    const app = ExpoPixi.application({
        context,
        transparent: true,
    });

    const stage = app.stage;
    app.stage.interactive = true;

    const brush = new PIXI.Graphics();
    brush.beginFill(0xffffff);
    brush.drawCircle(0, 0, 50);
    brush.endFill();

    const texture1 = await ExpoPixi.textureAsync(require('../../../../assets/images/magic_forest_scratch_frame_big.png'));
    const texture2 = await ExpoPixi.textureAsync(require('../../../../assets/images/magic_forest_bonfire.png'));
    PIXI.loader.load(setup);

    function setup() {

        const background = new PIXI.Sprite(texture1);
        stage.addChild(background);
        background.width = app.screen.width;
        background.height = app.screen.height;

        const imageToReveal = new PIXI.Sprite(texture2);
        stage.addChild(imageToReveal);
        imageToReveal.width = app.screen.width;
        imageToReveal.height = app.screen.height;

        const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

        const renderTextureSprite = new PIXI.Sprite(renderTexture);
        stage.addChild(renderTextureSprite);
        imageToReveal.mask = renderTextureSprite;

        let dragging = false;

        handlers.pointerMove = (event) => {
            if (dragging) {
                brush.position.copy(event);
                app.renderer.render(brush, renderTexture, false, null, false);
            }
        };

        handlers.pointerDown = (event) => {
            dragging = true;
            handlers.pointerMove(event);
        };

        handlers.pointerUp = (event) => {
            dragging = false;
        };
    }

};


export function emit(type, event) {

    if (type === 'touchstart') {
        handlers.pointerDown({x: event.locationX, y: event.locationY});
    }
    if (type === 'touchmove') {
        handlers.pointerMove({x: event.locationX, y: event.locationY});
    }

    if (type === 'pointerup') {
        handlers.pointerUp({x: event.locationX, y: event.locationY});
    }
};


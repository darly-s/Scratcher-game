import ExpoPixi, { PIXI } from 'expo-pixi';
import Animations from '../Animations';

const handlers = {
    pointerUp: () => {},
    pointerMove: () => {},
    pointerDown: () => {}
};
let counter = 0;

/**
 *
 * Append WebGL context for scratch cards
 *
 * @param {object} context              - WebGL context for scratch cards
 * @param {object} payload              - application props
 * @property {blob} payload.cover       - Cover image for card or bonus card
 * @property {blob} payload.image       - Card main image
 * @property {object} payload.handlers  - Functions which triggered on pan events
 *
 */

export default async (context, payload) => {
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

    const texture1 = await ExpoPixi.textureAsync(payload.cover);
    const texture2 = await ExpoPixi.textureAsync(payload.image);
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

        const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height, {transparent: true});

        const renderTextureSprite = new PIXI.Sprite(renderTexture);
        stage.addChild(renderTextureSprite);
        imageToReveal.mask = renderTextureSprite;

        let dragging = false;

        payload.handlers.pointerMove = (event) => {
            if (dragging) {
                brush.position.copy(event);
                app.renderer.render(brush, renderTexture, false, null, false);
                counter++;
                if (counter >= 30) {
                    payload.status(true);
                }
            }
        };

        payload.handlers.pointerDown = (event) => {
            dragging = true;
            Animations.Red.worry();
            handlers.pointerMove(event);
        };

        payload.handlers.pointerUp = (event) => {
            dragging = false;
        };
    }

};

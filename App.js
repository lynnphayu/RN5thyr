import boot from "./artifacts/boot/index";
if (global.navigator && global.navigator.product === 'ReactNative') {
    global.navigator.mimeTypes = '';
    try {
        global.navigator.userAgent = 'ReactNative';
    }
    catch (e) {
        console.log('Tried to fake useragent, but failed. This is normal on some devices, you may ignore this error: ' + e.message);
    }
}
const app = boot();

export default app;

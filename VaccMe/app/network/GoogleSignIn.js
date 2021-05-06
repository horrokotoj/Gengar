import * as Google from 'expo-google-app-auth';

const config = {
    androidClientId:
        '821695412865-f6sndakvma08hqnjkqrjpmm7b2da2hmu.apps.googleusercontent.com',
    iosClientId:
        '821695412865-jlgaraciuvjk5j86ql00uf2ca0s5mmla.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
};

async function GoogleSignIn() {
    return await Google.logInAsync(config);
}

export default GoogleSignIn;

const firebase = require('firebase');
require('firebase/firestore')

export class Firebase { 

    constructor() {

        this._config = { 
            

                apiKey: "AIzaSyC11t9gUfr-trXSVLe4otU_g9gBNKN2k0s",
            
                authDomain: "whatsapp-clone-260ca.firebaseapp.com",
            
                projectId: "whatsapp-clone-260ca",
            
                storageBucket: "gs://whatsapp-clone-260ca.appspot.com/",
            
                messagingSenderId: "76403264920",
            
                appId: "1:76403264920:web:fe7091e8bf71b14218afed"
            
              
        }
        this.init();
    }

    init( ){

        if(!window._initializedFirebase) { 
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true

            })

            window._initializedFirebase = true;
        }
    };

    static db() { 

        return firebase.firestore();
    }

    static hd() { 

        return firebase.storage();
    }

    initAuth(){

        return new Promise((s, f) => { 

            let provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider)
            .then(result => { 

                let token = result.credential.accessToken;
                let user = result.user

                s({
                    user, 
                    token
                })

            })
            .catch(err=> { 
                f(err)
            })
        })
    }

}
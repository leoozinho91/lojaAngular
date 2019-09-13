// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyB4ovfY22-rQlxhneeMxH6pLOuLc2Sh_ak",
    authDomain: "lojaangular-db.firebaseapp.com",
    databaseURL: "https://lojaangular-db.firebaseio.com",
    projectId: "lojaangular-db",
    storageBucket: "",
    messagingSenderId: "840059874221",
    appId: "1:840059874221:web:ef3d68a39faf5adec08f24"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

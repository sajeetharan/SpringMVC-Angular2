/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            // 'lib/': 'node_modules/'
            'npm': 'lib'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'lib/@angular/core/bundles/core.umd.js',
            '@angular/common': 'lib/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'lib/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'lib/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib/@angular/http/bundles/http.umd.js',
            '@angular/router': 'lib/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'lib/@angular/forms/bundles/forms.umd.js',
            '@angular/material': 'lib/@angular/material/bundles/material.umd.js',
            // other libraries
            'rxjs':                       'lib/rxjs',
            'angular2-in-memory-web-api': 'lib/angular2-in-memory-web-api',
            'moment': 'lib/moment/moment.js',
            'ng2-bootstrap': 'lib/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
            'ng2-tooltip': 'lib/ng2-tooltip'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main : './main.js',
                defaultExtension: 'js'
            },
            'rxjs': {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'lib/ng2-bootstrap' : {
                defaultExtension: 'js'
            },
            'lib/ng2-tooltip': { main: './index.js', defaultExtension: 'js' }
            /*,'lib/@angular/material': { main: './index.js', defaultExtension: 'js'}*/
        }
    });
})(this);
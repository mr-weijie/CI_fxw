/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CI_fxw.Application',

    name: 'CI_fxw',

    requires: [
        // This will automatically load all classes in the CI_fxw namespace
        // so that application classes do not need to require each other.
        'CI_fxw.*'
    ],

    // The name of the initial view to create.
    mainView: 'CI_fxw.view.main.Main'
});

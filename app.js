/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'demo',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
         var me = this;
        Ext.fly('appLoadingIndicator').destroy();
        if (!Ext.browser.is.Cordova //非cordova环境
            || cordova.plugins) { //cordova插件已经初始化完毕
            me.onDeviceReady();
        } else {
            document.addEventListener('deviceready', Ext.bind(me.onDeviceReady, me), false);
        }
        // Initialize the main view
        //Ext.Viewport.add(Ext.create('demo.view.Main'));
    },
    onDeviceReady: function() {
        console.log(65432);
        // cordova.plugins.printer.check(function (avail, count) {
        //     console.log(avail);
        //     alert(avail ? 'Found ' + count + ' services' : 'No');
             var page = '<h1>Hello Document</h1>';

        //     cordova.plugins.printer.print(page, 'Document.html');
        // });
        /*cordova.plugins.printer.pick(function (https://www.google.com/cloudprint/addpublicprinter.html?printerid=bf97ab49-7a6b-18e3-873a-d8cf8dc9aedf&key=3975404508) {
            alert(uri ? uri : 'Canceled');
        });*/
        
        // cordova.plugins.printer.print(page, 'Document1.html');
         //cordova.plugins.printer.print('http://blackberry.de', 'BB10');
         var uri = 'http://192.168.0.54:8000/CLodopfuncs.js';
        // cordova.plugins.printer.print('<html>HEELO</html>', { duplex: 'long' }, function (res) {
        //     alert(res ? 'Done' : 'Canceled');
        // });
        /* cordova.plugins.printer.pick(function (uri) {
            alert(uri ? uri : 'Canceled');
        });*/
         cordova.plugins.printer.pick(function (uri) {
            cordova.plugins.printer.print(page, { printerId: uri });
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

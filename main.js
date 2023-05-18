//codigo para la entrada de la aplicacion y en este codigo pondremos las funciones de apagado y suspension.



const { app, powerSaveBlocker } = require('electron');

app.on('ready', () => {
    //obtenemos el ID del bloqueador de ahorro de energia para evitar que el pc se suspenda
    const blockerId = powerSaveBlocker.start('prevent-app-suspension');
    //esperamos 5 minutos antes de apagar o suspender
    setTimeout(() => {
        //apagar o encender el pc
        app.exit();
    }, 5 * 60 * 1000);
});


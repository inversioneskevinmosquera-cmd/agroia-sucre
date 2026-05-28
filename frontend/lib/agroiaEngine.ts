export function evaluarSistema(datosSensores: any) {

    const sueloSeco =
        datosSensores.humedad < 40;

    const aguaCritica =
        datosSensores.agua < 20;

    const temperaturaAlta =
        datosSensores.temperatura > 35;

    const riegoActivo =
        sueloSeco && !temperaturaAlta;

    let estadoTitulo = "SISTEMA ESTABLE";
    let estadoMensaje =
        "Todo funcionando correctamente";

    if (aguaCritica) {

        estadoTitulo = "🚨 TANQUE CRÍTICO";

        estadoMensaje =
            "Revisar nivel de agua inmediatamente";

    }

    else if (temperaturaAlta) {

        estadoTitulo =
            "🌡️ RIEGO SUSPENDIDO";

        estadoMensaje =
            "Temperatura demasiado alta";

    }

    else if (sueloSeco) {

        estadoTitulo =
            "🌱 RIEGO AUTOMÁTICO";

        estadoMensaje =
            "El sistema activó el riego automáticamente";

    }

    return {

        sueloSeco,
        aguaCritica,
        temperaturaAlta,
        riegoActivo,
        estadoTitulo,
        estadoMensaje,

    };

}
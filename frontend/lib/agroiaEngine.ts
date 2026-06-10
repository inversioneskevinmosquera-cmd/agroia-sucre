export function evaluarSistema(datosSensores: any) {

    const sueloSeco =
        datosSensores.humedad < 40;

    const aguaCritica =
        datosSensores.agua < 20;

    const temperaturaAlta =
        datosSensores.temperatura > 35;

    const riegoActivo =
        sueloSeco &&
        !temperaturaAlta &&
        !aguaCritica;

    let estadoTitulo = "SISTEMA ESTABLE";

    let estadoMensaje =
        "Todo funcionando correctamente";

    let ultimaAccion =
        "Monitoreo automático activo";

    // =========================
    // EVENTOS
    // =========================

    const eventos: {
        tipo: string;
        mensaje: string;
    }[] = [];

    // =========================
    // LÓGICA
    // =========================

    if (aguaCritica) {

        estadoTitulo = "🚨 TANQUE CRÍTICO";

        estadoMensaje =
            "Revisar nivel de agua inmediatamente";

        ultimaAccion =
            "Alerta de tanque crítico enviada";

        eventos.push({
            tipo: "critico",
            mensaje: "Nivel de agua críticamente bajo",
        });

    }

    if (temperaturaAlta) {

        estadoTitulo =
            "🌡️ RIEGO SUSPENDIDO";

        estadoMensaje =
            "Temperatura demasiado alta";

        ultimaAccion =
            "Riego suspendido por temperatura extrema";

        eventos.push({
            tipo: "advertencia",
            mensaje: "Temperatura excesiva detectada",
        });

    }

    if (sueloSeco && !aguaCritica) {

        estadoTitulo =
            "🌱 RIEGO AUTOMÁTICO";

        estadoMensaje =
            "El sistema activó el riego automáticamente";

        ultimaAccion =
            "Riego automático activado";

        eventos.push({
            tipo: "info",
            mensaje: "Baja humedad detectada en el suelo",
        });

    }

    if (aguaCritica && sueloSeco) {

        estadoTitulo =
            "💧 TANQUE VACÍO";

        estadoMensaje =
            "El suelo necesita riego pero no hay agua disponible";

        ultimaAccion =
            "Riego bloqueado por falta de agua";

    }

    return {

        sueloSeco,
        aguaCritica,
        temperaturaAlta,
        riegoActivo,

        estadoTitulo,
        estadoMensaje,

        eventos,
        ultimaAccion,

    };

}
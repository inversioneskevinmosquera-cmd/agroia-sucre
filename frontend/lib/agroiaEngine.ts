import { sensorHistory } from "@/data/sensorHistory";

export function evaluarSistema(sensorData: {
    humedad: number;
    temperatura: number;
    agua: number;
}) {

    // Evaluaciones principales
    const sueloSeco = sensorData.humedad < 40;
    const aguaCritica = sensorData.agua < 20;
    const temperaturaAlta = sensorData.temperatura > 35;

    const riegoActivo =
        sueloSeco && !temperaturaAlta;

    // Eventos activos
    const eventos = [];

    // Últimos registros históricos
    const ultimoRegistro =
        sensorHistory[sensorHistory.length - 1];

    const registroAnterior =
        sensorHistory[sensorHistory.length - 2];

    // Tendencias inteligentes
    const humedadDisminuyendo =
        registroAnterior &&
        ultimoRegistro.humedad < registroAnterior.humedad;

    const temperaturaSubiendo =
        registroAnterior &&
        ultimoRegistro.temperatura > registroAnterior.temperatura;

    if (sueloSeco && !temperaturaAlta) {

        eventos.push({
            mensaje:
                "🌱 El sistema activó el riego automáticamente para evitar sequedad en el cultivo.",
            tipo: "info",
        });

    }

    if (aguaCritica) {

        eventos.push({
            mensaje:
                "🚨 El tanque tiene un nivel bajo de agua y podría afectar próximos ciclos de riego.",
            tipo: "critico",
        });

    }

    if (temperaturaAlta) {

        eventos.push({
            mensaje:
                "🌡️ El sistema detectó temperatura elevada y recomienda evitar riego intenso.",
            tipo: "advertencia",
        });

    }

    // Estado principal
    let estadoTitulo = "SISTEMA ESTABLE";

    let estadoMensaje =
        "Todo funcionando correctamente";

    if (aguaCritica) {

        estadoTitulo = "🚨 TANQUE CRÍTICO";

        estadoMensaje =
            "Revisar nivel de agua inmediatamente";

    }

    else if (temperaturaAlta) {

        estadoTitulo = "🌡️ RIEGO SUSPENDIDO";

        estadoMensaje =
            "El sistema detuvo el riego para proteger el cultivo del calor extremo";

    }

    else if (sueloSeco) {

        estadoTitulo = "🌱 RIEGO AUTOMÁTICO";

        estadoMensaje =
            "El sistema activó el riego por baja humedad del suelo";

    }

    if (humedadDisminuyendo) {

        eventos.push({
            mensaje:
                "📉 El suelo está perdiendo humedad de forma continua.",
            tipo: "advertencia",
        });

    }

    if (temperaturaSubiendo) {

        eventos.push({
            mensaje:
                "📈 La temperatura sigue aumentando y podría afectar el cultivo.",
            tipo: "advertencia",
        });

    }

    let ultimaAccion =
        "Monitoreo automático activo";

    if (sueloSeco && !temperaturaAlta) {

        ultimaAccion =
            "🌱 El sistema activó el riego automáticamente para mantener la humedad adecuada.";

    }

    else if (temperaturaAlta) {

        ultimaAccion =
            "🌡️ El sistema suspendió el riego debido a la temperatura elevada.";

    }

    else if (aguaCritica) {

        ultimaAccion =
            "🚨 El sistema detectó nivel crítico de agua en el tanque.";

    }

    return {
        sueloSeco,
        aguaCritica,
        temperaturaAlta,
        riegoActivo,
        eventos,
        estadoTitulo,
        estadoMensaje,
        ultimaAccion,
    };

}
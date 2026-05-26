import { sensorData } from "@/data/sensorData";
import { sensorHistory } from "@/data/sensorHistory";

export function evaluarSistema() {

    // Evaluaciones principales
    const sueloSeco = sensorData.humedad < 40;
    const luzBaja = sensorData.luz < 30;
    const aguaCritica = sensorData.agua < 20;
    const temperaturaAlta = sensorData.temperatura > 35;

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

    if (sueloSeco) {
        eventos.push({
            mensaje: "🌱 Riego automático activado",
            tipo: "info",
        });
    }

    if (luzBaja) {
        eventos.push({
            mensaje: "💡 LEDs activados automáticamente",
            tipo: "advertencia",
        });
    }

    if (aguaCritica) {
        eventos.push({
            mensaje: "🚨 Nivel de agua crítico",
            tipo: "critico",
        });
    }

    if (temperaturaAlta) {
        eventos.push({
            mensaje: "🌡️ Temperatura elevada",
            tipo: "advertencia",
        });
    }

    // Estado principal
    let estadoTitulo = "SISTEMA ESTABLE";
    let estadoMensaje = "Todo funcionando correctamente";

    if (aguaCritica) {
        estadoTitulo = "🚨 TANQUE CRÍTICO";
        estadoMensaje = "Revisar nivel de agua inmediatamente";
    }

    else if (sueloSeco) {
        estadoTitulo = "🌱 RIEGO AUTOMÁTICO";
        estadoMensaje = "Humedad baja detectada";
    }

    else if (luzBaja) {
        estadoTitulo = "💡 ILUMINACIÓN AUTOMÁTICA";
        estadoMensaje = "LEDs activados automáticamente";
    }

    else if (temperaturaAlta) {
        estadoTitulo = "🌡️ TEMPERATURA ELEVADA";
        estadoMensaje = "Temperatura superior a lo recomendado";
    }
    if (humedadDisminuyendo) {
        eventos.push({
            mensaje: "📉 La humedad disminuye progresivamente",
            tipo: "advertencia",
        });
    }

    if (temperaturaSubiendo) {
        eventos.push({
            mensaje: "📈 La temperatura continúa aumentando",
            tipo: "advertencia",
        });
    }
    return {
        sueloSeco,
        luzBaja,
        aguaCritica,
        temperaturaAlta,
        eventos,
        estadoTitulo,
        estadoMensaje,
    };
}
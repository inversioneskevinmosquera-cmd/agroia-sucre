import { sensorData } from "@/data/sensorData"
import { SystemDecision } from "@/types/decision"

export function generateSystemDecision(): SystemDecision {

    const humidity = sensorData.humidity
    const temperature = sensorData.temperature
    const tankLevel = sensorData.waterLevel

    // REGLA 1
    if (humidity < 30 && temperature < 35) {
        return {
            systemStatus: "Riego activado",
            action: "El sistema activó el riego automáticamente",
            explanation:
                "La humedad del suelo es baja y el cultivo necesita hidratación.",
            recommendation:
                "Continuar monitoreo del nivel de agua.",
            severity: "warning",
        }
    }

    // REGLA 2
    if (humidity < 30 && temperature >= 35) {
        return {
            systemStatus: "Riego detenido",
            action: "El sistema evitó activar el riego",
            explanation:
                "La temperatura es demasiado alta y podría afectar el cultivo.",
            recommendation:
                "Esperar una disminución de temperatura.",
            severity: "critical",
        }
    }

    // REGLA 3
    if (tankLevel < 20) {
        return {
            systemStatus: "Tanque bajo",
            action: "El sistema detectó nivel crítico de agua",
            explanation:
                "El tanque podría no tener suficiente agua para próximos ciclos.",
            recommendation:
                "Recargar tanque lo antes posible.",
            severity: "critical",
        }
    }

    // REGLA 4
    return {
        systemStatus: "Cultivo estable",
        action: "Monitoreo automático activo",
        explanation:
            "Las condiciones actuales del cultivo son adecuadas.",
        recommendation:
            "No se requieren acciones inmediatas.",
        severity: "normal",
    }
}
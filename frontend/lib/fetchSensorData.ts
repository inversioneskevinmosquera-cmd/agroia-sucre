export async function fetchSensorData() {

    try {

        const response = await fetch(
            "/api/sensores"
        );

        return await response.json();

    } catch (error) {

        console.log(
            "Error obteniendo sensores:",
            error
        );

        return null;

    }

}
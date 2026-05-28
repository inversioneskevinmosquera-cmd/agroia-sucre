export async function GET() {

    try {

        const response = await fetch(
            "http://192.168.101.25:5000/datos",
            {
                cache: "no-store",
            }
        );

        const data = await response.json();

        return Response.json(data);

    } catch (error) {

        return Response.json(
            {
                error: "No se pudo conectar con Raspberry",
            },
            {
                status: 500,
            }
        );

    }

}
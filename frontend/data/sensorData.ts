export let sensorData = {
  humedad: 55,
  temperatura: 26,
  agua: 80,
};

export function actualizarSensores(
  nuevosDatos: Partial<typeof sensorData>
) {

  sensorData = {
    ...sensorData,
    ...nuevosDatos,
  };

}
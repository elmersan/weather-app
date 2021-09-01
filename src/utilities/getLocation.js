import { getWoeid } from "./getWoeid";

export const getCurrentLocation = (setLoading, setWoeid) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLoading();
    },
    (error) =>
      alert(
        "Permitir el acceso a la ubicación para obtener los detalles del tiempo"
      )
  );

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      setWoeid(
        await getWoeid(position.coords.latitude, position.coords.longitude)
      );
    },
    (error) => setWoeid("418440")
  );
};

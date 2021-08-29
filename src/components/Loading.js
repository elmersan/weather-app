import { LoadingStyle } from "../styles/components";

export default function Loading({ loading }) {
  return (
    <LoadingStyle className={loading ? "hide" : ""}>
      <p>Cargando...</p>
    </LoadingStyle>
  );
}

import "./style.css";
import { normalizar } from "./normalizar";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Frontend</h1>
    <div class="card">
      <input placeholder='Ingrese "calle altura, partido" o "calle y calle, partido"' />
      <button id="buscar" type="button">Buscar</button>
    </div>

    <ul class="list">
    </ul>
  </div>
`;

normalizar(document.querySelector<HTMLButtonElement>("#buscar")!);

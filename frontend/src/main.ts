import "./style.css";
import { normalizar } from "./normalizar.ts";

// Elementos
const input = document.querySelector<HTMLInputElement>("input");
const button = document.querySelector<HTMLButtonElement>("#buscar");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Frontend</h1>
    <div class="card">
      <input placeholder='Ingrese "calle altura, partido" o "calle y calle, partido"' />
      <button id="buscar" type="button">Buscar</button>
    </div>

    <ul class="list">
     <li>
      <p><strong>Dirección:</strong> Callo y </p>
      <p><strong>Calle:</strong> Callo y </p>
     </li>
    </ul>
  </div>
`;

normalizar(document.querySelector<HTMLButtonElement>("#buscar")!);

async function obtenerResultados(value: string): Promise<any[]> {
  try {
    history.pushState({}, "/normalizar?direccion=" + encodeURIComponent(value));

    const response = await fetch(
      `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(
        value
      )}`
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const data = await response.json();
    console.log("Resultados obtenidos:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener resultados:", error);
    return [];
  }
}

button!.addEventListener("click", async () => {
  const input = document.querySelector<HTMLInputElement>("input");
  if (!input) return;

  const value = input.value.trim();

  const datos = await obtenerResultados(value);
  console.log(datos.length, "Resultados obtenidos");
  // if (datos.length > 0) {
  //   console.log("ENtre aca");
  //   const list = document.querySelector<HTMLUListElement>(".list");
  //   if (!list) return;

  //   list.innerHTML = ""; // Limpiar la lista antes de agregar nuevos resultados

  //   datos.forEach((dato) => {
  //     const li = document.createElement("li");
  //     li.innerHTML = `
  //       <p><strong>Dirección:</strong> ${dato.direccion}</p>
  //       <p><strong>Calle:</strong> ${dato.calle}</p>
  //     `;
  //     list.appendChild(li);
  //   });
  // } else {
  //   console.error("No se encontraron resultados.");
  // }
});

import type { DireccionNormalizada } from "./interfaces/response.interface";

function showData(datos: DireccionNormalizada[]) {
  const list = document.querySelector<HTMLUListElement>(".list");
  if (datos.length > 0) {
    if (!list) return;
    list.innerHTML = "";
    datos.forEach((dato) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <p><strong>Dirección:</strong> ${dato.direccion}</p>
        <p><strong>Calle:</strong> ${dato.nombre_calle}</p>
      `;
      list.appendChild(li);
    });
  } else {
    if (list) {
      list.innerHTML = "<li>No se encontraron resultados.</li>";
    }
  }
}

export function normalizar(element: HTMLButtonElement) {
  element.addEventListener("click", async () => {
    const input = document.querySelector<HTMLInputElement>("input");
    if (!input) return;

    const value = input.value.trim();

    try {
      history.pushState({}, "", "/test?texto=" + value);

      const response = await fetch(
        `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${value}`
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const { direccionesNormalizadas, errorMessage } = await response.json();

      if (errorMessage) {
        throw new Error(errorMessage);
      }

      showData(direccionesNormalizadas);
    } catch (error) {
      console.log(error);
      showData([]);
    }
  });
}

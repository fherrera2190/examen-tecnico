export interface Response {
  direccionesNormalizadas: DireccionNormalizada[];
  errorMessage?: string;
}

export interface DireccionNormalizada {
  altura: null;
  cod_calle: number;
  cod_calle_cruce: number;
  cod_partido: string;
  coordenadas: Coordenadas;
  direccion: string;
  nombre_calle: string;
  nombre_calle_cruce: string;
  nombre_localidad: string;
  nombre_partido: string;
  tipo: string;
}

export interface Coordenadas {
  srid: number;
  x: string;
  y: string;
}

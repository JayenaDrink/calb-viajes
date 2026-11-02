# Viajes · Las Amistades Belgas de Levante (Calpe)

Páginas del programa de cada viaje de socios, en neerlandés (por defecto) y español.

## Cómo preparar un viaje nuevo
Cada viaje son dos archivos con el mismo nombre, por ejemplo `madrid-2026.html` y `madrid-2026.js`.
1. Copiar los dos archivos con el nombre del viaje nuevo (por ejemplo `brujas-2027`).
2. En el `.html`, cambiar la línea `<script src="/madrid-2026.js">` por el nombre nuevo.
3. Editar el `.js`: título, fechas, salida, hotel, qué llevar y las actividades de cada día.
   Cada texto va en los dos idiomas: `{ nl: "...", es: "..." }`.
4. Añadir el enlace en `index.html` (la portada), también en los dos idiomas.

La página queda en `/<nombre-del-viaje>`, por ejemplo `/madrid-2026`.

## Archivos comunes (no hace falta tocarlos)
- `app.js` — funcionamiento de la página (idiomas, día actual, botones, mapa)
- `viaje.css` — diseño
- `logo.png`, `logo-256.png`, `favicon.png` — logo del club

Tipos de actividad: `encuentro`, `bus`, `tren`, `metro`, `taxi`, `visita`, `compras`, `comida`, `actividad`, `libre`, `hotel`, `vuelta`.

Colores del club: rojo `#990000`, amarillo `#FFCC00`, negro `#141414`.

# LomitoWash — Landing minimalista (estática)

Sitio estático para promocionar un shampoo suave para perros, con diseño minimalista y paleta pastel. Listo para desplegar en Vercel.

## Estructura

- `index.html`: página principal
- `styles.css`: estilos pastel y minimalistas
- `script.js`: utilidades menores y envío de formulario
- `vercel.json`: opciones de despliegue (opcional)

## Desarrollo local

1. Abre `index.html` en tu navegador (doble clic) o sírvelo con un servidor estático.
2. Con Node.js:

```bash
npx serve@latest . -l 3000
```

## Formulario de contacto

Se usa Formspree para manejo de formularios en un sitio estático.

1. Crea un formulario en Formspree y copia tu endpoint (ej: `https://formspree.io/f/xxxxabcd`).
2. Edita `script.js` y reemplaza `your_form_id` en `FORM_ENDPOINT`.
3. Publica en Vercel y prueba el envío.

## Despliegue en Vercel

```bash
npm i -g vercel
vercel --yes
vercel --prod --yes
```

O importa el repo en Vercel desde GitHub. No requiere build.

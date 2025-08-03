# Temporizador Web con Cambio de Colores ⏱️🎨

Un temporizador interactivo para presentaciones que cambia de color según el tiempo transcurrido, ayudando a los expositores a gestionar su tiempo de manera visual.

## Características ✨

- Cuenta regresiva visual de 15 minutos (900 segundos)
- Cambio progresivo de colores:
  - Verde: Primer tercio del tiempo
  - Amarillo: Segundo tercio del tiempo
  - Rojo: Último tercio del tiempo
- Pantalla completa con números grandes y legibles
- Transiciones suaves entre colores
- Selector de tiempo inicial mediante pop-up

## Cómo Usar 🚀

1. Al abrir la página, se mostrará un pop-up para configurar el tiempo
2. Ingresa los minutos deseados (ej. 15 para 15 minutos)
3. El temporizador comenzará automáticamente
4. Observa cómo el fondo cambia de color según el tiempo restante

## Personalización 🎨

Puedes modificar estos aspectos fácilmente:

- `totalTime` en script.js - Cambia la duración total
- Colores en la función `updateBackgroundColor()`
- Tamaño de fuente en styles.css

## Tecnologías Utilizadas 💻

- HTML5
- CSS3 (con transiciones)
- JavaScript (ES6)

## Instalación ⚙️

```bash
git clone https://github.com/KrlitosForever/Temporizador-web.git
cd temporizador-web
```

Simplemente abre el archivo index.html en tu navegador favorito.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Por favor abre un issue o pull request para sugerir mejoras.
# Taller Práctico: Documentación y Refactorización de Sistemas

Este repositorio contiene la resolución del **Reto de Código Mudo**, aplicando la metodología moderna de *"Docs as Code"* mediante archivos Markdown integrados directamente en el repositorio de control de versiones.

---

## 1. Análisis Técnico del Código "Mudo" Original
El bloque de código heredado analizaba una operación matemática sin nombres descriptivos, lo que dificultaba su comprensión inmediata por el equipo de desarrollo.

```javascript

function $x(a, b, c) {
  let $d = b * 0.15;
  if (c == "SV") {
    return (a - d) + 13; 
  } else {
    let res = a - d;
    return res;
  }
}

/**
 * Módulo de Nómina Regional - Solución al Reto de Código Mudo
 * Actividad: Refactorización de nombres de variables para legibilidad técnica.
 */

function procesarNomina() {
    // 1. Recuperar y convertir los valores ingresados en la interfaz HTML
    const inputSalario = document.getElementById("salarioBase");
    const inputRetencion = document.getElementById("tasaRetencion");
    const codigoRegion = document.getElementById("codigoRegion").value;

    const salarioBase = parseFloat(inputSalario.value);
    const tasaRetencion = parseFloat(inputRetencion.value);

    // Validación de seguridad básica de los datos de entrada
    if (isNaN(salarioBase) || salarioBase < 0 || isNaN(tasaRetencion) || tasaRetencion < 0) {
        alert("Por favor, ingrese valores numéricos válidos y mayores o iguales a cero.");
        return;
    }

    // 2. Identificación de la lógica matemática original:
    // El sistema descuenta un 15% (0.15) calculado sobre la tasa base de retención suministrada.
    const PORCENTAJE_DEDUCCION = 0.15;
    let deduccionCalculada = tasaRetencion * PORCENTAJE_DEDUCCION;

    // Variables para el flujo lógico condicional por región
    let bonoRegional = 0;
    let salarioNeto = 0;

    // 3. Evaluación de la regla de negocio condicional para El Salvador (SV)
    if (codigoRegion === "SV") {
        // El número mágico "13" corresponde a un bono fijo de ley o ajuste de viáticos regional.
        bonoRegional = 13.00;
        salarioNeto = (salarioBase - deduccionCalculada) + bonoRegional;
    } else {
        // Flujo estándar para empleados fuera de la región SV
        bonoRegional = 0.00;
        salarioNeto = salarioBase - deduccionCalculada;
    }

    // Control preventivo: El salario neto final a pagar no puede ser negativo
    if (salarioNeto < 0) {
        salarioNeto = 0;
    }

    // 4. Renderizar y reflejar los resultados en tiempo real en las etiquetas HTML
    document.getElementById("resBruto").innerText = `$${salarioBase.toFixed(2)}`;
    document.getElementById("resDeduccion").innerText = `-$${deduccionCalculada.toFixed(2)}`;
    document.getElementById("resBono").innerText = `+$${bonoRegional.toFixed(2)}`;
    document.getElementById("resNeto").innerText = `$${salarioNeto.toFixed(2)}`;
}
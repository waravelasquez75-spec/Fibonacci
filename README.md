# 🩺 Diabetes Center: Evaluación Glicémica Inteligente

Una aplicación web interactiva, educativa y de concientización clínica diseñada para simular, monitorear y analizar la evolución de los niveles de glucosa en sangre a lo largo del tiempo según el perfil de cada paciente.

## 📋 Descripción

### Contexto del Problema Real
La diabetes es una condición crónica de salud pública de alto impacto global que afecta a más de 500 millones de personas. En entornos como Bolivia, se traduce en una de las causas principales de hospitalizaciones, complicaciones renales, ceguera y amputaciones. Debido a que el monitoreo constante es el pilar fundamental para evitar crisis agudas, esta herramienta digital busca educar de manera interactiva a los usuarios sobre cómo fluctúan sus niveles de azúcar y qué medidas preventivas tomar.

### Explicacion del Algoritmo Utilizado
El algoritmo es un simulador probabilístico de tiempo discreto. Toma un estado inicial y calcula la evolución del azúcar hora por hora combinando una tendencia de crecimiento metabólico con una variable aleatoria **(Math.random())** . Al mismo tiempo, actúa como un filtro de búsqueda para hallar el valor máximo y evaluar el nivel de riesgo clínico del paciente de forma automatizada.

El núcleo del programa procesa las variables fisiológicas del usuario (edad, peso, tipo de diabetes) y ejecuta un **ciclo iterativo secuencial hora por hora** (simulación temporal dependiente):
1. **Modelado metabólico:** En cada intervalo de tiempo, la glucosa actual se incrementa dinámicamente mediante una base fija sumada a un factor aleatorio segun **la formula explicita f_{n+2}-f_{n+1}-f_{n}=0** más un modificador agravante que simula la fatiga metabólica del tiempo transcurrido
2. **Evaluación de picos:** En cada iteración, el algoritmo compara la glucosa del estado actual frente a un registro histórico para determinar con precisión matemática el **pico más alto** **max Glucosa** y la hora exacta en que ocurrió.
3. **Clasificación de riesgo:** Al finalizar el ciclo, analiza el pico máximo alcanzado mediante condicionales lógicos para categorizar el estado de salud Nivel Crítico 200 > 250 , Nivel Elevado 150 > 180 o Control Óptimo y renderiza visualmente barras de colores adaptativas (rojo, amarillo o verde) en la interfaz.

## 🛠️ Requisitos

El proyecto funciona del lado del cliente, por lo que consume recursos mínimos. Solo necesitas:
* **Navegador Web Moderno:** Google Chrome, Mozilla Firefox, Microsoft Edge o Safari (con soporte para Flexbox, CSS Grid y JavaScript ES6+).
* **Editor de código (Opcional):** VS Code o similar si deseas editar los archivos.



## 🚀 Instrucciones de Instalación

1. **Estructura de archivos:** Descarga y guarda los tres archivos del proyecto en una misma carpeta local:
   ```text
   📁 diabetes-center
   ├── 📄 index.html
   ├── 📄 estilo.css
   └── 📄 java.js



2. **Despliegue:** No requiere de servidores web locales (como Apache o Node.js). Simplemente haz **doble clic en el archivo index.html** para ejecutar la aplicación en tu navegador de forma inmediata.

## 📖 Guía de Uso

### Ejemplo Práctico:

1. Rellena los datos básicos (Nombre, edad, peso, altura y tipo de diabetes).
2. Introduce tu **Glucosa Inicial** (ej. `125 mg/dL`) y las **Horas de Monitoreo** (ej. `6`).
3. Presiona **"Ver Mi Análisis Completo"** para ocultar el formulario y desplegar automáticamente las gráficas de evolución junto con las recomendaciones preventivas de salud.

### Establecimientos Adecuados de Uso (Objetivo):

* **🏫 Centros Educativos / Universidades:** Ideal para concientizar a estudiantes del área de salud y sistemas sobre simulaciones computacionales aplicadas a la medicina.
* **🏥 Puntos de Primer Contacto / Triaje:** Útil como herramienta didáctica visual en salas de espera de hospitales o centros médicos para educar de forma interactiva sobre los riesgos de la descompensación glicémica.

**DESARROLLADORA:** WARA VELASQUEZ 
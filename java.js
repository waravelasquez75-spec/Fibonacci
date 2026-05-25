document.getElementById('formDiabetes').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const tipoDiabetes = document.getElementById('tipoDiabetes').value;
    const tipoPaciente = document.getElementById('tipoPaciente').value;
    const glucosaInicial = parseInt(document.getElementById('glucosaInicial').value);
    const horas = parseInt(document.getElementById('horas').value);
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    let glucosaActual = glucosaInicial;
    let maxGlucosa = glucosaInicial;
    let horaMax = 0;
    let historial = [];

    for (let h = 0; h <= horas; h++) {
        historial.push({hora: h, glucosa: Math.round(glucosaActual)});
        if (glucosaActual > maxGlucosa) {
            maxGlucosa = glucosaActual;
            horaMax = h;
        }
        glucosaActual += 7 + Math.floor(Math.random() * 16) + (h * 2);
    }

    const glucosaFinal = Math.round(glucosaActual);

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('resultadoSection').style.display = 'block';

    document.getElementById('saludo').innerHTML = `Hola <strong>${nombre}</strong>`;

    const fecha = new Date().toLocaleDateString('es-ES', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });
    document.getElementById('fechaActual').textContent = fecha;

    let reporteHTML = `
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Tipo de Diabetes:</strong> ${tipoDiabetes}</p>
        <p><strong>Peso:</strong> ${peso} kg | <strong>Altura:</strong> ${altura} cm</p>
        <p><strong>Glucosa Inicial:</strong> ${glucosaInicial} mg/dL</p>
        <p><strong>Glucosa Final:</strong> ${glucosaFinal} mg/dL</p>
        <p><strong>Pico más alto:</strong> ${maxGlucosa} mg/dL (Hora ${horaMax})</p>
        <p><strong>Tipo de Paciente:</strong> ${tipoPaciente}</p>
    `;
    document.getElementById('reporteGeneral').innerHTML = reporteHTML;

    let barrasHTML = '';
    historial.forEach(p => {
        const altura = Math.min(p.glucosa * 0.6, 420);
        const color = p.glucosa > 200 ? '#b91c1c' : (p.glucosa > 140 ? '#f59e0b' : '#15803d');
        barrasHTML += `
            <div class="barra" style="height: ${altura}px; background: ${color};">
                <span>${p.hora}h<br>${p.glucosa}</span>
            </div>`;
    });
    document.getElementById('graficoBarras').innerHTML = barrasHTML;

    let reco = `<h3>Recomendaciones Personalizadas</h3><ul>`;
    if (maxGlucosa > 250) reco += `<li>🚨 Nivel crítico detectado. Contacte a su médico hoy.</li>`;
    else if (maxGlucosa > 180) reco += `<li>⚠️ Niveles elevados. Se recomienda ajuste urgente.</li>`;
    else reco += `<li>✅ Muy buen control glicémico.</li>`;

    reco += `
        <li>Beba al menos 2 litros de agua diariamente.</li>
        <li>Camine 30 minutos después de cada comida.</li>
        <li>Evite azúcares y harinas refinadas.</li>
        <li>Duerma 7-8 horas por noche.</li>
        <li>Registre sus mediciones todos los días.</li>
    </ul>`;

    document.getElementById('recomendaciones').innerHTML = reco;
});
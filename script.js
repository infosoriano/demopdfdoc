window.onload = function () {
    const { jsPDF } = window.jspdf;

    function formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    window.generatePDF = function () {
        const form = document.forms['histeroscopiaForm'];

        // Datos personales
        const fecha = formatDate(form['fecha'].value);
        const cedula = form['cedula'].value;
        const apellido = form['apellido'].value;
        const nombre = form['nombre'].value;
        const edad = form['edad'].value;
        const fum = formatDate(form['fum'].value);
        const dia_ciclo = form['dia_ciclo'].value;
        const ag = form['ag'].value;
        const procedencia = form['procedencia'].value;
        const medTratante = form['medTratante'].value;
        const indicacion = form['indicacion'].value;
        const procedimiento = form['procedimiento'].value;
        const anestesia = form['anestesia'].value;
        const distension = form['distension'].value;

        // Hallazgos
        const dilCervical = form['dilCervical'].value;
        const vaginoscopia = form['vaginoscopia'].value;
        const exocervix = form['exocervix'].value;
        const canal_cervical = form['canal_cervical'].value;
        const cavidad_uterina = form['cavidad_uterina'].value;
        const tamanio_uterina = form['tamanio_uterina'].value;
        const forma_uterina = form['forma_uterina'].value;
        const cuernos_uterina = form['cuernos_uterina'].value;
        const ostiums_uterina = form['ostiums_uterina'].value;
        const endometrio_uterina = form['endometrio_uterina'].value;

        // Diagnóstico
        const procedimiento_terapeutico = form['procedimiento_terapeutico'].value;
        const anatomiapatologica = form['anatomiapatologica'].value;
        const complicaciones = form['complicaciones'].value;
        const tolerancia = form['tolerancia'].value;
        const comentarios = form['comentarios'].value;

        // const medico = form['medico'].value;

        const doc = new jsPDF();
        
        // Agregar logo superior derecho
        const logoUrl = 'img/Logo-Mercedes.png'; // Cambia si es necesario
        if (logoUrl) {
            doc.addImage(logoUrl, 'PNG', 140, 5, 60, 19);
        }
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("HOSPITAL MERCEDES", 10, 10);
        doc.text("SERVICIO DE GINECOLOGÍA", 10, 16);
        doc.text("INFORME DE HISTEROSCOPIA", 65, 30);
        
        // Medico que realiza el Estudio
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("Dr. Emilio ROSSO", 10, 46);

        doc.setFontSize(10);

        // Parte izquierda
        doc.setFont('helvetica', 'bold'); doc.text("Fecha:", 10, 58);
        doc.setFont('helvetica', 'normal'); doc.text(fecha, 23, 58);

        doc.setFont('helvetica', 'bold'); doc.text("Nombre:", 10, 64);
        doc.setFont('helvetica', 'normal'); doc.text(`${apellido}, ${nombre}`, 26, 64);

        doc.setFont('helvetica', 'bold'); doc.text("Cédula:", 10, 70);
        doc.setFont('helvetica', 'normal'); doc.text(cedula, 24, 70);

        doc.setFont('helvetica', 'bold'); doc.text("Edad:", 10, 76);
        doc.setFont('helvetica', 'normal'); doc.text(`${edad} años`, 22, 76);

        doc.setFont('helvetica', 'bold'); doc.text("FUM:", 10, 82);
        doc.setFont('helvetica', 'normal'); doc.text(fum, 21, 82);

        doc.setFont('helvetica', 'bold'); doc.text("Día del Ciclo:", 10, 88);
        doc.setFont('helvetica', 'normal'); doc.text(dia_ciclo, 34, 88);

        doc.setFont('helvetica', 'bold'); doc.text("AG:", 10, 94);
        doc.setFont('helvetica', 'normal'); doc.text(ag, 18, 94);

        // Parte derecha
        doc.setFont('helvetica', 'bold'); doc.text("Procedencia:", 90, 58);
        doc.setFont('helvetica', 'normal'); doc.text(procedencia, 114, 58);

        doc.setFont('helvetica', 'bold'); doc.text("Médico Tratante:", 90, 64);
        doc.setFont('helvetica', 'normal'); doc.text(medTratante, 120, 64);

        doc.setFont('helvetica', 'bold'); doc.text("Indicación:", 90, 70);
        doc.setFont('helvetica', 'normal'); doc.text(indicacion, 110, 70);

        doc.setFont('helvetica', 'bold'); doc.text("Procedimiento:", 90, 82);
        doc.setFont('helvetica', 'normal'); doc.text(procedimiento, 118, 82);

        doc.setFont('helvetica', 'bold'); doc.text("Anestesia:", 90, 88);
        doc.setFont('helvetica', 'normal'); doc.text(anestesia, 110, 88);

        doc.setFont('helvetica', 'bold'); doc.text("Distensión:", 90, 94);
        doc.setFont('helvetica', 'normal'); doc.text(distension, 111, 94);

        // Sección de hallazgos
        doc.setFont('helvetica', 'bold');
        doc.text("Hallazgos Histeroscópicos", 10, 110);

        doc.setFont('helvetica', 'bold'); doc.text("Dilatación Cervical:", 10, 116);
        doc.setFont('helvetica', 'normal'); doc.text(dilCervical, 44, 116);

        doc.setFont('helvetica', 'bold'); doc.text("Vaginoscopía:", 10, 122);
        doc.setFont('helvetica', 'normal'); doc.text(vaginoscopia, 35, 122);

        doc.setFont('helvetica', 'bold'); doc.text("Exocérvix:", 10, 128);
        doc.setFont('helvetica', 'normal'); doc.text(exocervix, 29, 128);

        doc.setFont('helvetica', 'bold'); doc.text("Canal Cervical:", 10, 134);
        doc.setFont('helvetica', 'normal'); doc.text(canal_cervical, 37, 134);

        doc.setFont('helvetica', 'bold'); doc.text("Cavidad Uterina:", 10, 140);
        doc.setFont('helvetica', 'normal'); doc.text(cavidad_uterina, 39, 140);

        doc.setFont('helvetica', 'bold'); doc.text("Tamaño:", 10, 146);
        doc.setFont('helvetica', 'normal'); doc.text(tamanio_uterina, 26, 146);

        doc.setFont('helvetica', 'bold'); doc.text("Forma:", 10, 152);
        doc.setFont('helvetica', 'normal'); doc.text(forma_uterina, 24, 152);

        doc.setFont('helvetica', 'bold'); doc.text("Cuernos:", 10, 158);
        doc.setFont('helvetica', 'normal'); doc.text(cuernos_uterina, 27, 158);

        doc.setFont('helvetica', 'bold'); doc.text("Ostiums:", 10, 164);
        doc.setFont('helvetica', 'normal'); doc.text(ostiums_uterina, 27, 164);

        doc.setFont('helvetica', 'bold'); doc.text("Endometrio:", 10, 170);
        doc.setFont('helvetica', 'normal'); doc.text(endometrio_uterina, 33, 170);

        // Diagnóstico
        doc.setFont('helvetica', 'bold');
        doc.text("Diagnóstico", 10, 180);

        doc.setFont('helvetica', 'bold'); doc.text("Procedimiento Terapéutico:", 10, 186);
        doc.setFont('helvetica', 'normal'); doc.text(procedimiento_terapeutico, 58, 186);

        doc.setFont('helvetica', 'bold'); doc.text("Anatomía Patológica:", 10, 192);
        doc.setFont('helvetica', 'normal'); doc.text(anatomiapatologica, 47, 192);

        doc.setFont('helvetica', 'bold'); doc.text("Complicaciones:", 10, 198);
        doc.setFont('helvetica', 'normal'); doc.text(complicaciones, 39, 198);

        doc.setFont('helvetica', 'bold'); doc.text("Tolerancia:", 10, 204);
        doc.setFont('helvetica', 'normal'); doc.text(tolerancia, 30, 204);

        // Comentarios
        doc.setFont('helvetica', 'bold');
        doc.text("Comentarios:", 10, 214);
        doc.setFont('helvetica', 'normal');
        doc.text(doc.splitTextToSize(comentarios, 180), 10, 220);


        // Firma del médico
        //let firmaUrl = '';
        //let nombreCompletoMedico = '';
        //switch (medico) {
        //    case 'dorner.png':
        //        firmaUrl = 'img/Dorner.png';
        //        nombreCompletoMedico = 'Dra. C. Dorner';
        //        break;
        //    default:
        //        firmaUrl = '';
        //        nombreCompletoMedico = '';
        //}

        //doc.text('Firma del Médico:', 110, 270);
        //doc.text(nombreCompletoMedico, 140, 275);

        //if (firmaUrl) {
        //    doc.addImage(firmaUrl, 'PNG', 130, 250, 40, 20);
        //}

        const fileName = `Histeroscopia-${nombre}-${apellido}-${cedula}.pdf`;
        doc.save(fileName);
    };
};

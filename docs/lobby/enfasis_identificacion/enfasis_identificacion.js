
        document.addEventListener('DOMContentLoaded', function() {
            // Reemplaza ESTE_ID_CON_EL_TUYO con el ID del PDF en Google Drive
            const PDF_ID = '1wSvdfORgIifqX8BVCmRf6fSkCUEuZeQZ';
            
            // Configurar los botones con sus páginas respectivas
            document.getElementById('page19').href = `https://drive.google.com/file/d/${PDF_ID}/view#page=19`;
            
            // Opcional: Abrir en una nueva pestaña
            document.querySelectorAll('.btn').forEach(btn => {
                btn.setAttribute('target', '_blank');
            });
            
            // Validación del ID del PDF (mostrar alerta si no se ha configurado)
            if(PDF_ID === 'ESTE_ID_CON_EL_TUYO') {
                console.error('⚠️ Por favor, reemplaza ESTE_ID_CON_EL_TUYO con el ID de tu PDF en Google Drive.');
            }
        });
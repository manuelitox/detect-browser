# Detect Browser

Una pequeña librería escrita en Javascript, detecta cual es nuestro navegador y muestra en pantalla una notificación de alerta sí estamos usando Internet Explorer <= 8.

## Instalación:

* Github: <code>$ git clone https://github.com/manuelitox/detect-browser.git</code> 

* Bower: <code>$ bower install detect-browser</code>

## Cómo usarlo:

En el archivo HTML donde queramos agregarla, debemos llamar la librería, luego la declaramos y ejecutamos de la siguiente manera:


	<script src="oldbrowser.js"></script>
	<script>
		var currentBrowser = new OldBrowser(getBrowser());
		// comprobamos si nuestro navegador actual es IE <= 8
		currentBrowser.print();
	</script>
	
Sí queremos saber cual es nuestro navegador actual y su versión:

	<script src="oldbrowser.js"></script>
	<script>
		var currentBrowser = new OldBrowser(getBrowser());
		// imprimimos en la console nuestro navegador actual y su versión
		console.log(currentBrowser.get());
	</script>

Seguidamente insertamos el componente HTML donde se va a imprimir el código generado por la librería (es necesario agregarla justo después de declarar la etiqueta body):

	<div id="detect-browser" class="detect-browser">
		<p id="title" class="title"></p>
		<p>Por favor, 
			<a href="#internet-explorer" target="_blank">actualizo</a> o cambia a 
			<a href="#chrome" target="_blank">Chrome</a>, 
			<a href="#firefox" target="_blank">Firefox</a> o 
			<a href="#safari" target="_blank">Safari</a>.</p>
	</div>

**Detect Browser**, viene por defecto con un diseño básico, permite que la visualización de información sea agradable. Para agregarla solo debes llamar la hoja de estilo (**main.scss** se encuentra en el directorio css/) dentro de las etiquetas **Head** del documento HTML.
 
Un proyecto de código abierto, tienes completa libertad de realizar las modificaciones que creas convenientes. 
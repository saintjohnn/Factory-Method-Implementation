import System from "./utils.js" // Importando a classe abstratada que define a interface que deve ser implementada pelas subclasses concretas

// Estendendo a classe System que contém os métodos abstratos start() e stop() que devem ser implementados para seguir a interface
export default class CreateWebserver extends System {
	start() {
		console.log("> [webserver] Starting...")
		console.log("> [webserver] Waiting for port to be available...")
		console.log("> [webserver] Starting done!")
	}

	stop() {
		console.log("> [webserver] Stopping...")
		console.log("> [webserver] Gracefully waiting for all clients...")
		console.log("> [webserver] Closing all ports...")
		console.log("> [webserver] Stopping done!")
	}
}

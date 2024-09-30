import System from "./utils.js" // Importando a classe abstratada que define a interface que deve ser implementada pelas subclasses concretas

// Estendendo a classe System que contém os métodos abstratos start() e stop() que devem ser implementados para seguir a interface
export default class CreateCore extends System {
	#database// Tornando o field privado, ou seja, sera acessivel diretamente apenas de dentro da classe

	#webserver // Tornando o field privado, ou seja, sera acessivel diretamente apenas de dentro da classe

	constructor(createDBConnection, createWebserver){ //Os dados serão recebidos por injeção de dependências
		super()
		this.#database = createDBConnection
		this.#webserver = createWebserver
	}


	start() {
		console.log("> [core] Starting...")
		this.#database.start() // Iniciando o db
		this.#webserver.start() // Iniciando o webserver
		console.log("> [core] Starting done! System running!")
	}

	stop() {
		console.log("> [core] Stopping...")
		this.#webserver.stop() // Finalizando o werbserver
		this.#database.stop() // Finalizando o db
		console.log("> [core] Stopping done!")
	}
}

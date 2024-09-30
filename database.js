import System from "./utils.js" // Importando a classe abstratada que define a interface que deve ser implementada pelas subclasses concretas

// Estendendo a classe System que contém os métodos abstratos start() e stop() que devem ser implementados para seguir a interface
export default class CreateDatabaseConnection extends System {
	start() {
		console.log("> [database] Starting...")
		console.log("> [database] Connecting to Postgres...")
		console.log("> [database] Running migrations...")
		console.log("> [database] Starting done!")
	}

	stop() {
		console.log("> [database] Stopping...")
		console.log("> [database] Closing Postgress connection...")
		console.log("> [database] Stopping done!")
	}
}

import CreateCore from "./core.js" // Importando o núcleo do sistema (onde tudo será iniciado)

import CreateDatabaseConnection from "./database.js" // Importando a subclasse concreta CreateDatabaseConnection que será injetada na classe CreateCore para criar a conexao com o db

import CreateWebserver from "./webserver.js" // Importando a subclasse concreta Createwebserver que será injetada na classe CreateCore para criar o servidor web

const core = new CreateCore(new CreateDatabaseConnection(), new CreateWebserver()) // Instanciando a subclasse concreta CreateCore que possui os métodos start() e stop() que foram implementados (sobrescreveram os métodos abstratatos da classe System) da classe abstrata System

try {
	core.start() // Inicia o db e webserver
	core.stop() // Finaliza o db e webserver
} catch (error) {
	console.log("[index] Uncaught error!")
	console.log(error)
}

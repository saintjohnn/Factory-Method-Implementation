//  Definindo a Interface (ou Classe Base/classe abstrata) para o sistema
// Primeiro, precisamos definir uma classe base ou interface que todas as subclasses concretas irão seguir
// Será uma classe base System que define os métodos start() e stop(), que será implementado pelas subclasses concretas
export default class System {
	constructor() {
		if (this.constructor === System) {
			throw new Error("Cannot instantiate abstract class System")
		}
	}

	start() {
		throw new Error("Method 'start()' must be implemented")
	}

	stop() {
		throw new Error("Method 'stop()' must be implemented")
	}
}

// As exceções lançadas nas classes base servem como uma maneira de garantir que essas classes sejam tratadas como abstratas. Em JavaScript, não existe uma keyword explícita para definir classes ou métodos abstratos, ao contrário de outras linguagens como Java ou C#. Portanto, a prática de lançar uma exceção em métodos que devem ser implementados por subclasses é uma forma de garantir que esses métodos sejam sobrescritos

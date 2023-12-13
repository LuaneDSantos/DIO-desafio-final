// Definição da classe Heroi
class Heroi {
    // Método construtor
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para atacar
    atacar() {
        let ataque = "";
        // Verificando o tipo para determinar o ataque
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "atacou";
        }

        // Exibindo mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi = new Heroi("Herói Exemplo", 25, "mago");
heroi.atacar();

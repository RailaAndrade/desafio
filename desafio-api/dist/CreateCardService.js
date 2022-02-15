"use strict";
/*"id": // identificador
"texto" // texto do card
"data_criacao" // data da criação do card
"data_modificacao" // data da última alteração do card
"tags" // tags vinculas ao card

*/
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCardService {
    execute(texto, data_criacao, data_modificacao, tags) {
        console.log(texto, data_criacao, data_modificacao, tags);
    }
}
exports.default = new CreateCardService();

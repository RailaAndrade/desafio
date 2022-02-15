"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCard = void 0;
const CreateCardService_1 = __importDefault(require("./CreateCardService"));
function CreateCard(request, response) {
    CreateCardService_1.default.execute("texto", "data", "data", "tag");
    return response.send();
}
exports.CreateCard = CreateCard;

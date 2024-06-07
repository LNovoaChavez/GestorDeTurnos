"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCredential = exports.validateCredential = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entity/Credential");
const validateCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    //manager
    const credential = yield data_source_1.AppDataSource.getRepository(Credential_1.Credential).findOneBy({ username: username });
    if (credential) {
        return credential.password == password ? credential.id : "Contraseña no valida";
    }
    else {
        return "Usuario no existe";
    }
});
exports.validateCredential = validateCredential;
const createCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = new Credential_1.Credential();
    newCredential.username = username;
    newCredential.password = password;
    yield data_source_1.AppDataSource.getRepository(Credential_1.Credential).save(newCredential);
    return newCredential.id;
});
exports.createCredential = createCredential;

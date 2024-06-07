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
exports.createUserService = exports.getUserByCredentialService = exports.getUserByIDService = exports.getUsersService = void 0;
const data_source_1 = require("../config/data-source");
const User_1 = require("../entity/User");
const credentialsService_1 = require("./credentialsService");
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.AppDataSource.getRepository(User_1.User).find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIDService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.AppDataSource.getRepository(User_1.User).findOneBy({ credentialID: id });
    if (user)
        return user;
    else
        return null;
});
exports.getUserByIDService = getUserByIDService;
const getUserByCredentialService = (idC) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.AppDataSource.getRepository(User_1.User).findOneBy({ id: idC });
    if (user)
        return user;
    else
        return "User no encontrada";
});
exports.getUserByCredentialService = getUserByCredentialService;
//una funcion async siempre retornauna promsesa que se resuelve como un IUser
const createUserService = (name, email, birthdate, nDni, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new User_1.User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.nDni = nDni;
    newUser.credentialID = yield (0, credentialsService_1.createCredential)(username, password);
    yield data_source_1.AppDataSource.getRepository(User_1.User).save(newUser);
    return newUser;
});
exports.createUserService = createUserService;

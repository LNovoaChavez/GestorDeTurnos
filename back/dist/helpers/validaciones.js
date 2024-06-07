"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarEmail = void 0;
const validarEmail = (email) => {
    const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexmail.test(email);
};
exports.validarEmail = validarEmail;

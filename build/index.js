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
const cron = require("node-cron");
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config();
let data = '';
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://payment-backend-tsho.onrender.com/transaction/balance',
    headers: {
        'Origin': process.env.ORIGIN
    },
    data: data
};
cron.schedule('*/5 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    axios_1.default.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
    })
        .catch((error) => {
        console.log(error);
    });
}));
//# sourceMappingURL=index.js.map
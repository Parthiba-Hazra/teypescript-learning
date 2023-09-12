"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCreateUserPipePipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateCreateUserPipePipe = class ValidateCreateUserPipePipe {
    transform(value, metadata) {
        console.log('Inside ValidateCreateUserPipe!');
        console.log(value);
        console.log(metadata);
        const parseAgeToInt = parseInt(value.age.toString());
        if (isNaN(parseAgeToInt)) {
            console.log(`${value.age} is not a number`);
            throw new common_1.HttpException(`Invalid Data Type for property age. Expected Number`, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            console.log(`${parseAgeToInt} is a number. Returning...`);
            return { ...value, age: parseAgeToInt };
        }
    }
};
exports.ValidateCreateUserPipePipe = ValidateCreateUserPipePipe;
exports.ValidateCreateUserPipePipe = ValidateCreateUserPipePipe = __decorate([
    (0, common_1.Injectable)()
], ValidateCreateUserPipePipe);
//# sourceMappingURL=validate-create-user-pipe.pipe.js.map
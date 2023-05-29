"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toISODateString = void 0;
const toISODateString = (dateStr, devider) => {
    const [day, month, year] = dateStr.split(devider);
    return year + devider + month + devider + day;
};
exports.toISODateString = toISODateString;
//# sourceMappingURL=toISODateString.js.map
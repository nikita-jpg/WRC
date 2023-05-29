"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserHavePriborMidlware = void 0;
const checkUserHavePriborMidlware = (req, res, next) => {
    const { priborId } = req.body;
    if (!priborId) {
        return res.status(400).json({
            message: `Parameters error , ${JSON.stringify({
                priborId,
            })}`,
        });
    }
    next();
};
exports.checkUserHavePriborMidlware = checkUserHavePriborMidlware;
//# sourceMappingURL=checkUserHavePriborMidlware.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const daySchema = new mongoose_1.Schema({
    day: Number,
    sprints: [
        {
            type: Number,
            default: 0,
        },
    ],
    totalSeconds: {
        type: Number,
        default: 0,
    },
});
const Day = (0, mongoose_1.model)("Day", daySchema, "days");
exports.default = Day;
//# sourceMappingURL=day.js.map
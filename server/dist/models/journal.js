"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const journalSchema = new mongoose_1.Schema({
    day: Number,
    text: {
        type: String,
        default: "new text",
        maxLength: 100,
    },
    productivityRating: {
        type: Number,
        default: 0,
        minLength: 0,
        maxLength: 10,
    },
});
const Journal = (0, mongoose_1.model)("Journal", journalSchema, "journals");
exports.default = Journal;
//# sourceMappingURL=journal.js.map
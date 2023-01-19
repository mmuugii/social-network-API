const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

reactionSchema.virtual("formatedDate").get(function () {
    return dayjs(this.createdAt).format("MM/DD/YYYY");
});

module.exports = reactionSchema;

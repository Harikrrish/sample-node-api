"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.UsersSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    primary_email: {
        type: String,
        required: true,
        unique: true
    },
    secondary_email: {
        type: String
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHERS"],
        required: true
    },
    mobile_number: {
        type: String,
        required: true,
        unique: true
    },
    secondary_contact_number: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    profile_image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'TENANT', 'RETAILER', 'GUEST'],
        required: true
    },
    security_number: {
        type: String
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
        required: true
    }, active_since: {
        type: Date
    }, inactive_since: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    }
});

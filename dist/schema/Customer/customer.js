"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\nextend type Query {\n    fetchCustomers: [CustomerDoc!]\n}\n\nextend type Mutation {\n    postCustomer(authID: String!, customerInput: CustomerInput!): CustomerDoc\n    editCustomer(authID: String!, customerInput: CustomerInputEdit!): CustomerDoc\n    removeCustomer(authID: String!, _id: String!): CustomerDoc\n}\n\ntype Customer {\n    firstName: String\n    lastName: String\n    email: String\n    location: String\n    phoneNumber: String\n    quantityPurchased: Int\n    totalAmount: Float\n    createdAt: String\n    updatedAt: String\n}\n\ntype CustomerDoc {\n    _id: String\n    firstName: String\n    lastName: String\n    email: String\n    location: String\n    phoneNumber: String\n    quantityPurchased: Int\n    totalAmount: Float\n    createdAt: String\n    updatedAt: String\n    error: Error\n}\n\ninput CustomerInput {\n    firstName: String!\n    lastName: String!\n    email: String!\n    location: String!\n    phoneNumber: String!\n    quantityPurchased: Int!\n    totalAmount: Float!\n}\n\ninput CustomerInputEdit {\n    _id: String!\n    firstName: String\n    lastName: String\n    email: String\n    phoneNumber: String\n    location: String\n}\n\n"], ["\n\nextend type Query {\n    fetchCustomers: [CustomerDoc!]\n}\n\nextend type Mutation {\n    postCustomer(authID: String!, customerInput: CustomerInput!): CustomerDoc\n    editCustomer(authID: String!, customerInput: CustomerInputEdit!): CustomerDoc\n    removeCustomer(authID: String!, _id: String!): CustomerDoc\n}\n\ntype Customer {\n    firstName: String\n    lastName: String\n    email: String\n    location: String\n    phoneNumber: String\n    quantityPurchased: Int\n    totalAmount: Float\n    createdAt: String\n    updatedAt: String\n}\n\ntype CustomerDoc {\n    _id: String\n    firstName: String\n    lastName: String\n    email: String\n    location: String\n    phoneNumber: String\n    quantityPurchased: Int\n    totalAmount: Float\n    createdAt: String\n    updatedAt: String\n    error: Error\n}\n\ninput CustomerInput {\n    firstName: String!\n    lastName: String!\n    email: String!\n    location: String!\n    phoneNumber: String!\n    quantityPurchased: Int!\n    totalAmount: Float!\n}\n\ninput CustomerInputEdit {\n    _id: String!\n    firstName: String\n    lastName: String\n    email: String\n    phoneNumber: String\n    location: String\n}\n\n"])));
var templateObject_1;
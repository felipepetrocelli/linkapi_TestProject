const express = require("express");
const routes = express.Router();
const opportunityController = require("./opportunity.controller");

// MONGODB
routes.post("/createmongo", opportunityController.createOpportunitiesAggregated);
routes.get("/getmongo", opportunityController.getOpportunitiesAggregated);
routes.delete("/deletemongo", opportunityController.deleteOpportunitiesAggregated);

//BLING
routes.post("/createbling", opportunityController.createOpportunitiesAtBling);

module.exports = routes;
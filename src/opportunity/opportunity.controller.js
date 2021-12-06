const { response } = require("express");

const {
  createOpportunitiesOnMongoDB, 
  getOpportunities, 
  removeOpportunities, 
  createOpportunitiesOnBling
} = require("./opportunity.service");

require("dotenv").config();

async function createOpportunitiesAggregated(request, response) {
  try {
    const createdOpportunities = await createOpportunitiesOnMongoDB();
    return response.status(200).send(createdOpportunities);
  } catch (error) {
    return response.status(400);
  };
};

async function getOpportunitiesAggregated(request, response) {
  try {
    const opportunities = await getOpportunities();
    return response.status(200).send(opportunities);
  } catch (error) {
    return response.status(400);
  };
};

async function deleteOpportunitiesAggregated(request, response) {
  try {
    const deleteOpportunities = await removeOpportunities();
    return response.status(200).send(deleteOpportunities);
  } catch (error) {
    return response.status(400);
  };
};

async function createOpportunitiesAtBling(request, response) {
  try {

    const createdOrderAtBling = await createOpportunitiesOnBling();

    return response.status(200).send(createdOrderAtBling);
  } catch (error) {
    return response.status(400).send(error);
  };
};

module.exports = {  createOpportunitiesAggregated, 
                    getOpportunitiesAggregated, 
                    deleteOpportunitiesAggregated, 
                    createOpportunitiesAtBling }

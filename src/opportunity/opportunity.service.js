const opportunityModel = require("./opportunity.model");
const { getAndFilterWonDeals } = require("../services/pipedrive.service")
const { registerOrder } = require("../services/bling.service")


const createOpportunitiesOnBling = async function () {
  try {
    const wonDeals = await getAndFilterWonDeals();

    if (wonDeals.length === 0) return "No deals currently available";

    const createdOrders = []

    for (const deal of wonDeals) {
      const createdOrder = await registerOrder(deal);
      createdOrders.push(createdOrder)
    }

    return createdOrders
  } catch (error) {
    throw error
  }
};

const createOpportunitiesOnMongoDB = async function (opportunity) {

  let won_opportunities = await getAndFilterWonDeals();

  let oppPerDay = {}
  won_opportunities.forEach((opp) => {
    const date = opp.won_time.split(' ')[0]
    if (oppPerDay[date]) {
      oppPerDay[date].push(opp);
    } else {
      oppPerDay[date] = [opp];
    }
  });
  for (const [key, values] of Object.entries(oppPerDay)) {
    let date_opportunities = key;
    let ids_opportunities = values.map(x => x.id);
    let total = Object.values(values).reduce((t, { value }) => t + value, 0);
    let created_data = await opportunityModel.create({
      date_opportunities,
      ids_opportunities,
      total
    });
  };
  return opportunityModel.find();
};

const getOpportunities = async function () {
  return opportunityModel.find();
};
const removeOpportunities = async function () {
  await opportunityModel.deleteMany({})
};

module.exports = {
  createOpportunitiesOnBling,
  createOpportunitiesOnMongoDB,
  getOpportunities,
  removeOpportunities
};

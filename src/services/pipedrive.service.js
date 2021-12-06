require("dotenv").config();

const { response } = require("express");
const axios = require("axios");

const api_key = process.env.PIPEDRIVE_API_KEY;

const getAndFilterWonDeals = async function () {
  try {
    const { data: { data: deals } } = await axios
      .get(`https://api.pipedrive.com/api/v1/deals?api_token=${api_key}`)

    const filteredDeals = deals.filter(
      (deal) => deal.status === "won"
    );

    return filteredDeals;
  } catch (error) {
    throw error
  }
};

module.exports = { getAndFilterWonDeals };

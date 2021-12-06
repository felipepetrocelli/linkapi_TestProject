require("dotenv").config();
const axios = require("axios");
const { response } = require("express");
const { xml_request } = require("../data-transformation/deal-to-xml");

const bling_api_key = process.env.BLING_API_KEY;

const registerOrder = async function (deal) {
  try {

    const transformedOrder = await xml_request(deal);

    const { data: createdOrder} = await axios
      .post(`https://bling.com.br/Api/v2/pedido/json?apikey=${bling_api_key}&xml=${transformedOrder}`)

    return createdOrder;
  } catch (error) {
    return error;
  }
};

module.exports = { registerOrder };

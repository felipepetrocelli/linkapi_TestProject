const xml_request = async function (deal) {
  const xml = `
    <s>
      <pedido>
        <numero>${deal.id}</numero>
      </pedido>
      <cliente>
        <nome>${deal.person_name}</nome>
      </cliente>
    <transporte>
        <volumes>
            <volume>
                <servico>SEDEX - CONTRATO</servico>
            </volume>
        </volumes>
    </transporte>
    <itens>
        <item>
          <codigo>1</codigo>
          <descricao>prodteste</descricao>
          <qtde>1</qtde>
          <vlr_unit>${deal.value}</vlr_unit>
        </item>
    </itens>
    <parcelas>
        <parcela>
            <vlr>0</vlr>
        </parcela>
    </parcelas>
    </s>`

  const xmlEnconded = encodeURI(xml)
  
  return xmlEnconded;
};

module.exports = {
  xml_request,
};

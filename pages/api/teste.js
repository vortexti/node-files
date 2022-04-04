async function mikrotik(request, response) {
    const dynamicDate = new Date();
    const mikrotikresponse = await fetch("https://168.228.118.228/rest/interface/ether1");
    const mikrotikresponseJson = await mikrotikresponse.json();
    const resposta = mikrotikresponseJson;
    response.json({
        date: dynamicDate.toGMTString(),
        resposta: resposta
    })
}

export default mikrotik;
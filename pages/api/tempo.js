async function mikrotik(request, response) {
   const loginmk = process.env.LOGINMIKROTIK;
   const senhamk = process.env.SENHAMIKROTIK;
   const dynamicDate = new Date();
    const mikrotikresponse = await fetch('https://ws.apicep.com/cep/35530-000.json');
   //  const mikrotikresponse = await fetch('https://${loginmk}:${senhamk}@168.228.118.228/rest/interface/ether1');
 //   const mikrotikresponse = await fetch('https://webweb:web2021@168.228.118.228/rest/interface/ether1');
    const mikrotikresponseJson = await mikrotikresponse.json();
    const cidade = mikrotikresponseJson.city;
    const estado = mikrotikresponseJson.state;
    const cepcidade = mikrotikresponseJson.code;
    response.json({
        date: dynamicDate.toGMTString(),
        cidade: cidade,
        estado: estado,
        cepcidade: cepcidade
    //    mikrotikresponse: mikrotikresponse
    //    mikrotikresponseJson: mikrotikresponseJson
    })
}

export default mikrotik;
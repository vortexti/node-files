async function mikrotik(request, response) {
   const loginmk = process.env.LOGINMIKROTIK;
   const senhamk = process.env.SENHAMIKROTIK;
   const dynamicDate = new Date();
   // const cepresponse = await fetch('https://ws.apicep.com/cep/35530-000.json');
     const mikrotikresponse = await fetch('https://${loginmk}:${senhamk}@168.228.118.228/rest/interface/ether1');
    const mikrotikresponse = await fetch('https://webweb:web2021@168.228.118.228/rest/interface/ether1');
 //   const cepresponseJson = await cepresponse.json();
   // const cidade = cepresponseJson.city;
   // const estado = cepresponseJson.state;
   // const cepcidade = cepresponseJson.code;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');


    response.json({
        date: dynamicDate.toGMTString(),
     //   cidade: cidade,
      //  estado: estado,
      //  cepcidade: cepcidade,
        loginmk : loginmk,
        senhamk: senhamk,
        mikrotikresponse: mikrotikresponse,
        mikrotikresponseJson: mikrotikresponseJson
    })
}

export default mikrotik;

async function mikrotik(request, response) {
   //const loginmk = process.env.LOGINMIKROTIK;
   //const senhamk = process.env.SENHAMIKROTIK;
   const dynamicDate = new Date();
   const mikrotikresponse = await fetch('https://${loginmk}:${senhamk}@168.228.118.228/rest/interface/ether1');
  //  const mikrotikresponse = await fetch('https://webweb:web2021@168.228.118.228/rest/interface/ether1');
  // const mikrotikresponseJson = await mikrotikresponse.json();
   //const resposta = mikrotikresponseJson.comment;

    response.json({
        date: dynamicDate.toGMTString(),
      //  resposta: resposta,
        mikrotikresponse: mikrotikresponse
    //    mikrotikresponseJson: mikrotikresponseJson
    })
}

export default mikrotik;
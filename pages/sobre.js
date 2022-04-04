import { useState } from 'react';
import Link from 'next/link';
function sobre() {
    return <div><h1>Site em reconstrução</h1>
    <link href="/">
        <a>Acessar Página home</a>
    </div>
}

function Contador() {
    const [Contador,setContador] = useState(1);
    function adicionarContador(){
        setContador(Contador + 1);
    }
    return (
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarContador}>Adiciona Contador</button>
        </div>
    )

}
export default sobre
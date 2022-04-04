import { useState } from 'react';
import Link from 'next/link';
function Home() {
    return <div><h1>Site em reconstrução</h1>
    <Link href="/sobre">
        <a>Acessar Página sobre</a>
    </Link>
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
export default Home
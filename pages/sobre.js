import { useState } from 'react';

function Home() {
    return <div><h1>Site em reconstrução</h1>
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
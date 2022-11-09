export const Compaings = () => {
    return(
        <>
        <div>
            <h1>Seja bem vindo a campanha</h1>
            <h3>{campanha.title}</h3>
        </div>
        <div>
            <div>
                <img src='' alt=''></img>
            </div>
            <div>
                <p>Dados do Mestre</p>
                <p>Nome: {owner.name}</p>
                <p>Email: {onwer.email}</p>
            </div>
        </div>
        <div>
            <p>Duração da Campanha: {campanha.duration} </p>
            <p>Ambienteção: {campanha.ambientation}</p>
            <p>Discord da Capanha: <Link>Clique Aqui</Link></p>
        </div>
        <div>
            <button>Ingressar nessa campanha</button>
        </div>

        <div>
            <h1>Membros da Campanha</h1>
            <div>
                <ul>
                    <li>
                        <div>
                            <p>Nome: </p>
                            <p>Nivel: </p>
                        </div>
                        <div>
                        <button></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Nome: </p>
                            <p>Nivel: </p>
                        </div>
                        <div>
                        <button></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Nome: </p>
                            <p>Nivel: </p>
                        </div>
                        <div>
                        <button></button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <h1>História</h1>
            <div>
                <p>campanha.content</p>
            </div>
        </div>
        </>
    )
}
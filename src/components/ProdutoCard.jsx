function ProdutoCard({
    nome,
    preco,
    descricao,
    imagem,
    categoria,
    avaliacao,
    parcelas,
    estoque
}) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} />

            <h2>{nome}</h2>

            <h3>R$ {preco}</h3>

            <p>{descricao}</p>

            <p>
                <strong>Categoria:</strong> {categoria}
            </p>

            <p className="avaliacao">
                {avaliacao}
            </p>

            <p>{parcelas}</p>

            <p>
                Disponíveis: {estoque}
            </p>

            <button>Comprar</button>
        </div>
    );
}

export default ProdutoCard;
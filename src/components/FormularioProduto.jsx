import { useState } from "react";

function FormularioProduto({ adicionarProduto }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!nome || !preco || !descricao) {
            alert("Preencha todos os campos!");
            return;
        }

        adicionarProduto({
            nome,
            preco,
            descricao,
            imagem: "https://placehold.co/300x200"
        });

        setNome("");
        setPreco("");
        setDescricao("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome do produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                type="number"
                placeholder="Preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />

            <textarea
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            ></textarea>

            <button type="submit">
                Adicionar Produto
            </button>
        </form>
    );
}

export default FormularioProduto;
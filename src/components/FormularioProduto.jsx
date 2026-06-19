import { useState } from "react";

function FormularioProduto({ adicionarProduto }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagemArquivo, setImagemArquivo] = useState(null);
    const [imagemPreview, setImagemPreview] = useState(null);

    function handleImagemChange(e) {
        const arquivo = e.target.files[0];

        if (!arquivo) {
            setImagemArquivo(null);
            setImagemPreview(null);
            return;
        }

        if (!arquivo.type.startsWith("image/")) {
            alert("Selecione um arquivo de imagem válido!");
            e.target.value = "";
            return;
        }

        // Libera a URL temporária anterior antes de criar uma nova,
        // evitando vazamento de memória ao trocar de imagem várias vezes
        if (imagemPreview) {
            URL.revokeObjectURL(imagemPreview);
        }

        setImagemArquivo(arquivo);
        setImagemPreview(URL.createObjectURL(arquivo));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!nome || !preco || !descricao) {
            alert("Preencha todos os campos!");
            return;
        }

        const precoNumero = Number(preco);

        if (Number.isNaN(precoNumero) || precoNumero <= 0) {
            alert("Informe um preço válido, maior que zero!");
            return;
        }

        adicionarProduto({
            nome,
            preco: precoNumero,
            descricao,
            imagem: imagemPreview || "https://placehold.co/300x200",
            categoria: categoria || "Outros",
            avaliacao: "☆☆☆☆☆",
            parcelas: "Consulte condições",
            estoque: 1
        });

        setNome("");
        setPreco("");
        setDescricao("");
        setCategoria("");
        setImagemArquivo(null);
        setImagemPreview(null);
        e.target.reset();
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
                min="0.01"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />

            <input
                type="text"
                placeholder="Categoria (opcional)"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />

            <textarea
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            ></textarea>

            <div className="campo-imagem">
                <label htmlFor="imagem-produto">Foto do produto (opcional)</label>
                <input
                    id="imagem-produto"
                    type="file"
                    accept="image/*"
                    onChange={handleImagemChange}
                />

                {imagemPreview && (
                    <img
                        src={imagemPreview}
                        alt="Pré-visualização do produto"
                        className="preview-imagem"
                    />
                )}
            </div>

            <button type="submit">
                Adicionar Produto
            </button>
        </form>
    );
}

export default FormularioProduto;
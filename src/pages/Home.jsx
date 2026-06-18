import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";
import FormularioProduto from "../components/FormularioProduto";

import notebookImg from "../assets/notebook.jpg";
import mouseImg from "../assets/mouse.jpg";
import tecladoImg from "../assets/teclado.jpg";
import monitorImg from "../assets/monitor.jpg";
import headsetImg from "../assets/headset.jpg";
import ssdImg from "../assets/ssd.jpg";

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [pesquisa, setPesquisa] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setProdutos([
                {
                    nome: "Notebook Gamer Acer Nitro V15",
                    preco: 4500,
                    descricao: "Notebook com Intel i5, RTX 3050 e 16GB de RAM.",
                    imagem: notebookImg,
                    categoria: "Notebook",
                    avaliacao: "★★★★★",
                    parcelas: "12x de R$ 375 sem juros",
                    estoque: 5
                },
                {
                    nome: "Mouse Logitech G502 Hero",
                    preco: 250,
                    descricao: "Mouse gamer com 11 botões programáveis e sensor HERO.",
                    imagem: mouseImg,
                    categoria: "Periféricos",
                    avaliacao: "★★★★☆",
                    parcelas: "12x de R$ 20,83 sem juros",
                    estoque: 10
                },
                {
                    nome: "Teclado Mecânico Redragon Kumara",
                    preco: 300,
                    descricao: "Switch Blue, iluminação RGB e estrutura em metal.",
                    imagem: tecladoImg,
                    categoria: "Periféricos",
                    avaliacao: "★★★★☆",
                    parcelas: "12x de R$ 25 sem juros",
                    estoque: 15
                },
                {
                    nome: "Monitor LG UltraGear 24",
                    preco: 1200,
                    descricao: "Tela IPS 144Hz Full HD para jogos competitivos.",
                    imagem: monitorImg,
                    categoria: "Monitores",
                    avaliacao: "★★★★☆",
                    parcelas: "12x de R$ 100 sem juros",
                    estoque: 8
                },
                {
                    nome: "Headset HyperX Cloud II",
                    preco: 450,
                    descricao: "Áudio surround 7.1 e microfone removível.",
                    imagem: headsetImg,
                    categoria: "Áudio",
                    avaliacao: "★★★★★",
                    parcelas: "12x de R$ 37,50 sem juros",
                    estoque: 12
                },
                {
                    nome: "SSD Kingston NV2 1TB",
                    preco: 380,
                    descricao: "SSD NVMe PCIe 4.0 de alta velocidade.",
                    imagem: ssdImg,
                    categoria: "Armazenamento",
                    avaliacao: "★★★★☆",
                    parcelas: "12x de R$ 31,67 sem juros",
                    estoque: 20
                }
            ]);

            setCarregando(false);
        }, 2000);
    }, []);

    function adicionarProduto(produtoNovo) {
        setProdutos([...produtos, produtoNovo]);
    }

    if (carregando) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <div className="cabecalho">
                <h1>TechStore</h1>

                <p>
                    Os melhores produtos gamers para elevar sua experiência.
                </p>
            </div>

            <FormularioProduto adicionarProduto={adicionarProduto} />

            <div className="pesquisa">
                <input
                    type="text"
                    placeholder="Pesquisar produto..."
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />
            </div>

            <div className="lista-produtos">
                {produtos
                    .filter((produto) =>
                        produto.nome
                            .toLowerCase()
                            .includes(pesquisa.toLowerCase())
                    )
                    .map((produto, index) => (
                        <ProdutoCard
                            key={index}
                            nome={produto.nome}
                            preco={produto.preco}
                            descricao={produto.descricao}
                            imagem={produto.imagem}
                            categoria={produto.categoria}
                            avaliacao={produto.avaliacao}
                            parcelas={produto.parcelas}
                            estoque={produto.estoque}
                        />
                    ))}
            </div>
        </>
    );
}

export default Home;
import { PlusOutlined } from "@ant-design/icons";
import { Divider, FloatButton, Input, Typography } from "antd";
import { useState } from "react";
import { AddEditProdutoModal } from "../components/modals/AddEditProdutoModal";
import { EstoqueTable, Produto } from "../components/tables/EstoqueTable";

export default function EstoquePage() {
    const produtos: Produto[] = [
        { id: 1, nome: "Lápis", preco: 3, quantidade: 10 },
        { id: 2, nome: "Caneta", preco: 200, quantidade: 3 },
        { id: 3, nome: "Caderno", preco: 60, quantidade: 10 },
        { id: 1, nome: "Lápis", preco: 3, quantidade: 10 },
        { id: 2, nome: "Caneta", preco: 200, quantidade: 3 },
        { id: 3, nome: "Caderno", preco: 60, quantidade: 10 },
        { id: 1, nome: "Lápis", preco: 3, quantidade: 10 },
        { id: 2, nome: "Caneta", preco: 200, quantidade: 3 },
        { id: 3, nome: "Caderno", preco: 60, quantidade: 10 },
        { id: 1, nome: "Lápis", preco: 3, quantidade: 10 },
        { id: 2, nome: "Caneta", preco: 200, quantidade: 3 },
        { id: 3, nome: "Caderno", preco: 60, quantidade: 10 },
        { id: 1, nome: "Lápis", preco: 3, quantidade: 10 },
        { id: 2, nome: "Caneta", preco: 200, quantidade: 3 },
        { id: 3, nome: "Caderno", preco: 60, quantidade: 10 },
    ];

    const [filtro, setFiltro] = useState("");

    function getProdutosFiltrados(): Produto[] {
        return produtos.filter(produto => produto.nome.toLowerCase().includes(filtro.toLowerCase()));
    }

    return (
        <>
            <AddEditProdutoModal />
            <Typography.Title>Estoque</Typography.Title>
            <Divider />
            <Input.Search onChange={e => setFiltro(e.target.value)} placeholder="digite o nome do produto" style={{ marginBottom: 16 }} />
            <EstoqueTable produtos={getProdutosFiltrados()} />
            <FloatButton tooltip="Cadastrar novo produto" icon={<PlusOutlined />} type="primary" />
        </>
    );
}
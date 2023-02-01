import { PlusOutlined } from "@ant-design/icons";
import { Divider, FloatButton, Input, Typography } from "antd";
import { useState } from "react";
import { AddEditProdutoModal } from "../components/modals/AddEditProdutoModal";
import { EstoqueTable } from "../components/tables/EstoqueTable";
import { Produto } from "../types/produto";
import { useEstoque } from "../contexts/EstoqueContext";

export default function EstoquePage() {
    const { estoque } = useEstoque();

    const [filtro, setFiltro] = useState("");

    function getProdutosFiltrados(): Produto[] {
        return estoque.filter(produto => (produto.nome ?? "").toLowerCase().includes(filtro.toLowerCase()));
    }
 
    const [mostrarModalProduto, setMostrarModalProduto] = useState(false);

    return (
        <>
            { mostrarModalProduto && <AddEditProdutoModal closeModal={() => setMostrarModalProduto(false)} /> }
            <Typography.Title>Estoque</Typography.Title>
            <Divider />
            <Input.Search onChange={e => setFiltro(e.target.value)} placeholder="digite o nome do produto" style={{ marginBottom: 16 }} />
            <EstoqueTable produtos={getProdutosFiltrados()} />
            <FloatButton onClick={() => setMostrarModalProduto(true)} tooltip="Cadastrar novo produto" icon={<PlusOutlined />} type="primary" />
        </>
    );
}
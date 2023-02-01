import { CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Produto } from "../../types/produto";
import { useState } from "react";
import { AddEditProdutoModal } from "../modals/AddEditProdutoModal";
import { useEstoque } from "../../contexts/EstoqueContext";
import { AddRemoveEstoqueProduto } from "../modals/AddRemoveEstoqueProduto";

type Props = {
    produtos: Produto[];
}

export function EstoqueTable({ produtos }: Props) {
    const { excluirProduto } = useEstoque();

    const colunas: ColumnsType<Produto> = [
        {
            key: "id",
            dataIndex: "id",
            title: "#",
            width: 10
        },
        {
            key: "nome",
            dataIndex: "nome",
            title: "Produto",
            sorter: (a: Produto, b: Produto) => a.nome.localeCompare(b.nome)
        },
        {
            key: "preco",
            dataIndex: "preco",
            title: "Preço",
            sorter: (a: Produto, b: Produto) => a.preco - b.preco,
            render: (preco: number) => <>R$ {preco.toFixed(2)}</>
        },
        {
            key: "quantidade",
            dataIndex: "quantidade",
            title: "Quantidade",
            align: "center",
            width: 10
        },
        {
            key: "acoes",
            title: "Ações",
            width: 10,
            render: (_, produto) => <Space>
                <Button type="primary" icon={<PlusOutlined />} shape="circle" style={{ backgroundColor: "#08BDBD" }} />
                <Button type="primary" icon={<MinusOutlined />} shape="circle" style={{ backgroundColor: "#FE5F55" }} />
                <Button onClick={() => setMostrarModalEditarProduto(produto)} type="primary" icon={<EditOutlined />} shape="circle" style={{ backgroundColor: "#F49F0A" }} />
                <Popconfirm onConfirm={() => excluirProduto(produto.id)} okText="Sim" cancelText="Não" placement="bottomLeft" title="Aviso!" description="Você tem certeza que deseja remover o produto?">
                    <Button type="primary" icon={<CloseOutlined />} shape="circle" style={{ backgroundColor: "#050609" }} />
                </Popconfirm>
            </Space>
        },
    ];

    const [mostrarModalEditarProduto, setMostrarModalEditarProduto] = useState<Produto | null>(null);

    return (
        <>
            <AddRemoveEstoqueProduto mode="add" productId={1} />
            { !!mostrarModalEditarProduto && <AddEditProdutoModal produto={mostrarModalEditarProduto} closeModal={() => setMostrarModalEditarProduto(null)} /> }
            <Table columns={colunas} rowKey="id" dataSource={produtos} locale={{ emptyText: "nenhum produto cadastrado" }} />
        </>
    );
}
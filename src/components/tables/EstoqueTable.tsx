import { CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";

export type Produto = {
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
}

type Props = {
    produtos: Produto[];
}

export function EstoqueTable({ produtos }: Props) {
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
            render: () => <Space>
                <Button type="primary" icon={<PlusOutlined />} shape="circle" style={{ backgroundColor: "#08BDBD" }} />
                <Button type="primary" icon={<MinusOutlined />} shape="circle" style={{ backgroundColor: "#FE5F55" }} />
                <Button type="primary" icon={<EditOutlined />} shape="circle" style={{ backgroundColor: "#F49F0A" }} />
                <Popconfirm okText="Sim" cancelText="Não" placement="bottomLeft" title="Aviso!" description="Você tem certeza que deseja remover o produto?">
                    <Button type="primary" icon={<CloseOutlined />} shape="circle" style={{ backgroundColor: "#050609" }} />
                </Popconfirm>
            </Space>
        },
    ];

    return <Table columns={colunas} rowKey="id" dataSource={produtos} />
}
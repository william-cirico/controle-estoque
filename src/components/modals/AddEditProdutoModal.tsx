import { Button, Form, Input, InputNumber, Modal, notification } from "antd";
import { useEstoque } from "../../contexts/EstoqueContext";
import { Produto } from "../../types/produto";

type Props = {
    closeModal: VoidFunction;
    produto?: Produto;
};

export function AddEditProdutoModal({ closeModal, produto }: Props) {
    const { cadastrarProduto, editarProduto } = useEstoque();

    function enviaFormulario(valores: any) {
        if (produto) {
            editarProduto(valores);
        } else {
            cadastrarProduto(valores);
        }
        
        closeModal();
    }

    return <Modal
        open={true}
        title={!!produto ? "Editar produto" : "Cadastrar produto"}
        footer={[]}
        onCancel={closeModal}
    >
        <Form
            layout="vertical"
            onFinish={enviaFormulario}
            onFinishFailed={error =>
                notification.error({
                    message: "Erro!",
                    description: `Ocorreu uma falha no preenchimento do formulário: ${error.errorFields[0].errors[0]}`
                })
            }
            initialValues={produto}
        >
            <Form.Item name="id" hidden />
            <Form.Item
                label="Nome"
                name="nome"
                rules={[
                    { required: true, message: "nome é obrigatório" },
                    { min: 4, message: "nome precisa ter no mínimo 4 caracteres" }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                rules={[
                    { required: true, message: "preço é obrigatório" }
                ]}
                label="Preço"
                name="preco"
            >
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            {
                !produto &&
                <Form.Item label="Quantidade" name="quantidade">
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>
            }
            <Form.Item>
                <Button htmlType="submit" type="primary">{!produto ? "Cadastrar" : "Editar"}</Button>
            </Form.Item>
        </Form>
    </Modal>
}
import { Button, Form, Input, InputNumber, Modal } from "antd";

export function AddEditProdutoModal() {
    return <Modal
        open={true}
        title="Cadastrar produto"
        footer={[]}
    >
        <Form
            layout="vertical"
        >
            <Form.Item label="Nome">
                <Input />
            </Form.Item>
            <Form.Item label="Preço">
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Quantidade">
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Cadastrar</Button>
            </Form.Item>
        </Form>
    </Modal>
}
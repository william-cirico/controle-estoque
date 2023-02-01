import { Button, Form, InputNumber, Modal } from "antd";

type Props = {
    mode: "add" | "remove";
    productId: number;
}

export function AddRemoveEstoqueProduto({ mode, productId }: Props) {
    return <Modal
        open={true}
        title={mode === "add" ? "Adicionar itens ao produto" : "Remover itens do produto"}
        footer={[]}
    >
        <Form
            initialValues={{ id: productId }}
        >
            <Form.Item name="id" hidden />
            <Form.Item name="quantidade">
                <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item>
                <Button>{mode === "add" ? "Adicionar" : "Remover"}</Button>
            </Form.Item>
        </Form>
    </Modal>
}
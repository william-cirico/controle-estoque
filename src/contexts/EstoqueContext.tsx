import { ReactNode, createContext, useContext, useState } from "react"
import { Produto } from "../types/produto";

// 1º Dizer o que vai ter dentro do contexto
type EstoqueContextType = {
    estoque: Produto[];
    cadastrarProduto: (produto: Produto) => void;
    editarProduto: (produto: Produto) => void;
    excluirProduto: (id: number) => void;
}

// 2º Criar o contexto
const EstoqueContext = createContext<EstoqueContextType>(null!);

// 3º Criar o provedor do contexto
// 4º Englobar os componentes que precisam do contexto com o provedor
export function EstoqueProvider({ children }: { children: ReactNode }) {
    const [estoque, setEstoque] = useState<Produto[]>([
        { id: 1, nome: "Lápis", preco: 2.5, quantidade: 3 }
    ]);

    function cadastrarProduto(produto: Produto) {
        const novoProduto: Produto = {
            ...produto,
            id: (estoque[estoque.length - 1]?.id ?? 0) + 1,
        };

        setEstoque([...estoque, novoProduto]);
    }

    function editarProduto(produto: Produto) {
        const estoqueAtualizado = estoque.map(p => {
            if (p.id === produto.id) {
                p = { ...p, ...produto};
            }

            return p;
        });

        setEstoque(estoqueAtualizado);
    }

    function excluirProduto(id: number) {
        const estoqueAtualizado = estoque.filter(p => p.id !== id);
        setEstoque(estoqueAtualizado);
    }

    return (
        <EstoqueContext.Provider value={{ estoque, cadastrarProduto, editarProduto, excluirProduto }}>
            {children}
        </EstoqueContext.Provider>
    );
}

// 5º Criar o hook para acessar o contexto
export const useEstoque = () => useContext(EstoqueContext);
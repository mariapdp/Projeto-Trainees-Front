/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const CHAVE = 'atualizacoes'
const AtualizacaoContext = createContext(null)

function carregar() {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? JSON.parse(salvo) : []
  } catch {
    return []
  }
}

export function AtualizacaoProvider({ children }) {
  const [atualizacoes, setAtualizacoes] = useState(carregar)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(atualizacoes))
    } catch {
      // armazenamento cheio ou indisponível: segue só em memória
    }
  }, [atualizacoes])

  const buscarAtualizacao = (id) => atualizacoes.find((a) => a.id === id)

  const criarAtualizacao = ({ titulo, conteudo, areas }) => {
    const nova = {
      id: crypto.randomUUID(),
      titulo,
      conteudo,
      areas,
      dataPublicacao: new Date().toISOString(),
    }
    setAtualizacoes((lista) => [nova, ...lista])
    return nova.id
  }

  const editarAtualizacao = (id, { titulo, conteudo, areas }) => {
    setAtualizacoes((lista) =>
      lista.map((a) =>
        a.id === id
          ? { ...a, titulo, conteudo, areas, dataEdicao: new Date().toISOString() }
          : a,
      ),
    )
  }

  const excluirAtualizacao = (id) => {
    setAtualizacoes((lista) => lista.filter((a) => a.id !== id))
  }

  const valor = {
    atualizacoes,
    buscarAtualizacao,
    criarAtualizacao,
    editarAtualizacao,
    excluirAtualizacao,
  }

  return (
    <AtualizacaoContext.Provider value={valor}>
      {children}
    </AtualizacaoContext.Provider>
  )
}

export function useAtualizacoes() {
  const contexto = useContext(AtualizacaoContext)
  if (!contexto) {
    throw new Error('useAtualizacoes deve ser usado dentro de <AtualizacaoProvider>')
  }
  return contexto
}

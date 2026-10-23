import { useNavigate } from 'react-router-dom'
import { useAtualizacoes } from '../context/AtualizacaoContext'
import FormularioAtualizacao from '../components/FormularioAtualizacao'

function CriarAtualizacao() {
  const { criarAtualizacao } = useAtualizacoes()
  const navigate = useNavigate()

  const salvar = (dados) => {
    const id = criarAtualizacao(dados)
    navigate(`/atualizacao/${id}`)
  }

  return (
    <section>
      <h1>Nova atualização</h1>
      <FormularioAtualizacao onEnviar={salvar} textoBotao="Publicar" />
    </section>
  )
}

export default CriarAtualizacao

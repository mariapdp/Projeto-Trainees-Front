import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAtualizacoes } from '../context/AtualizacaoContext'
import FormularioAtualizacao from '../components/FormularioAtualizacao'

function EditarAtualizacao() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { buscarAtualizacao, editarAtualizacao } = useAtualizacoes()
  const atualizacao = buscarAtualizacao(id)

  if (!atualizacao) {
    return (
      <p>
        Atualização não encontrada. <Link to="/feed">Voltar ao feed</Link>
      </p>
    )
  }

  const salvar = (dados) => {
    editarAtualizacao(id, dados)
    navigate(`/atualizacao/${id}`)
  }

  return (
    <section>
      <h1>Editar atualização</h1>
      <FormularioAtualizacao
        valoresIniciais={atualizacao}
        onEnviar={salvar}
        textoBotao="Salvar alterações"
      />
    </section>
  )
}

export default EditarAtualizacao

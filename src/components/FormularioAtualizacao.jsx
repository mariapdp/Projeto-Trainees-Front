import { useState } from 'react'
import { AREAS, LIMITE_TITULO, LIMITE_CONTEUDO } from '../constants/config'

function FormularioAtualizacao({ valoresIniciais, onEnviar, textoBotao }) {
  const [titulo, setTitulo] = useState(valoresIniciais?.titulo ?? '')
  const [conteudo, setConteudo] = useState(valoresIniciais?.conteudo ?? '')
  const [areas, setAreas] = useState(valoresIniciais?.areas ?? [])
  const [erros, setErros] = useState({})

  const alternarArea = (area) => {
    setAreas((atual) =>
      atual.includes(area) ? atual.filter((a) => a !== area) : [...atual, area],
    )
  }

  const validar = () => {
    const novos = {}
    if (!titulo.trim()) novos.titulo = 'Informe o título.'
    else if (titulo.trim().length > LIMITE_TITULO)
      novos.titulo = `O título pode ter no máximo ${LIMITE_TITULO} caracteres.`
    if (!conteudo.trim()) novos.conteudo = 'Informe o conteúdo.'
    else if (conteudo.trim().length > LIMITE_CONTEUDO)
      novos.conteudo = `O conteúdo pode ter no máximo ${LIMITE_CONTEUDO} caracteres.`
    if (areas.length === 0) novos.areas = 'Selecione pelo menos uma área.'
    return novos
  }

  const enviar = (e) => {
    e.preventDefault()
    const novos = validar()
    setErros(novos)
    if (Object.keys(novos).length === 0) {
      onEnviar({ titulo: titulo.trim(), conteudo: conteudo.trim(), areas })
    }
  }

  return (
    <form onSubmit={enviar} noValidate className="formulario">
      <label>
        Título
        <input
          type="text"
          value={titulo}
          maxLength={LIMITE_TITULO}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <small>{titulo.length}/{LIMITE_TITULO}</small>
        {erros.titulo && <span className="erro">{erros.titulo}</span>}
      </label>

      <label>
        Conteúdo
        <textarea
          rows={8}
          value={conteudo}
          maxLength={LIMITE_CONTEUDO}
          onChange={(e) => setConteudo(e.target.value)}
        />
        <small>{conteudo.length}/{LIMITE_CONTEUDO}</small>
        {erros.conteudo && <span className="erro">{erros.conteudo}</span>}
      </label>

      <fieldset>
        <legend>Áreas</legend>
        <div className="areas">
          {AREAS.map((area) => (
            <label key={area} className="area-opcao">
              <input
                type="checkbox"
                checked={areas.includes(area)}
                onChange={() => alternarArea(area)}
              />
              {area}
            </label>
          ))}
        </div>
        {erros.areas && <span className="erro">{erros.areas}</span>}
      </fieldset>

      <button type="submit" className="botao">{textoBotao}</button>
    </form>
  )
}

export default FormularioAtualizacao

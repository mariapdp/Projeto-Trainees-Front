// Formata uma data ISO para exibição (ex.: 25/10/2026)
export function formatarData(iso) {
  return new Date(iso).toLocaleDateString('pt-BR')
}

// Converte uma data ISO para AAAA-MM-DD no fuso local (valor do <input type="date">)
export function dataParaInput(iso) {
  const d = new Date(iso)
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const dia = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mes}-${dia}`
}

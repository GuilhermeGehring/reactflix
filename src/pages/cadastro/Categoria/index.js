import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function Categoria () {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue (chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange ({ target }) {
    setValue(
      target.getAttribute('name'),
      target.value
    )
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categorias'
    fetch(url
    ).then(async (response) => {
      const resposta = await response.json()
      setCategorias([
        ...resposta
      ])
    })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit (infos) {
        infos.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && <div>
        Loading...
      </div>}

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default Categoria

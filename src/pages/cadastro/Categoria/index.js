import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'

function Categoria () {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([])

  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gehring-devflix.herokuapp.com/categorias'
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
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={function handleSubmit (infos) {
        infos.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])

        clearForm()
      }}>

        <FormField
          label="titulo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.titulo}
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
              {categoria.titulo}
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

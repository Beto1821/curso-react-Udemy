import './ListaDeProdutos.css';
import React from 'react';
import produtos from '../../data/produtos'

export default function listaDeProdutos(props) {

  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>$ {produto.preco.toFixed(2).replace('.',',')}</td>
        </tr>
      )
    })
  }
    return (
      <div className="ListaDeProdutos">
        <table >
          <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
          </thead>
          <tbody>
          { getLinhas()}
          </tbody>
        </table>
      </div>
    )
}
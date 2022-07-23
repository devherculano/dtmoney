import * as S from './styles';

export function TransactionsTable() {
  return(
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/07/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$996</td>
            <td>Moradia</td>
            <td>03/07/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}
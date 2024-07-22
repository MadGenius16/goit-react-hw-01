import clsx from "clsx";
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items})=> {
  return (
    <table className={clsx(css.table)}>
    <thead className={clsx(css.thead)}>
      <tr >
        <th className={clsx(css.thList)}>Type</th>
        <th className={clsx(css.thList)}>Amount</th>
        <th className={clsx(css.thList)}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(({id, type, amount, currency})=>
      <tr key={id}>
        <td className={clsx(css.tdList)}>{type}</td>
        <td className={clsx(css.tdList)}>{amount}</td>
        <td className={clsx(css.tdList)}>{currency}</td>
      </tr>)}
    </tbody>
  </table>
  )
}

export default TransactionHistory

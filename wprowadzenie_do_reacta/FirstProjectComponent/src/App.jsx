import ExpenseItem from "./components/ExpenseItem";
import ExerciseComponent from "./components/ExerciseComponent";

const expenses = [
  {
    id: 'e1',
    title: 'external SSD 512 GB',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2', 
    title: 'new laptop', 
    amount: 2299.49, 
    date: new Date(2023, 10, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 1597.45,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'bluetooth JBL headphones',
    amount: 70,
    date: new Date(2023, 9, 12),
  },
];

function App() {
  
  return (
    <>
      <h2>Let's Go!</h2>
      {
      /* for (var i; i < expenses.length; i++) {
        <ExpenseItem title={expenses[i].title} amount={expenses[i].amount}/>
      } */
      expenses.map((expense) => {return(
        <ExpenseItem
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          id = {expense.id}
          key = {expense.id} />
      )})
      }
    </>
  )
}

export default App

import ExpenseItem from "./components/ExpenseItem";
import Product from './components/Product';
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

const products = [
  {
    title: "Product 1",
    price: 10,
    description: "First product"
  },
  {
    title: "Product 2",
    price: 20,
    description: "Second product"
  }
];


function App() {
  
  return (
    <>
      <h2>Let's Go!</h2>
      <section className="espenses">
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
            key = {expense.id}
            />
          )})
        }
      </section>

      <h1>My Demo Shop</h1>
      {
        products.map((product) => {return (
          <Product
            title = {product.title}
            price = {product.price}
            description = {product.description}
            />
        )})
      }
      {/* <Product
        title = {products[0].title}
        price = {products[0].price}
        description = {products[0].description}
      />
      <Product
        title = {products[1].title}
        price = {products[1].price}
        description = {products[1].description}
      /> */}
    </>
  )
}

export default App

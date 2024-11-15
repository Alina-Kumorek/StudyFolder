import "../styles/ExpenseItem.css";

function ExpenseItem(props) {
    let month = props.date.getUTCMonth();
    let day = props.date.getUTCDate();
    let year = props.date.getUTCFullYear();
    let newDate = year + "/" + month + "/" + day;

    return(
        <div className="expense-item">
            <div className="expense-item__id"> {props.id} </div>
            <div> {newDate} </div>
            <div className="expense-item__description">
                <h2> {props.title} </h2>
                <div className="expense-item__price"> ${props.amount} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
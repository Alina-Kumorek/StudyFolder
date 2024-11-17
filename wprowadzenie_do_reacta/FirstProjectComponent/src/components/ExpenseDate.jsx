export default function ExpenseDate(props) {
    // let month = props.date.getUTCMonth();
    // let day = props.date.getUTCDate();
    const month = props.date.toLocaleString('pl-PL', {timezone: 'Europe/Warsaw'}, {month: 'long'});
    const day = props.date.toLocaleString('pl-PL', {timezone: 'Europe/Warsaw'}, {day: '2-digit'});
    let year = props.date.getUTCFullYear();
    let newDate = year + "/" + month + "/" + day;

    return(
        <div className="expanse-date">
            <div className="expense-date__day"> {day} </div>
            <div className="expense-date__month"> {month} </div>
            <div className="espense-date__year"> {year} </div>
            {/* <div> {newDate} </div> */}
        </div>
    )
}
export default function Card(props) {
    // const classes = 'card '+props.className;

    const classes = 'card';

    return (
        <div className={classes}> {props.children} </div>
    );
}
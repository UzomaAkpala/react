export default function Employee(props) {
    return(
        <div>
            <h2>Here is an Employee:  {props.name}</h2>
             <h3>Role: {props.role ? props.role : "No roles yet"}</h3>
        </div>
    )
}
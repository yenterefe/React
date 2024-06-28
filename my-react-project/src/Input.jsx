function Input(props) {
    return (
        <input onKeyUp={props.text} type="text" placeholder="Definition" />
    )
}

export default Input
interface ButtonProps {
    onClick: () => void;
}

// Es recomendable crear una interfaz para cada componente indicando los tipos de las props
function Button({ onClick }: ButtonProps) : React.JSX.Element {
    return (
        <button onClick={ onClick }>
            Click me!
        </button>
    )
}

export { Button };
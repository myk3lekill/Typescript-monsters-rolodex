import'./search-box.styles.css';

interface IChangeHandlerProps {
    onChangeHandler: (a: string) => void
}

interface ISearchBoxProps extends IChangeHandlerProps {
    className: string,
    placeholder?: string
}

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => {
    return (
        <input 
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder}
            onChange = {(e) => onChangeHandler(e)}
        /> 
    )
}

export default SearchBox
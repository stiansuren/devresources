type FilterButtonProps = {
    active: boolean,
    onClick: () => void,
    tag: string
}

export const FilterButton = ({tag, active, onClick } :FilterButtonProps) => {

    const activeClass = () => active ? "filters__button--active" : "";

    return <button className={`filters__button ${activeClass()}`} onClick={onClick}>
        <p>{tag}</p>
    </button>
}
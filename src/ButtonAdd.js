import "./style.css";

export default function ButtonAdd({children, onClickAdd}) {
    return (
        <button className="button-add" onClick={onClickAdd}>{children}</button>
    )
}
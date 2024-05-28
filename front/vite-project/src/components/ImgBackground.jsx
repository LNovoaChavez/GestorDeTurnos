import style from "./ImgBackground.module.css"

const ImgBackground = ()=> {
    return (
        <>
        <p>Estetica y Belleza</p>
        <h1>BEAUTYHAVEN</h1>
        <div className={style.textcontainer}>
            <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore quam ratione consectetur. Aspernatur deleniti repellendus est.</p>
        </div>
        <button>Solicitar Turno</button>
        </>
    )

}

export default ImgBackground
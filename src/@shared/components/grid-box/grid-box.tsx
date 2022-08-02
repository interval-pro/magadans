import './grid-box.scss';

export const GridBoxComponent = (props: any) => {

    return (
        <section className='grid-box'>
            <div className="header">
                <div className="title">{ props.title }</div>
            </div>
            <div className="content">{props.children}</div>
        </section>
    )
}
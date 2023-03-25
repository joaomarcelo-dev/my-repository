import './style.scss';

export default function CardProjects(props) {
    return (
        <>
            <a className='link-card-projects' href={props.link} target="_blank">
                <div className='container-card-projects'>
                    <div className='img-project'>
                        <img src={props.img} alt="" />
                    </div>
                    
                    <div className='description-project'>
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

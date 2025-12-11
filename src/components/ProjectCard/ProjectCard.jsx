
import './ProjectCard.css';

export default function ProjectCard({ title, subTitle, children }) {
    return (
        <article className='projectCard'>
            <h2 className='cardTitle'>{title}</h2>
            <h3 className='cardSubtitle'>{subTitle}</h3>
            {children}
        </article>
    )
}
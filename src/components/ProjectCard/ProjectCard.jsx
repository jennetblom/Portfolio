
import './ProjectCard.css';
import GitHub from '../../assets/Github.png';

export default function ProjectCard({ title, subTitle, githubLink, children }) {
    return (
        <article className='projectCard'>
            <div className='projectCard-heading'>
                <h2 className='cardTitle'>{title}</h2>
                     {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        aria-label="View project on GitHub"
                    >
                       
                        <img src={GitHub} alt="GitHub" className='project-iconGit' />
                    </a>
                )}
            </div>

            <h3 className='cardSubtitle'>{subTitle}</h3>
            {children}
        </article>
    )
}
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

function LinkButton({
    //don't touch this, its for creating buttons that lead to seperate pages
    link,
    className,
    children,
}: {
    link: string;
    className?: string;
    children?: ReactNode;
}) {
    return (
        <>
            <Link to={link} className='contents'>
                <button className={className}>{children}</button>
            </Link>
        </>
    );
}

export default LinkButton;
import { useRouter } from 'next/router';
import Link from 'next/link';
import './category-header.scss';

export const CategoryHeader = () => {
    const router = useRouter();
    
return <div className="category">
        <Link href='/'><a className="category__back">Back to all categories</a></Link>
        <h1 className='category__header'>{router.query.category}</h1>
    </div>
}
import { useRouter } from 'next/router';
import PageHeader from '@/components/PageHeader';
import MainNav from '@/components/MainNav';
import Container from 'react-bootstrap/Container';

export default function Earthquake({ earthquake }) {
    const router = useRouter();

    if (!earthquake) {
        return null;
    }
    console.log('props.earthquake:', earthquake);

    const { id, attributes } = earthquake.data;
    const comments = earthquake.comments;

    return (
        <>
            <MainNav />
   
            <Container className='p-5 mb-4 bg-body-tertiary rounded-3'>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                        <ul className='my-4'>
                            <li><strong>Earthquake ID:</strong> {id}</li>
                            {attributes && (
                                <>
                                    <li><strong>External ID:</strong> {attributes.external_id}</li>
                                    <li><strong>Magnitude:</strong> {attributes.magnitude}</li>
                                    <li><strong>Comments:</strong> 
                                        {comments.length > 0 ? (
                                            comments.map(comment => (
                                                <li key={comment.id}>{comment.body}</li>
                                            ))
                                        ) : (
                                            <span>No comments available</span>
                                        )}
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}


export async function getStaticPaths() {
    try {
        const res = await fetch(`http://127.0.0.1:4000/api/features?page=1&perPage=20`);
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Data:', data);

        const paths = data.map((earthquake) => ({
            params: { id: earthquake.id.toString() },
        }));

        return {
            paths,
            fallback: 'blocking',
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { paths: [], fallback: 'blocking' };
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`http://127.0.0.1:4000/api/features/${params.id}`);
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }
        
        const data = await res.json();

        return { props: { earthquake: data } };

    } catch (error) {
        console.log(`Could not get Earthquake: ${error}`);
        return { props: { earthquake: null } };
    }
}

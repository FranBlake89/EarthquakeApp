import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PageHeader({title, text}){
    //console.log('::::::',props.title);
    //console.log('::::::>>',props)
    return(
        <>
        <Card  bg='light'>
            <Card.Body>
                <h3>{title}</h3>
                {text}
            </Card.Body>
        </Card>
        <br />
        </>
    );
}
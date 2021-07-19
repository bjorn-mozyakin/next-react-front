import axios from 'axios';

// posts will be populated at build time by getStaticProps()
function CardTopic({ name, content }) {
    return (
        <>
            <ul>{name}</ul>
            <ul>{content}</ul>
        </>
    )
}


export default CardTopic


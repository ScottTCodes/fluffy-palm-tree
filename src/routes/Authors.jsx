import { useQuery } from 'react-query';
import sanity from "../lib/sanity";

const query = `*[_type == "author"]{ name, slug }`;

const Authors = () => {
    const { isLoading, data: authors } = useQuery('authors', () => sanity.fetch(query));

    console.log(isLoading, authors);

    return (
        <main>
            <h1>Authors</h1>
            {!isLoading && authors.map(({ name, slug }) => (
                <div>
                    <h2>{name}</h2>
                    <p>{slug.current}</p>
                </div>
            ))}
        </main>
    );
};

export default Authors;

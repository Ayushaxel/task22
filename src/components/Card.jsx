import useFetch from "../hook/useFetch";

function Card() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const { data, error} = useFetch(url);  // Use object destructuring
   

    return (
        <div className="main">
            {error ? (
                <p className="error">{error}</p>
            ) 
            :(
                data.map((value) => (
                    <div className="card" key={value.id}>  {/* Use key prop for each element */}
                        <h1>{value.title}</h1>
                        <p>{value.body}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Card;







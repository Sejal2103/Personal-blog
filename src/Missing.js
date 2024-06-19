import { Link } from 'react-router-dom';
const Missing=() => {
    return(
        <main className="missing">
            <>
                <h2 style={{"margin-bottom":"8px"}}>Oh no! The page doesn't exists</h2>
                <p>Well!! that's disappointing</p>
                <>
                    <Link to='/' className="createPost" >Visit our home page</Link>
                </>
            </>
        </main>
    )
}

export default Missing
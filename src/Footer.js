const Footer=() => {
    const now= new Date();
    return(
        <footer className="footer">
            <p> Copyright &copy; {now.getFullYear()}</p>
        </footer>
    )
}

export default Footer
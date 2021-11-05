



function Header({onDarkModeClick, itsDarkMode}) {
    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {itsDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
        
    );
    
}



export default Header;


import { useState, type FormEvent } from 'react';
import {Link,useNavigate} from 'react-router-dom';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (searchTerm.trim() === "") {
            return;
        }

        navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);

        setSearchTerm("");
        }

  return (
      <nav className="navbar">
      <Link to="/" className="logo">
        🍲 RecipeFinder
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">♡ Favorites</Link>
      </div>
         <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
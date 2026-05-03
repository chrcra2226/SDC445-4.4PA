import React, { useState } from "react";
import FavoriteButton from "./favoriteButton";

function SearchBar({ names, favorites, onToggleFavorites }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);
    
    const handleSearch = () => {
        const filtered = (names || []).filter((name) => 
            name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setSearched(true);
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="Search Names..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {searched && results.length === 0 && <p>No results found.</p>}

            <ul>
                {results.map((name, index) => (
                    <li key={index}>
                        {name}
                        <FavoriteButton
                            itemId={name}
                            isFavorite={favorites.includes(name)}
                            onFavoriteChange={onToggleFavorites}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
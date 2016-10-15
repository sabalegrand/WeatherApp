import React from 'react';
import { Link } from 'react-router';


const Examples = () => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Casablanca">Casablanca, Maroc</Link>
          </li>
          <li>
            <Link to="/?location=Thouars">Thouars, France</Link>
          </li>
        </ol>
      </div>
    );
}

export default Examples;

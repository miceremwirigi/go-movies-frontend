import React, {Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useMatch, useLocation, useMatches } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Admin from './components/Admin';
import Categories from './components/Categories';
import OneMovie from './components/OneMovie';

export default function App() {
  return (
    <Router>
    <div className='container'>
      <div className='row'>
        <h1 className='mt-3'>
          Go watch a Movie
        </h1>
        <hr className='mb-3'/>
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <ul className='list-group'>
              <li className='list-group-item'>
                <Link to="/">Home</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/movies">Movies</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/by-category">Categories</Link>
              </li>
              <li className='list-group-item'>
                <Link to="/admin">Manage Catalog</Link>

              </li>
            </ul>
          </nav>
        </div>
        <div className='col-md-10'>
          <Routes>
            <Route path='/movies/:id' Component={OneMovie }></Route>
            {/* <Route path='/movies/:id' element={<Movie />}></Route> */}
            <Route path="/movies" element={<Movies />}></Route>
            <Route exact path="/by-category" element={<CategoryPage />}></Route>

            <Route
            exact
            path='/by-category/drama'
            element={  <Categories title= {`Drama`} />}
            />
            <Route
            exact
            path='/by-category/comedy'
            element={  <Categories title= {`Comedy`} />}
            />
            {/* </Route> */}

            <Route path="/admin" element={<Admin />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

// function Movie() {
//   let { id } = useParams();

//   return <h2>Movie id: { id }</h2>
// }

function CategoryPage() {

  let path = useLocation().pathname
  // console.log(useLocation())
  // console.log(path)

  return (
    <div>
      <h2>Categories</h2>

    <ul>
      <li> <Link to={`${path}/drama`}>Drama</Link></li>
      <li> <Link to={`${path}/comedy`}>Comedy</Link></li>
    </ul>

    </div>
  );
}


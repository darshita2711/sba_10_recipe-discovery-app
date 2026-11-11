import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RecipeDetails from './pages/RecipeDetails'
// import Favorites from './pages/Favorites'
import Search from './pages/Search'
import Category from './pages/Category'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <><Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/category/:categoryName"
        element={<Category />} />

      <Route
        path="/recipe/:recipeId"
        element={<RecipeDetails />} />

      {/* <Route path="/favorites" element={<Favorites />} /> */}

      <Route path="/search" element={<Search />} />
    </Routes></>
  )
}

export default App

import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import AdminProducts from '../components/AdminProducts'

const Rutas = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />}>
                </Route>
                <Route path='/AdminProduct' element={<AdminProducts />}>
                </Route>
            </Routes>
    )
}

export default Rutas
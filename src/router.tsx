import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import GenerateAI from "./views/GenerateAI"


const IndexPage = lazy((() => import('./views/IndexPage')))
const FavoritesPage = lazy((() => import('./views/FavoritesPage')))

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={
            <Suspense fallback="Cargando...">
              <IndexPage />
            </Suspense>
          } index />

          <Route path='/favoritos' element={
            <Suspense fallback="Cargando...">
              <FavoritesPage />
            </Suspense>
          } />
          <Route path="/generate" element={<GenerateAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

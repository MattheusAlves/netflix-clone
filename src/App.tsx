import React, { useEffect, useState } from 'react'

import Tbmdb, { MediaProps } from './actions/Tmdb'
import MovieRow from './components/MovieRow'
import Header from './components/Header'
import FeatureMovie from './components/FeatureMovie'
import './styles/Home.css'

function App() {
  const [movieList, setMovieList] = useState<MediaProps[] | undefined>([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tbmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(item => item.slug === 'originals')
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      )
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tbmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    loadAll()
  }, [])
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        !blackHeader && setBlackHeader(true)
      } else {
        !!!blackHeader && setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeatureMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"
            alt="loading"
          />
        </div>
      )}
    </div>
  )
}

export default App

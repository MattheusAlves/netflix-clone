import Fetcher from '../util/fetcher'

export interface MediaProps {
  slug: string;
  title: string;
  items: MovieProps
}
export interface MovieProps {
  page: number;
  results: Array<Record<string, any>>
}

interface HomeListProps {
  getHomeList: () => Promise<MediaProps[]>;
  getMovieInfo: (movieId: string, type: string) => Promise<Record<string, any>>
}

const actions: HomeListProps = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await Fetcher(`/discover/tv?with_network=213`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await Fetcher(`/trending/all/week?`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await Fetcher(`/movie/top_rated?`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await Fetcher(`/discover/movie?with_genres=28`)
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await Fetcher(`/discover/movie?with_genres=35`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await Fetcher(`/discover/movie?with_genres=27`)
      },
      {
        slug: 'recomance',
        title: 'Romance',
        items: await Fetcher(`/discover/movie?with_genres=10749`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await Fetcher(`/discover/movie?with_genres=99`)
      }
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await Fetcher(`/movie/${movieId}?`)
          break
        case 'tv':
          info = await Fetcher(`/tv/${movieId}?`)
          break
        default:
          return null
      }
    }
    return info
  }
}

export default actions

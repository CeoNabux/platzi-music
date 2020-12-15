import platziMusicService from '@/services/platzi-music'

const trackService = {}

trackService.search = function(q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: {q, type}
  })
  .then(res => res.data)
}


trackService.getById = function (id) {
  return platziMusicService.get(`/track/${id}`)
    .then(res => res.data)
}

export default trackService
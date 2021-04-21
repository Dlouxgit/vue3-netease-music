import request from '@/utils/request'

export const getPersonalizedNewsong = function getPersonalizedNewsong(
  data: any
) {
  return request({
    url: '/personalized/newsong',
    data,
  })
}
export const getPersonalizedSongs = function getPersonalizedSongs(data: any) {
  return request({
    url: '/personalized?limit=10',
    data,
  })
}

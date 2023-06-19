import React from 'react'
import http from '@/app/utils/http'





export const getProducts=() =>( http.get('products'))
export const getProducts_item=(params: string) =>( http.get(`products/${ params}`))
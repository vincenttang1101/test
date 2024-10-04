import digitalOceanApi from '@/shared/apis/digital-ocean.api'
import productApi from '@/shared/apis/product.api'

import { PricingTable } from '../PricingTable'

const getVpsList = async () => {
  try {
    const res = await productApi.getProductsBySubOrderPage({
      categoryId: 1
    })
    return res.data
  } catch (error) {
    console.log(error)
    return []
  }
}
const getBasicDigitalOcean = async () => {
  try {
    const res = await digitalOceanApi.getSizesByType({
      type: 'Basic'
    })
    return res.data
  } catch (error) {
    console.log(error)
    return []
  }
}
const getGeneralPurposeDigitalOcean = async () => {
  try {
    const res = await digitalOceanApi.getSizesByType({
      type: 'General Purpose'
    })
    return res.data
  } catch (error) {
    console.log(error)
    return []
  }
}
const getCpuOptimizedDigitalOcean = async () => {
  try {
    const res = await Promise.all([
      digitalOceanApi.getSizesByType({
        type: 'CPU-Optimized'
      }),
      digitalOceanApi.getSizesByType({
        type: 'Premium Intel'
      })
    ])
    return res.flatMap((data) => data.data)
  } catch (error) {
    console.log(error)
    return []
  }
}
const getMemoryOptimizedDigitalOcean = async () => {
  try {
    const res = await digitalOceanApi.getSizesByType({
      type: 'Memory-Optimized'
    })
    return res.data
  } catch (error) {
    console.log(error)
    return []
  }
}
const getStorageOptimizedDigitalOcean = async () => {
  try {
    const res = await digitalOceanApi.getSizesByType({
      type: 'Storage-Optimized'
    })
    return res.data
  } catch (error) {
    console.log(error)
    return []
  }
}
export const PricingSection = async () => {
  const vpsData = await getVpsList()
  const [
    basicDigitalOcean,
    generalPurposeDigitalOcean,
    cpuOptimizedDigitalOcean,
    memoryOptimizedDigitalOcean,
    storageOptimizedDigitalOcean
  ] = await Promise.all([
    getBasicDigitalOcean(),
    getGeneralPurposeDigitalOcean(),
    getCpuOptimizedDigitalOcean(),
    getMemoryOptimizedDigitalOcean(),
    getStorageOptimizedDigitalOcean()
  ])

  const digitalOceanData = {
    Basic: basicDigitalOcean,
    'General Purpose': generalPurposeDigitalOcean,
    'CPU-Optimized': cpuOptimizedDigitalOcean,
    'Memory-Optimized': memoryOptimizedDigitalOcean,
    'Storage-Optimized': storageOptimizedDigitalOcean
  }

  return (
    <div className='container py-[120px]'>
      <PricingTable vpsData={vpsData} digitalOceanData={digitalOceanData} />
    </div>
  )
}

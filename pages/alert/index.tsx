import React from 'react'
import dynamic from 'next/dynamic';

// エラーになる
// import Alert  from '../../components/Alert'
const Alert = dynamic(() => import('../../components/Alert'),{ssr:false})
const AlertPage = () => {
  return (
    <Alert/>
  )
}
export default AlertPage

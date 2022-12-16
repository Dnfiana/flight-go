import React, {useState} from 'react'
import {
  CCol,
  CRow,
  CTable,
  CPagination,
  CPaginationItem,
  CModal,
  CModalBody
} from '@coreui/react'
import Sort from '../../../components/assets/sort.png'
import Share from '../../../components/assets/Vector.png'
import Payment from '../../../components/assets/bukti.png'


const Accordion = () => {

  const [payment, setPayment] = useState(false)

  const columns = [
    {
      key: 'id',
      label: 'Transaksi ID',
      _props: { scope: 'col' },
    },
    
    {
      key: 'heading_1',
      label: 'Date',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'User ID',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Product ID',
      _props: { scope: 'col' },
    },
    {
      key: 'payment',
      label: 'Payment Confirmation',
      _props: { scope: 'col' },
    },
    {
      key: 'btn',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: 'hai',
      payment : <button className='w-5' onClick={() => setPayment(true)}><img src={Share} alt=''/></button>,
      btn: <><button className='bg-[#08AA58] py-1 px-2 mr-1 rounded-sm text-white'>Accept</button><button className='bg-[#FF0000] py-1 px-2 mr-1 rounded-sm text-white'>Delete</button></>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      payment : <button className='w-5' onClick={() => setPayment(true)}><img src={Share} alt=''/></button>,
      btn: <><button className='bg-[#08AA58] py-1 px-2 mr-1 rounded-sm text-white'>Accept</button><button className='bg-[#FF0000] py-1 px-2 mr-1 rounded-sm text-white'>Delete</button></>,
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_1 : 'aw',
      heading_2: '@twitter',
      payment : <button className='w-5' onClick={() => setPayment(true)}><img src={Share} alt=''/></button>,
      btn: <><button className='bg-[#08AA58] py-1 px-2 mr-1 rounded-sm text-white'>Accept</button><button className='bg-[#FF0000] py-1 px-2 mr-1 rounded-sm text-white'>Delete</button></>,
      _cellProps: { id: { scope: 'row' }},
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <p className='font-bold text-3xl'>List Booking Order</p>
        <p className='py-2 px-3 bg-gray-200 my-4'>Table list Booking Order</p>
        <button className='flex items-center bg-[#F66F4D] text-white px-3 py-1 rounded-lg'>Filter <img src={Sort} alt='' className='w-5'/></button>
        <p className=' mt-10 font-bold ml-5'>Latest Orders</p>
        <CTable responsive columns={columns} items={items} className='shadow-sm text-center bg-[#FFFFFF]'/>

        <CPagination aria-label="Page navigation example" className='m-auto justify-center'>
          <CPaginationItem aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>1</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>2</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>3</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>4</CPaginationItem>
          <CPaginationItem className='border-2 mx-1 rounded'>5</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </CCol>

      <CModal visible={payment} onClose={() => setPayment(false)}>
        <CModalBody className='text-center'>
            <p className='text-center font-bold'>Bukti Pembayaran</p>
            <img src={Payment} alt=''/>
            <button className='py-3 px-5 text-[#F66F4D] border-2 border-[#F66F4D]' onClick={() => setPayment(false)}>Close</button>
        </CModalBody>
      </CModal>

    </CRow>
  )
}

export default Accordion

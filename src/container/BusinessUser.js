import React,{useState} from 'react'
import SearchBar from '../component/searchbar'
import UserPage from '../component/UserPage'
import Modal from '../component/Modal'

function BusinessUser() {
   const [show, setShow] = useState(false);
  const closeModalHandler =()=> setShow(false)
  return (
    <div>
      <div>
        {show ? <div  onClick ={closeModalHandler} className="dropDown"></div>: null}
      <SearchBar
      show={show}
      setShow={setShow}
      closeModalHandler ={closeModalHandler}
      />
      <UserPage />
      <UserPage />
      <UserPage />
      <UserPage />
      <UserPage />

      </div>
        <Modal
    show={show}
    closeModalHandler={closeModalHandler}
    />
     

    </div>
  )
}

export default BusinessUser

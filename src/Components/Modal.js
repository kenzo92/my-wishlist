import React from 'react'
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { modalClose } from '../features/modal/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>Remove all items from your shopping cart?</h4>
            <div className='btn-container'>
                <button type='button' className='confirm-btn' onClick={()=> {
                    dispatch(clearCart())
                    dispatch(modalClose())}}>
                    confirm
                </button>
                <button type='button' className='clear-btn' onClick={() => dispatch(modalClose())}>
                    cancel
                </button>
            </div>
        </div>
    </aside>
  )
}

export default Modal

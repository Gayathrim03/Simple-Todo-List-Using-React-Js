function Modal(props){
    function cancelHandler(){
        return props.onCancel();
    }
    function confirmHandler(){
        return props.onConfirm();
    }
 return(
    <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt'onClick={cancelHandler}>Cancel</button>
        <button className='btn' onClick={confirmHandler}>Confrim</button>
    </div>
 );
}
export default Modal;
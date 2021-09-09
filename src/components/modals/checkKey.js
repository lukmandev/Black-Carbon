import { useDispatch, useSelector } from 'react-redux';



const CheckKeyModal = () => {
	const dispatch = useDispatch();
	const state = useSelector(({checkKeyModal}) => checkKeyModal);

	return (
		<div className={`${state.isActive ? "active": ""} checkKey w-full h-full fixed left-0 top-0 flex justify-center items-center`}>
		  <div className="checkKey-modal relative">
		    <i className="fal fa-times text-white close-modal absolute cursor-pointer" />
		    <form action="#src/" className="checkKey__form grid grid-cols-1 justify-center">
		      <input type="text" className="text-white" placeholder="Введите ключ" />
		      <button type="submit" className="flex justify-center items-center text-white">
		        Check
		      </button>
		    </form>
		  </div>
		</div>
	)
}


export default CheckKeyModal;
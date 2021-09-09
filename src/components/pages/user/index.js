import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import Loading from './loading';
import NotFound from './notFound';
import CheckKeyModal from '../../modals/checkKey';

const UserPageWrapper = () => {
	const dispatch = useDispatch();
	const state = useSelector(allState => {
		return {
			user: allState.userPage.user,
			userLoaded: allState.userPage.userLoaded,
			responseError: allState.userPage.responseError,
			userNotFound: allState.userPage.userNotFound,
		}
	});
	const { id } = useParams();

	const outInfo = () => {
		if(state.userLoaded){
			if(state.responseError){
				return <h1>ПРОИЗОШЛА КАКАЯ ТО ОШИБКА</h1>
			}
			if(state.userNotFound){
				return <NotFound />
			}
			return (
				<>
					<CheckKeyModal />
					<h1>USER</h1>
				</>
			)
		}
		return <Loading />

	}
	return (
		<>
			{outInfo()}
		</>
	)
}


export default UserPageWrapper;
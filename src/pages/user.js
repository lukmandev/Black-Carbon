import InfoField from '../components/pages/user/infoField';
import UserPageWrapper from '../components/pages/user/index';

const data = [
	{
		icon: "far fa-envelope",
		value: "AkylbekKubanych@Gmail.Com"
	},
	{
		icon: "fas fa-globe-americas",
		value: "AkylbekKubanych@Gmail.Com"
	},
	{
		icon: "fas fa-phone-volume",
		value: "4325345345"
	},
	{
		icon: "fab fa-whatsapp",
		value: "879507684930"
	}
]



const User = () => {
	return <UserPageWrapper />
	return (
		<div className="profile w-full">
		  <img src="assets/images/user-bg.jpg" alt="" className="user-bg object-cover absolute left-0 top-0 w-full" />
		  <div className="wrapper">
		    <div className="profile-holder">
		      <div className="profile__top items-center justify-center">
		        <div className="w-full p-100 relative">
		          <div className="profile__img absolute left-0 top-0 w-full h-full">
		            <img src={require('../assets/images/profile.jpg').default} alt="" className="object-cover w-full h-full" />
		          </div>
		        </div>
		        <div className="profile__user-info flex flex-col items-start justify-start">
		          <span className="user-name text-white font-bold">
		            Kubanych Akylbek
		          </span>
		          <span className="user-position text-white font-normal">
		            Founder in Motion Web
		          </span>
		        </div>
		      </div>
		      <div className="profile__form w-full grid grid-col-1">
		        <div className="user-biography w-full grid items-center">
		          <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Tenetur inventore eius, iusto. Itaque, ab sunt quisquam. Facere ab dolore eligendi accusantium, molestiae vel voluptas consequuntur modi voluptates, alias sit. Ipsam harum explicabo incidunt sunt possimus.</p>
		        </div>
		        <div className="w-full grid grid-cols-1 items-center justify-start">
		          <p className="user-biography-empty font-normal text-white">Пользователь не написал ничего о себе</p>
		        </div>
		        {data.map((elem) => {
		        	return <InfoField {...elem} />
		        })}
		        <div className="user__socials flex w-full">
		          <a className="social__item flex justify-center items-center">
		            <i className="fab fa-instagram text-white" />
		          </a>
		          <a className="social__item flex justify-center items-center">
		            <i className="fab fa-whatsapp text-white" />
		          </a>
		          <a className="social__item flex justify-center items-center">
		            <i className="fab fa-facebook-square text-white" />
		          </a>
		        </div>
		        <div className="user__socials flex w-full">
		          <span className="text-white text-center socials-empty">Пользователь не поставил ссылку ни на один социальную сеть</span>
		        </div>
		        <div className="profile__bottom flex justify-center items-center grid grid-col-1">
		          <span className="font-light cursor-pointer profile__bottom-text flex justify-center">
		            Its your account? 
		          </span>
		          <button className="user-connect-btn flex justify-center items-center w-full text-white">
		            Connect
		          </button>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

	)
}

export default User;
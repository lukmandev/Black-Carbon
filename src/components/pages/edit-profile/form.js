


import Biography from './biography';


const EditForm = () => {

	return (
		<div className="profile w-full">
		  <img src="assets/images/user-bg.jpg" alt="" className="user-bg object-cover absolute left-0 top-0 w-full" />
		  <div className="wrapper">
		    <div className="profile-holder">
		      <div className="profile__top items-center justify-center relative">
		        <div className="w-full p-100 relative">
		          <div className="profile__img absolute left-0 top-0 w-full h-full">
		            <img src={require("../../../assets/images/profile.jpg").default} alt="" className="object-cover w-full h-full" />
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
		        <button className="edit-user-info absolute text-white right-0 bottom-0">
		          Изменить
		        </button>
		      </div>
		      <div className="profile__form w-full grid grid-cols-1">
		        <Biography />
		        <div className="form__item grid items-center">
		          <div className="icon__preview flex items-center">
		            <i className="far fa-envelope text-white" />
		          </div>
		          <input className="form__item-input text-white" placeholder="Enter your email" />
		        </div>
		        <div className="form__item grid items-center">
		          <div className="icon__preview flex items-center">
		            <i className="fas fa-globe-americas text-white" />
		          </div>
		          <input className="form__item-input text-white" placeholder="Enter your website" />
		        </div>
		        <div className="form__item grid items-center">
		          <div className="icon__preview flex items-center">
		            <i className="fas fa-phone-volume text-white" />
		          </div>
		          <input className="form__item-input text-white" placeholder="Enter Your Phone" />
		        </div>
		        <div className="form__item grid items-center">
		          <div className="icon__preview flex items-center">
		            <i className="fab fa-whatsapp text-white" />
		          </div>
		          <input className="form__item-input text-white" placeholder="Enter your Whatsapp phone" />
		        </div>
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
		        <div className="profile__bottom flex justify-center items-center grid grid-col-1">
		          <button className="user-connect-btn flex justify-center items-center w-full text-white">
		            Изменить
		          </button>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	)
}


export default EditForm;
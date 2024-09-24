import { useState } from "react";
import mobileBackground from './assets/images/bg-intro-mobile.png';
import desktopBackground from './assets/images/bg-intro-desktop.png';
import errorIcon from './assets/images/icon-error.svg';

const Page = () => {
    const [formValues, setFormValues] = useState({
        first: '',
        last: '',
        email: '',
        password: '',
      });

      const [formErrors, setFormErrors] = useState({
        first: false,
        last: false,
        email: false,
        password: false,
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({
          ...formValues,
          [id]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {
          first: formValues.first === '',
          last: formValues.last === '',
          email: formValues.email === '',
          password: formValues.password === '',
        };

        setFormErrors(errors);
        const noErrors = Object.values(errors).every((error) => !error);
        if(noErrors){
          console.log('Formulario enviado', formValues);

          setFormValues({
            first: '',
            last: '',
            email: '',
            password: '',
          });
        } else {
          console.log('Hay errores en el formulario');
        }
    
      };

  return(

  <div className="bg-Primary-Red flex justify-center items-center h-screen font-Poppins">

  <div className="absolute inset-0">

    <img src={mobileBackground} alt="Background mobile" className="desktop:hidden mobile:block sm:hidden w-full h-full object-cover" />

    <img src={desktopBackground} alt="Background desktop" className=" mobile:hidden sm:block desktop:block w-full h-full object-cover " />
  </div>

  <div className="mobile:w-[375px] desktop:w-full flex desktop:flex-row mobile:flex-col mobile:items-center desktop:justify-center ">

  <div className="desktop:mr-[70px] desktop:w-[500px] desktop:h-[210px] mobile:w-[330px]">
  <div className="mb-[25px]">
    <h1 className="mobile:text-[26px] desktop:text-[50px] desktop:w-[500px] font-bold text-white mobile:text-center desktop:text-start desktop:leading-[60px]">Learn to code by watching others</h1>
  </div>
  
  <div className="mb-[70px] mobile:w-[330px]">
    <p className="mobile:text-center desktop:text-start text-white font-medium text-[16px] desktop:w-[500px]">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
  </div>
  </div>

  <div>
    <div className="relative">
  <div className="bg-black opacity-15 mobile:h-[90px] mobile:w-[330px] rounded-xl desktop:h-[60px] desktop:w-[540px] absolute z-0 top-2">
  </div>
  <div className="bg-Accent-Blue mobile:h-[90px] mobile:w-[330px] mb-[30px] flex flex-row justify-center items-center text-white pl-[70px] pr-[70px] rounded-xl desktop:h-[60px] desktop:w-[540px] relative z-10">
    <p className="text-center text-[16px]"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</p>
  </div>
  </div>

  <div className="relative ">
  <div className="mobile:h-full w-[330px] bg-black opacity-15 flex flex-col items-center p-[25px] desktop:p-[40px] gap-[15px] desktop:gap-[20px] rounded-xl desktop:h-full desktop:w-[540px] absolute z-0 top-2"></div>

  <form onSubmit={handleSubmit} id="registerForm" className="w-[330px] bg-white flex flex-col items-center p-[25px] desktop:p-[40px] gap-[15px] desktop:gap-[20px] rounded-xl mobile:h-full desktop:w-[540px] relative z-10">
    <div className="relative flex flex-col items-end" >
      <input 
      type="text" 
      id="first"
      value={formValues.first}
      onChange={handleChange}
      placeholder="First Name"
      className={`mobile:w-[280px] mobile:h-[55px] desktop:w-[460px] border-2 rounded text-[18px] font-semibold text-Dark-Blue pl-5 pr-5 mobile:right-[20px] ${formErrors.first ? 'border-Primary-Red' : ''}`}/>
      <img src={errorIcon} alt="error" className={`absolute top-[15px] mobile:right-[20px] right-[25px] ${formErrors.first ? 'block' : 'hidden'}`} />
      <span className={`text-Primary-Red text-[11px] font-semibold mt-1 ${formErrors.first ? 'block' : 'hidden'}`}>First name cannot be empty</span>
    </div>

    <div className="relative flex flex-col items-end" >
      <input 
      type="text" 
      id="last"
      value={formValues.last}
      onChange={handleChange}
      placeholder="Last Name"
      className={`mobile:w-[280px] mobile:h-[55px] desktop:w-[460px] border-2 rounded text-[18px] font-semibold text-Dark-Blue pl-5 pr-5 ${formErrors.last ? 'border-Primary-Red' : ''}`}/>
      <img src={errorIcon} alt="error" className={`absolute top-[15px] mobile:right-[20px]  right-[25px] ${formErrors.last ? 'block' : 'hidden'}`} />
      <span className={`text-Primary-Red text-[11px] font-semibold mt-1 ${formErrors.last ? 'block' : 'hidden'}`}>Last name cannot be empty</span>
    </div>

    <div className="relative flex flex-col items-end justify-center" >
      <input 
      type="email" 
      id="email"
      value={formValues.email}
      onChange={handleChange}
      placeholder="Email Address"
      className={`mobile:w-[280px] mobile:h-[55px] desktop:w-[460px] border-2 rounded text-[18px] font-semibold text-Dark-Blue pl-5 pr-5 ${formErrors.email ? 'border-Primary-Red' : ''}`}/>
      <img src={errorIcon} alt="error" className={`absolute top-[15px] mobile:right-[20px] right-[25px] ${formErrors.email ? 'block' : 'hidden'}`} />
      <span className={`text-Primary-Red text-[11px] font-semibold mt-1 ${formErrors.email ? 'block' : 'hidden'}`}>Email cannot be empty</span>
    </div>

    <div className="relative flex flex-col items-end" >
    <input
      type="password"
      id="password"
      value={formValues.password}
      onChange={handleChange}
      placeholder="Password"
      className={`mobile:w-[280px] mobile:h-[55px] desktop:w-[460px] border-2 rounded text-[18px] font-semibold text-Dark-Blue pl-5 ${
      formErrors.password ?'border-Primary-Red' : ''
      }`}
      />
      <img src={errorIcon} alt="error" className={`absolute top-[15px] mobile:right-[20px] right-[25px] ${formErrors.password ? 'block' : 'hidden'}`} />
      <span className={`text-Primary-Red text-[11px] font-semibold mt-1 ${formErrors.password ? 'block' : 'hidden'}`}>Password cannot be empty</span>
                            
    </div>

    <button
      type="submit"
      className="mobile:w-[280px] mobile:h-[55px] desktop:w-[460px] bg-Primary-Green text-white rounded-lg text-[18p] font-semibold border-b-4 border-black border-opacity-20 hover:opacity-70"
      >
      CLAIM YOUR FREE TRIAL
    </button>

    <p className="text-Grayish-Blue text-center text-[12px]">By clicking the button, you are agreeing to our <span className="text-Primary-Red font-bold">Terms and Services</span></p>
  </form>
  </div>
  </div>
  </div>
</div>

  );
};

export default Page

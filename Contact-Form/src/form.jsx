import { useState, useEffect } from "react";
import check from "./assets/images/icon-checkbox-check.svg";
import point from "./assets/images/icon-radio-selected.svg";
import success from "./assets/images/icon-success-check.svg";

const Form = () => {
  const [selectedQuery, setSelectedQuery] = useState("");
  const [formValues, setFormValues] = useState({
    first: '',
    last: '',
    email: '',
    query: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    first: false,
    last: false,
    email: false,
    query: false,
    message: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false); 

  const handleChange = (event) => {
    setSelectedQuery(event.target.value);
    setFormValues({
      ...formValues,
      query: event.target.value,
    });
  };

  const handleChange2 = (event) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      first: formValues.first === "",
      last: formValues.last === "",
      email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email),
      query: formValues.query === "",
      message: formValues.message === "",
      consent: !checkboxChecked, 
    };

    setFormErrors(errors);

    const noErrors = Object.values(errors).every((error) => !error);
    if (noErrors) {
      console.log('Formulario enviado', formValues);
      setFormSubmitted(true);
      setFormValues({
        first: '',
        last: '',
        email: '',
        query: '',
        message: '',
      });
      setSelectedQuery("");
      setCheckboxChecked(false); 
    } else {
      console.log('Hay errores en el formulario');
    }
  };

  useEffect(() =>{
    if(formSubmitted){
        const timer = setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
        return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <main className="bg-Green-200-lighter flex flex-col justify-center items-center w-full h-screen p-5">
      <section className="mobile:w-[343px] mobile:h-auto desktop:w-[740px] desktop:h-auto bg-White-Neutral rounded-xl flex flex-col justify-center mobile:p-[25px] desktop:p-[40px] z-0 relative">
        <h1 className="h-[22px] font-karla font-bold text-[30px] text-Grey-900-darker mb-[40px] flex items-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} id="contactForm" className="desktop:flex desktop:flex-wrap desktop:gap-x-[18px]">

          <div className="flex flex-col w-full desktop:w-[321px]">
            <label htmlFor="first" className="font-karla font-normal text-[16px]">
              First Name <span className="text-Green-600-medium"> *</span>
            </label>
            <input
              type="text"
              id="first"
              value={formValues.first}
              onChange={handleChange2}
              name="first"
              placeholder=""
              className={`mobile:h-[50px] desktop:h-[48px] w-full border rounded-md px-2 mt-[11px] mb-[23px] focus:outline-none text-[16px] pl-[24px] pr-[24px] ${
                formErrors.first ? "border-Red-Primary focus:outline-none focus:border-Red-Primary" : "border-gray-900 focus:border-Green-600-medium"
              }`}
            />
            <span className={`text-Red-Primary text-[16px] mt-[-13px] mb-[25px] font-karla ${formErrors.first ? "block" : "hidden"}`}>
              This field is required
            </span>
          </div>

          <div className="flex flex-col w-full desktop:w-[321px]">
            <label htmlFor="last" className="font-karla font-normal text-[16px]">
              Last Name <span className="text-Green-600-medium"> *</span>
            </label>
            <input
              type="text"
              id="last"
              value={formValues.last}
              onChange={handleChange2}
              name="last"
              placeholder=""
              className={`mobile:h-[50px] desktop:h-[48px] w-full border rounded-md px-2 mt-[11px] mb-[23px] focus:outline-none text-[16px] pl-[24px] pr-[24px] ${
                formErrors.last ? "border-Red-Primary"  : "border-gray-900 focus:border-Green-600-medium"
              }`}
            />
            <span className={`text-Red-Primary text-[16px] mt-[-13px] mb-[25px] font-karla ${formErrors.last ? "block" : "hidden"}`}>
              This field is required
            </span>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="font-karla font-normal text-[16px]">
              Email Address <span className="text-Green-600-medium"> *</span>
            </label>
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleChange2}
              name="email"
              placeholder=""
              className={`mobile:h-[50px] desktop:h-[48px] w-full border rounded-md px-2 mt-[11px] mb-[23px] focus:outline-none text-[16px] pl-[24px] pr-[24px] ${
                formErrors.email ? "border-Red-Primary" : "border-gray-900 focus:border-Green-600-medium"
              }`}
            />
            <span className={`text-Red-Primary text-[16px] mt-[-13px] mb-[25px] font-karla ${
                formErrors.email ? "block" : "hidden"
                }`}>
                {formValues.email === "" ? "This field is required" : "Please enter a valid email address"}
                </span>
          </div>

          <div className="flex flex-col desktop:gap-x-[18px] mobile:mb-[23px]">
            <label htmlFor="queryType" className="font-karla font-normal text-[16px] mb-[11px]">
              Query Type <span className="text-Green-600-medium"> *</span>
            </label>

            <div className="flex desktop:flex-row w-full desktop:gap-x-[18px] mobile:flex-col mobile:gap-y-[13px] cursor-pointer">

              <div
                className={`flex items-center mobile:h-[50px] desktop:h-[48px] desktop:w-[321px] border rounded-md pl-[26px] cursor-pointer ${
                  selectedQuery === "general" ? "border-Green-600-medium bg-Green-200-lighter" : "border-gray-900"
                }`}
                onClick={() => {
                  setSelectedQuery("general");
                  setFormValues({ ...formValues, query: "general" });
                }}
              >
                <input
                  type="radio"
                  id="generalEnquiry"
                  name="queryType"
                  value="general"
                  onChange={handleChange}
                  checked={selectedQuery === "general"}
                  className="h-[20px] w-[20px] cursor-pointer appearance-none border border-gray-900 rounded-full"
                />
                {selectedQuery === "general" && <img src={point} alt="Selected" className="ml-[-20px] h-[20px] w-[20px]" />}
                <label htmlFor="generalEnquiry" className="font-karla font-normal text-[16px] ml-[16px] cursor-pointer">
                  General Enquiry
                </label>
              </div>

              <div
                className={`flex items-center mobile:h-[50px] desktop:h-[48px] desktop:w-[321px] border rounded-md pl-[26px] cursor-pointer ${
                  selectedQuery === "support" ? "border-Green-600-medium bg-Green-200-lighter" : "border-gray-900"
                }`}
                onClick={() => {
                  setSelectedQuery("support");
                  setFormValues({ ...formValues, query: "support" });
                }}
              >
                <input
                  type="radio"
                  id="supportRequest"
                  name="queryType"
                  value="support"
                  onChange={handleChange}
                  checked={selectedQuery === "support"}
                  className="h-[20px] w-[20px] cursor-pointer appearance-none border border-gray-900 rounded-full"
                />
                {selectedQuery === "support" && <img src={point} alt="Selected" className="ml-[-20px] h-[20px] w-[20px]" />}
                <label htmlFor="supportRequest" className="font-karla font-normal text-[16px] ml-[16px] cursor-pointer">
                  Support Request
                </label>
              </div>
            </div>
          </div>
          <span className={`text-Red-Primary text-[16px] mt-[-13px] mb-[25px] font-karla ${formErrors.query ? "block" : "hidden"}`}>
          Please select a query type
          </span>

          <div className="flex flex-col w-full desktop:w-full mb-[23px]">
            <label htmlFor="message" className="font-karla font-normal text-[16px]">
              Your Message <span className="text-Green-600-medium"> *</span>
            </label>
            <textarea
              id="message"
              value={formValues.message}
              onChange={handleChange2}
              name="message"
              placeholder=""
              rows="5"
              className={`mobile:h-[240px] w-full desktop:h-[104px] border rounded-md px-2 mt-[11px] focus:outline-none text-[16px] pl-[24px] pt-[20px] pb-[20px] pr-[24px] ${
                formErrors.message ? "border-Red-Primary"  : "border-gray-900 focus:border-Green-600-medium"
              }`}
            />
            <span className={`text-Red-Primary text-[16px] mt-[10px] mb-[7px] font-karla ${formErrors.message ? "block" : "hidden"}`}>
              This field is required
            </span>
          </div>

          <div className="flex items-center mb-[23px]">
            <input
              type="checkbox"
              id="consent"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              className="mobile:h-[28px] mobile:w-[28px] desktop:h-[20px] desktop:w-[20px] cursor-pointer border rounded-none border-gray-900"
            />
            {checkboxChecked && <img src={check} alt="Checked" className="ml-[-20px] h-[20px] w-[20px]" />}
            <label htmlFor="consent" className="font-karla font-normal text-[16px] ml-[16px]  cursor-pointer">
              I consent to the processing of my personal data.
            </label>
          </div>
          <span className={`text-Red-Primary text-[16px] mt-[-13px] mb-[25px] font-karla ${formErrors.consent ? "block" : "hidden"}`}>
          To submit this form, please consent to being contacted
          </span>

          <button
            type="submit"
            className="bg-Green-600-medium text-White-Neutral h-[58px] rounded-md hover:bg-Green-600-dark font-karla font-bold text-[16px] flex justify-center items-center w-full hover:bg-Green-hover ">Submit
          </button>
        </form>
      </section>
      {formSubmitted && (
        <div className="desktop:h-[106px] desktop:w-[450px] bg-Green-alert text-White-Neutral font-karla text-[16px] p-[23px] rounded-xl absolute top-[160px] flex flex-col justify-center z-10 " role="alert">
            <div className="flex items-center mb-[12px]">
            <img src={success} alt="Success" className="h-[20px] w-[20px] mr-[10px]"/>
            <h3 className="font-bold">Message Sent!</h3>
          </div>
          <p className="font-normal">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
      )}
    </main>
  );
};

export default Form;

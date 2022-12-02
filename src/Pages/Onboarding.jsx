import React from "react";
import Navbar from "../Components/Navbar";

const Onboarding = () => {
  const handleChange = () => {};
  const handleSubmit = (e) => {

    e.preventDefault();
  };
  return (
    <>
      <Navbar minimal={true} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <h4> loook here for the fanbase do you want</h4>

        {/* <div className="form"> */}
          <form onSubmit={handleSubmit}>
            <section className="inputone">
             <div className="firstname">
                <label htmlFor="">First Name</label>
             <input
             style={{width:'100%'}}
                type="text"
                name="first-name"
                id="name"
                required={true}
                onChange={handleChange}
                value="name"
              />
             </div>
             <div className="dateofbirth ">
                <label htmlFor="">Birthday</label>
             <div className="inputgroup datebirth">
             <input
                type="number"
                name="dob_day"
                id="dob_day"
                required={true}
                onChange={handleChange}
                value="date of birth"
              />
             <input
                type="number"
                name="dob_month"
                id="dob_month"
                required={true}
                onChange={handleChange}
                value="date of month"
              />
             <input
                type="number"
                name="dob_year"
                id="dob_year"
                required={true}
                onChange={handleChange}
                value="date of year"
              />
             </div>
             </div>
             <div className="firstname ">
                <label htmlFor="">Select Gender </label>
            <div className="inputgroups genderlabel">
            <input
                type="radio"
                checked={true}
                name="gender_identity"
                id="man"
                value="man"
                required={true}
                onChange={handleChange}
                
              />
              <label >man</label>
             <input
                type="radio"
                name="gender_identity"
                id="woman"
                value="woman"
                required={true}
                onChange={handleChange}
                
              />
              <label >woman</label>
             <input
                type="radio"
                name="gender_identity"
                id="Others"
                value="Others"
                required={true}
                onChange={handleChange}
                
              />
              <label >Others</label>
            </div>
             </div>
             <div className="showgender">
                <label htmlFor="">Show Gender </label>
             <input
                type="checkbox"
                name="show_gender"
                id="name"
                required={true}
                onChange={handleChange}
              
              />
             </div>
             
             <div className="firstname">
                <label htmlFor="">Interesetd in  </label>
            <div className="inputgroups">
            <input
                type="radio"
                name="gender_interest"
                id="interestonman"
                required={true}
                onChange={handleChange}
               value="man"
              />
              <label>Man</label>
             <input
                type="radio"
                name="gender_interest"
                id="interestonwoman"
                required={true}
                onChange={handleChange}
               value="woman"
              />
                 <label>Woman</label>
             <input
                type="radio"
                name="gender_interest"
                id="interestonothers"
                required={true}
                onChange={handleChange}
               value="others"
              />
                 <label>Others</label>
            </div>
             </div>

             <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks..."
                          
                            onChange={handleChange}
                        />

                        <input type="submit"/>
            </section>
            <section className="secondone">

<label htmlFor="url">Profile Photo</label>
<input
    type="url"
    name="url"
    id="url"
    onChange={handleChange}
    required={true}
/>
{/* <div className="photo-container">
    {formData.url && <img src={formData.url} alt="profile pic preview"/>}
</div> */}


</section>
          </form>
        </div>
      {/* </div> */}
      {/* </Navbar> */}
    </>
  );
};

export default Onboarding;

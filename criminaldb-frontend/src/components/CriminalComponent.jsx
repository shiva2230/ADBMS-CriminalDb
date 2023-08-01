import React, { useEffect, useState } from 'react'
import { createCriminal, getCriminal, updateCriminal} from '../services/CriminalService';
import { useNavigate, useParams } from 'react-router-dom';

const CriminalComponent = () => {

    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [crimes, setCrimes] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [streetAddress1, setStreetAddress1] = useState('');
    const [streetAddress2, setStreetAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const {id} = useParams();

    const [errors,setErrors] = useState({
        name : '',
        height: '',
        weight: '',
        crimes: '',
        phone: '',
        dob: '',
        gender: '',
        streetAddress1: '',
        streetAddress2: '',
        country: '',
        state: '',
        city: '',
        postalCode: ''
    })

    const navigator = useNavigate();

    useEffect(() =>{
        if(id){
            getCriminal(id).then((response) => {
                setName(response.data.name);
                setHeight(response.data.height);
                setWeight(response.data.weight);
                setCrimes(response.data.crimes);
                setPhone(response.data.phone);
                setDob(response.data.dob);
                setGender(response.data.gender);
                setStreetAddress1(response.data.streetAddress1);
                setStreetAddress2(response.data.streetAddress2);
                setCountry(response.data.country);
                setState(response.data.state);
                setCity(response.data.city);
                setPostalCode(response.data.postalCode);
            }).catch(error=>{
                console.error()
            })
        }
    },[id])

    function saveOrUpdateCriminal(e) {
        e.preventDefault();
        if(validateForm()){
            const criminal = {
                name, height, weight, crimes, phone, dob, gender,
                streetAddress1, streetAddress2, country, state, city, postalCode
            }
            console.log(criminal);

            if(id){
                updateCriminal(id,criminal).then((response) => {
                    console.log(response.data);
                    navigator('/all');
                }).catch(error =>{
                    console.error(error);
                })
            }else{
                createCriminal(criminal).then((response) => {
            console.log(response.data);
            navigator('/all')
        }).catch(error =>{
            console.error(error);
        })
            }
        }
    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors} 

        if(name.trim()){
            errorsCopy.name = '';
        }else {
            errorsCopy.name='Name is required'
            valid=false;
        }

        if(height.trim()){
            errorsCopy.height='';
        }
        else{
            errorsCopy.height='Height is required'
            valid=false;
        }

        if(weight.trim()){
            errorsCopy.weight='';
        }
        else{
            errorsCopy.weight='Weight is required'
            valid=false;
        }

        if(crimes.trim()){
            errorsCopy.crimes='';
        }
        else{
            errorsCopy.crimes='Crimes is required'
        }

        if(phone.trim()){
            errorsCopy.phone='';
        }
        else{
            errorsCopy.phone='Phone no. is required'
            valid=false;
        }

        if(phone.trim()){
            errorsCopy.dob='';
        }
        else{
            errorsCopy.dob='Date of birth is required'
            valid=false;
        }

        if(phone.trim()){
            errorsCopy.gender='';
        }
        else{
            errorsCopy.gender='gender is required'
            valid=false;
        }

        if(streetAddress1.trim()){
            errorsCopy.streetAddress1='';
        }
        else{
            errorsCopy.streetAddress1='Street address is required'
            valid=false;
        }

        if(country.trim()){
            errorsCopy.country = '';
        }
        else{
            errorsCopy.country='Country name is required'
            valid=false;
        }

        if(state.trim()){
            errorsCopy.state='';
        }
        else{
            errorsCopy.state='State name is required'
            valid=false;
        }

        if(city.trim()){
            errorsCopy.city='';
        }
        else{
            errorsCopy.city='City name is required'
            valid=false;
        }

        if(postalCode.trim()){
            errorsCopy.postalCode='';
        }
        else{
            errorsCopy.postalCode='Postal code is required'
            valid=false;
        }

        setErrors(errorsCopy);
        return valid;


    }

    function pageTitle(){
        if(id){
            return <header>Update Criminal Data</header>
        }else{
            return <header>Registration Form</header>
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                {
                    pageTitle()
                }
                <section className="container">
                    <form action="#" className="form">

                        <div className="input-box">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid':''}`}
                                name='fullName'
                                value={name}
                                placeholder="Enter full name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />{errors.name && <div className ='invalid-feedback'>{errors.name} </div>}
                        </div>

                        <div className="input-box">
                            <label>Height</label>
                            <input
                                type="text"
                                className={`form-control ${errors.height ? 'is-invalid':''}`}
                                name='height'
                                value={height}
                                placeholder="Enter height"
                                onChange={(e) => setHeight(e.target.value)}
                                />
                                {errors.height && <div className ='invalid-feedback'>{errors.height} </div>}
                        </div>

                        <div className="input-box">
                            <label>Weight</label>
                            <input
                                type="text"
                                className={`form-control ${errors.weight ? 'is-invalid':''}`}
                                name='weight'
                                placeholder="Enter weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />  {errors.weight && <div className ='invalid-feedback'>{errors.weight} </div>}
                        </div>

                        <div className="input-box">
                        <label className="mb-0">
                            Crimes committed{' '}
                            <span className="small text-muted label-text">
                            (separate the values with commas, e.g., theft, murder, ...)
                            </span>
                        </label>
                            <input
                                type="text"
                                className={`form-control ${errors.crimes ? 'is-invalid':''}`}
                                name='crimes'
                                placeholder="Enter crimes committed"
                                value={crimes}
                                onChange={(e) => setCrimes(e.target.value)}
                            />  {errors.crimes && <div className ='invalid-feedback'>{errors.crimes} </div>}
                        </div>

                        <div className="column">

                            <div className="input-box">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.phone ? 'is-invalid':''}`}
                                    name='phone'
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required />
                                    {errors.phone && <div className ='invalid-feedback'>{errors.phone} </div>}
                            </div>

                            <div className="input-box">
                                <label>Birth Date</label>
                                <input
                                    type="date"
                                    className={`form-control ${errors.dob ? 'is-invalid':''}`}
                                    name='dob'
                                    placeholder="Enter birth date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required />
                                    {errors.dob && <div className ='invalid-feedback'>{errors.dob} </div>}
                                    
                            </div>
                        </div>

                        <div className="gender-box">
                            <h3>Gender</h3>
                            <div className="gender-option">
                                <div className="gender">
                                    <input
                                        type="radio"
                                        id="check-male"
                                        className='form-check-input'
                                        name="gender"
                                        value="male"  
                                        onChange={(e) => setGender(e.target.value)}
                                        checked={gender === "male"}  
                                    />
                                    <label className="form-check-label" htmlFor="check-male">male</label>
                                </div>
                                <div className="gender">
                                    <input
                                        type="radio"
                                        id="check-female"
                                        className='form-check-input'
                                        name="gender"
                                        value="female"  
                                        onChange={(e) => setGender(e.target.value)}
                                        checked={gender === "female"}  
                                    />
                                    <label className="form-check-label" htmlFor="check-female">Female</label>
                                </div>
                                <div className="gender">
                                    <input
                                        type="radio"
                                        id="check-other"
                                        className='form-check-input'
                                        name="gender"
                                        value="other"  
                                        onChange={(e) => setGender(e.target.value)}
                                        checked={gender === "other"}  
                                    />
                                    <label className="form-check-label" htmlFor="check-other">Others</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-box address">
                            <label>Address</label>
                            <input
                                type="text"
                                className={`form-control ${errors.streetAddress1 ? 'is-invalid':''}`}
                                name='streetAddress1'
                                placeholder="Enter street address 1"
                                value={streetAddress1}
                                onChange={(e) => setStreetAddress1(e.target.value)}
                                required />
                                {errors.streetAddress1 && <div className ='invalid-feedback'>{errors.streetAddress1} </div>}
                            <input
                                type="text"
                                className='form-control'
                                name='streetAddress2'
                                placeholder="Enter street address 2"
                                value={streetAddress2}
                                onChange={(e) => setStreetAddress2(e.target.value)}
                                required
                            />
                            <div className="column">
                                <input
                                    type="text"
                                    className={`form-control ${errors.country ? 'is-invalid':''}`}
                                    name='country'
                                    placeholder="Country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required />
                                    {errors.country && <div className ='invalid-feedback'>{errors.country} </div>}
                            </div>
                            <div className="column">
                                <input
                                    type="text"
                                    className={`form-control ${errors.state ? 'is-invalid':''}`}
                                    name='state'
                                    placeholder="State"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required />
                                    {errors.state && <div className ='invalid-feedback'>{errors.state} </div>}
                                <div className="select-box">
                                    <select className={`form-control ${errors.city ? 'is-invalid':''}`} name='city' value={city} onChange={(e) => setCity(e.target.value)}>
                                        <option hidden>City</option>
                                        <option>Thiruvananthapuram</option>
                                        <option>Kollam</option>
                                        <option>Pathanamthitta</option>
                                        <option>Alappuzha</option>
                                        <option>Kottayam</option>
                                        <option>Idukki</option>
                                        <option>Eranakulam</option>
                                        <option>Thrissur</option>
                                        <option>Palakkad</option>
                                        <option>Malappuram</option>
                                        <option>Kozhikode</option>
                                        <option>Wayanad</option>
                                        <option>Kannur</option>
                                        <option>Kasargod</option>
                                    </select>
                                    {errors.city && <div className ='invalid-feedback'>{errors.city} </div>}
                                </div>

                            </div>
                            <div className="column">
                                {/* <input type="text" placeholder="Enter your region" required /> */}
                                <input
                                    type="number"
                                    className={`form-control ${errors.postalCode ? 'is-invalid':''}`}
                                    name='postalCode'
                                    placeholder="Enter postal code"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    required />
                                    {errors.postalCode && <div className ='invalid-feedback'>{errors.postalCode} </div>}
                            </div>
                            {/* <div class="file">
            <br/>
            <label for="uploadFile">Upload Image</label>
            <input type="file" id="uploadFile"/>
          </div> */}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateCriminal}>Submit</button>
                    </form>
                </section>

            </div>
        </div>

    )
}

export default CriminalComponent
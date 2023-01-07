import React from 'react';
import '../Css/userform.css';
import home from '../Assets/home.svg';
import InputBox from './Input_box';


export default function UserForm() {
    return (
        <div className="container">
            <div className="form">
                <div className="topHeader">
                    <img src={home} alt="home" />
                    <div className="hospital_detail">
                        <h1>ACME CARE Hospital</h1>
                        <h3>3147 Patterson Street, Houston, TX, 77002</h3>
                        <h4>info@acmecare.com <br />
                            www.acmegcare.com <br />
                            (123) 1234567</h4>
                    </div>
                </div>

                <hr className="solid" />

                <div className="request_container">
                    <h1>Doctor Appointment Request Form</h1>
                    <h5>Fill the form below and we will get back soon to you for more updates and plan your appointment.</h5>
                </div>

                <div className="input_fields">
                    <div className="name">
                        <div className="title">Name</div>
                        <div className="input">
                            <InputBox id="fname" name="First Name" />
                            <InputBox id="lname" name="Last Name" />
                        </div>
                    </div>
                    <div className="dob">
                        <div className="title">Date of Birth</div>
                        <div className="input">
                            <div className="select_input">
                                <select
                                    name="date" id="date" class="form-dropdown" data-component="birthdate-day"
                                    aria-labelledby="label_9 sublabel_9_day">

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <h3>Date</h3>
                            </div>
                            <div className="select_input">
                                <select name="month" id="month">

                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                <h3>Month</h3>
                            </div>
                            <div className="select_input">
                                <select name="year" id="year" >
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                </select>
                                <h3>Year</h3>
                            </div>
                        </div>
                    </div>
                    <div className="phone_gen">
                        <div className="gender">
                            <div className="title">Gender</div>
                            <div className="input">
                                <select name="gender" id="gender" className="gender_input">
                                    <option value="pls_select">Please Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="title">Phone Number</div>
                            <div className="input">
                                <input type="text" className='phone_input' id="phone" placeholder='+91 XXXXXXXXXX' />
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <div className="title">Email</div>
                        <div className="input">
                            <input type="text" className='email_input' id="email" placeholder='ex: myname@example.com' />
                        </div>
                    </div>
                    <div className="facility_before">
                        <div className="title">Have you ever applied to our facility before?</div>
                        <div className="facility_select">
                            <div>
                                <input type="checkbox" name="yes" id="facility_yes" />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div>
                                <input type="checkbox" name="no" id="facility_no" />
                                <label htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="department">
                        <div className="title">Which department would you like to get an appointment from?</div>
                        <div className="input_field">
                            <input type="text" name="dept" id="dept" />
                        </div>
                    </div>
                    <div className="procedure">
                        <div className="title">Which procedure do you want to make an appointment for?</div>
                        <div className="input_field">
                            <select name="procedure" id="procedure_input">
                                <option value="pls_select">Please Select </option>
                                <option value="med_exam">Medical Examination</option>
                                <option value="doc_chk">Doctor Check</option>
                                <option value="res_ans">Result Analysis</option>
                                <option value="chk_up">Check Up</option>
                            </select>
                        </div>
                    </div>
                    <div className="appointment">
                        <div className="title">Preferred Appointment Date</div>
                        <div className="input_fields">
                            <input type="date" name="appointment_input" id="appointment_input" />
                        </div>
                    </div>
                    <div className="past_history">
                        <div className="title">Any Past History?</div>
                        <div className="input_fields">
                            <textarea name="past_history_input" id="past_history_input" ></textarea>
                        </div>
                    </div>
                    <div className="symptoms">
                        <div className="title">Symptoms</div>
                        <div className="input_fields">
                            <input type="text" name='symoptoms_input' id='symoptoms_input' />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

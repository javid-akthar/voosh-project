import React, { useState } from "react";
import "./Page8.css";
import bookNowBg from "../images/book_now_bg.webp";
import toastr from "toastr";

function Page8(props) {
  let [name, setName] = useState("");
  let [emailValue, setEmail] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [designation, setDesignation] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  const nameHandleChange = (event) => {
    setName(event.target.value);
  };

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };

  const companyNameHandleChange = (event) => {
    setCompanyName(event.target.value);
  };

  const designationHandleChange = (event) => {
    setDesignation(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandleChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  function addUser(e) {
    e.preventDefault();
    if(password === "" ||
    confirmPassword === "" ||
    name === "" ||
    emailValue === "" ||
    companyName === "" ||
    designation === "" 
    ){
        toastr.options.timeOut = 1500;
        toastr.warning("please fill the mandatory fields");
        return;
    }
    if(password !== confirmPassword){
        toastr.options.timeOut = 1500;
        toastr.warning("password Mismatch");
        return;
    }
    
    let prevData = localStorage.getItem(emailValue);
    if(prevData){
        prevData = JSON.parse(prevData);
        toastr.options.timeOut = 1500;
        toastr.warning("user already exist");
        return;
    }else{
        let userObj ={
            name,
            emailValue,
            companyName,
            designation,
            password,
        }
        localStorage.setItem(emailValue, JSON.stringify(userObj));

        setName("");
        setEmail("");
        setCompanyName("");
        setDesignation("");
        setPassword("");
        setConfirmPassword("");
        toastr.options.timeOut = 1500;
    toastr.success("User added");
    }
    
  }

  return (
    <div className="page8_container" id="Waitinglist">
      <div className="page8_container_text">
        <div className="page8_title">Book A Demo Now</div>
      </div>
      <div className="page8_text_container">
        <div className="card_container">
        <form>
          <div className="email_container">
            <div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <div className="input_container">
                  <div className="input_label">
                    Name <span className="compulsory_icon">*</span>
                  </div>
                  <input
                    type="text"
                    className="input_style"
                    name="name"
                    placeholder="Ex. John Doe"
                    onChange={nameHandleChange}
                    value={name}
                  />
                </div>
              </div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <div className="input_container">
                  <div className="input_label">
                    Email <span className="compulsory_icon">*</span>
                  </div>
                  <input
                    type="email"
                    className="input_style"
                    name="email"
                    placeholder="Ex. mail@website.com"
                    onChange={emailHandleChange}
                    value={emailValue}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="full_width" style={{ marginBottom: "5px" }}>
                <div className="input_container">
                  <div className="input_label">
                    Company Name <span className="compulsory_icon">*</span>
                  </div>
                  <input
                    type="text"
                    className="input_style"
                    name="company name"
                    placeholder="Ex. XYZ PVT LTD"
                    onChange={companyNameHandleChange}
                    value={companyName}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="full_width" style={{ marginBottom: "15px" }}>
                <div className="input_container">
                  <div className="input_label">
                    Your title <span className="compulsory_icon">*</span>
                  </div>
                  <input
                    type="text"
                    className="input_style"
                    name="designation"
                    placeholder="Ex. Operational Head"
                    onChange={designationHandleChange}
                    value={designation}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="full_width" style={{ marginBottom: "15px" }}>
                <div className="input_container">
                  <div className="input_label">
                    password<span className="compulsory_icon">*</span>
                  </div>
                  <input
                    type="password"
                    className="input_style"
                    name="password"
                    placeholder="Ex. Operational Head"
                    onChange={passwordHandleChange}
                    value={password}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="full_width" style={{ marginBottom: "15px" }}>
                <div className="input_container">
                  <div className="input_label">
                    confirm password <span className="compulsory_icon">*</span>
                  </div>
                  <input
                    type="password"
                    className="input_style"
                    name="confirmPassword"
                    placeholder="Ex. Operational Head"
                    onChange={confirmPasswordHandleChange}
                    value={confirmPassword}
                    autoComplete="off"
                  />
                </div>
              </div>
              <a 
              onClick={addUser}
              href={"anc"} className="button_container_style">
                <div>
                  <span className="text_button">Book Demo</span>
                </div>
              </a>
            </div>
          </div>
          </form>
        </div>
      </div>
      <img src={bookNowBg} className="waiting_list" alt="waiting_list" />
    </div>
  );
}

export default Page8;

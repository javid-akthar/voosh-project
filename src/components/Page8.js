import React from 'react';
import classes from './Page8.module.css'
import bookNowBg from '../images/book_now_bg.webp'

function Page8(props) {

    function func(){

    }

    return (
        <div className={classes.page8_container} id="Waitinglist">
          <div className={classes.page8_container_text}>
            <div className={classes.title}>Book A Demo Now</div>
          </div>
          <div className={classes.page8_text_container}>
            <div className={classes.card_container}>
              <div className={classes.email_container}>
                <div>
                  <div className={classes.full_width} style={{marginBottom: "5px"}}>
                    <div className={classes.input_container}>
                      <div className={classes.input_label}>
                        Name <span className={classes.compulsory_icon}>*</span>
                      </div>
                      <input
                        type="text"
                        className={classes.input_style}
                        name="name"
                        placeholder="Ex. John Doe"
                        onChange={func}
                      />
                    </div>
                  </div>
                  <div className={classes.full_width} style={{marginBottom: "5px"}}>
                    <div className={classes.input_container}>
                      <div className={classes.input_label}>
                        Email <span className={classes.compulsory_icon}>*</span>
                      </div>
                      <input
                        type="email"
                        className={classes.input_style}
                        // classname={"form-control"}
                        name="email"
                        placeholder="Ex. mail@website.com"
                        onChange={func}
                      />
                    </div>
                  </div>
                  <div className={classes.full_width} style={{marginBottom: "5px"}}>
                    <div className={classes.input_container}>
                      <div className={classes.input_label}>
                        Company Name <span className={classes.compulsory_icon}>*</span>
                      </div>
                      <input
                        type="text"
                        className={classes.input_style}
                        name="company name"
                        placeholder="Ex. XYZ PVT LTD"
                        onChange={func}
                      />
                    </div>
                  </div>
                  <div className={classes.full_width} style={{marginBottom: "15px"}}>
                    <div className={classes.input_container}>
                      <div className={classes.input_label}>
                        Your title <span className={classes.compulsory_icon}>*</span>
                      </div>
                      <input
                        type="text"
                        className={classes.input_style}
                        name="designation"
                        placeholder="Ex. Operational Head"
                        value=""
                        onChange={func}
                      />
                    </div>
                  </div>
                  <a
                    href={"anc"}
                    className={classes.button_container_style}
                    ><div><span className={classes.text_button}>Book Demo</span></div></a
                  >
                </div>
              </div>
            </div>
          </div>
          <img
            src={bookNowBg}
            className={classes.waiting_list}
            alt="waiting_list"
          />
        </div>
    );
}

export default Page8;
import React from 'react';
import useForm from "./useForm";
import Getting from "./Getting";

const Form = () => {
    const { values, handleChange, handleSubmit } = useForm(getDate);

    const today = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1)< 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '-' + ((new Date().getDate() + 0)< 10 ? ('0' + (new Date().getDate() + 0)) : (new Date().getDate() + 0))

    function getDate(today) {
      localStorage.setItem('username',values.username)
      localStorage.setItem('password',values.password)
Getting()
      // window.location.assign('?date=' + values.date)
  }

    return (
    <div style={{marginLeft: '10%'}} className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">

          <form onSubmit={handleSubmit}>
          <div className="field">
                <label className="label">Username</label>
                <div className="control">
                <input className="input" type="text" name="username" onChange={handleChange} value={values.username} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                <input className="input" type="password" name="password" onChange={handleChange} value={values.password} required />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

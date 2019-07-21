import React from 'react';
import useForm from "./useForm";

const Form = () => {
    const { values, handleChange, handleSubmit } = useForm(getDate);

    const today = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1)< 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1)) + '-' + ((new Date().getDate() + 0)< 10 ? ('0' + (new Date().getDate() + 0)) : (new Date().getDate() + 0))

    function getDate(today) {

window.location.assign('?date=' + values.date)
  }

    return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">

          <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">NASA Image Day</label>
                <div className="control">
                <input className="input" type="date" name="date" onChange={handleChange} value={values.date}  max={today} required />
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

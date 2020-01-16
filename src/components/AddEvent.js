import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import '../App.css';

//This is the general event form component.
//https://codesandbox.io/s/mZRjw05yp for reference.
const AddEvent = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <>
            <div className="App">
                <h1>Add Event</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Location Name</label>
                    <div>
                    <Field
                        name="locationName"
                        component="input"
                        type="text"
                        placeholder="Location Name"
                    />
                    </div>
                </div>
                <div>
                <div>
                    <label>Location Address</label>
                    <div>
                        <Field name="locationAddress" component="textarea" />
                    </div>
                </div>
                <label>Event Contact Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Enter Email"
                        />
                    </div>
                </div>
                <div>
                    <label>Date & Time of Event.</label>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
                    </MuiPickersUtilsProvider>
                </div>
                <div>
                    <label>Event Information</label>
                    <div>
                        <Field name="eventInformation" component="textarea" />
                    </div>
                </div>
                <div>
                    <label htmlFor="weatherChoice">Weather @ Location?</label>
                    <div>
                    <Field
                        name="weatherChoice"
                        id="weatherChoice"
                        component="input"
                        type="checkbox"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="directionsChoice">Directions to Location?</label>
                    <div>
                    <Field
                        name="directionsChoice"
                        id="directionsChoice"
                        component="input"
                        type="checkbox"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="twitterChoice">Post to Twitter?</label>
                    <div>
                    <Field
                        name="twitterChoice"
                        id="twitterChoice"
                        component="input"
                        type="checkbox"
                    />
                    </div>
                </div>
                <button type="submit" disabled={pristine || submitting}>
                Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
                </button>
        </form>
      </>
  );
};

export default reduxForm({
  form: 'addEvent', // a unique identifier for this form
})(AddEvent);

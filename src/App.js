import React, { Component } from 'react';
import './MyForm.css'; // Import your CSS file
import axios from 'axios';

class FormDataExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobentrydate: '',
            jobcreator: '',
            jobtype: '',
            jobrole: '',
            jobskillsrequired: '',
            jobapplyemail: null,
            jobcurrentstatus: '',
            jobclosedate: '',
            jobrefresult: null
        };
    }

    handlejobentrydateChange = (e) => {
        this.setState({jobentrydate: e.target.value});
    }
    ;
            handlejobcreatorChange = (e) => {
        this.setState({jobcreator: e.target.value});
    }
    ;
            handlejobtypeChange = (e) => {
        this.setState({jobtype: e.target.value});
    }
    ;
            handlejobroleChange = (e) => {
        this.setState({jobrole: e.target.value});
    }
    ;
            handlejobskillsrequiredChange = (e) => {
        this.setState({jobskillsrequired: e.target.value});
    }
    ;
            handlejobapplyemailChange = (e) => {
        this.setState({jobapplyemail: e.target.value});
    }
    ;
            handlejobcurrentstatusChange = (e) => {
        this.setState({jobcurrentstatus: e.target.value});
    }
    ;
            handlejobclosedateChange = (e) => {
        this.setState({jobclosedate: e.target.value});
    }
    ;
            handlejobrefresultChange = (e) => {
        this.setState({jobrefresult: e.target.value});
    }
    ;
            handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        
        if (this.state.jobentrydate.trim() === '') {
            this.setState({message: 'Entry Date Needed'});
            return;
        }
        formData.append('jobentrydate', this.state.jobentrydate);
        
        
        if (!this.state.jobcreator || this.state.jobcreator.trim() === '') {
            this.setState({message: 'Creator Name Needed'});
            return;
        }
        formData.append('jobcreator', this.state.jobcreator);
        
        if (!this.state.jobtype || this.state.jobtype.trim() === '') {
            this.setState({message: 'Job Type Needed'});
            return;
        }
        formData.append('jobtype', this.state.jobtype);
        
        if (this.state.jobrole.trim() === '') {
            this.setState({message: 'Role Needed'});
            return;
        }
        formData.append('jobrole', this.state.jobrole);
        
        if (!this.state.jobskillsrequired || this.state.jobskillsrequired.trim() === '') {
            this.setState({message: 'Job Skills Needed'});
            return;
        }
        formData.append('jobskillsrequired', this.state.jobskillsrequired);
        
        if (!this.state.jobapplyemail || this.state.jobapplyemail.trim() === '') {
            this.setState({message: 'Mail Address Needed'});
            return;
        }        
        formData.append('jobapplyemail', this.state.jobapplyemail);
        
        if (!this.state.jobcurrentstatus || this.state.jobcurrentstatus.trim() === '') {
            this.setState({message: 'Status Needed'});
            return;
        }        
        formData.append('jobcurrentstatus', this.state.jobcurrentstatus);
        
        formData.append('jobclosedate', this.state.jobclosedate);
        
        formData.append('jobrefresult', this.state.jobrefresult);
        
        console.log('Form Data is:', formData);
        try {
            const response = await axios.post('http://localhost:8088/api/jobsavailable', formData, {
                headers: {
                    '       Content-Type': 'application/json'
                }
            }
            );
            this.setState({jobentrydate: ''});
            this.setState({jobcreator: ''});
            this.setState({jobtype: ''});
            this.setState({jobrole: ''});
            this.setState({jobskillsrequired: ''});
            this.setState({jobapplyemail: ''});
            this.setState({jobcurrentstatus: ''});
            this.setState({jobclosedate: null});
            this.setState({jobrefresult: ''});
            this.setState({message: ''});

            this.setState({message: 'All Good!Job created!'});            
            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            this.setState({message: 'Something went wrong; Job not created!'});
        }
    }
    ;
    handleClearSubmit = (e) => {
        this.setState({jobentrydate: ''});
        this.setState({jobcreator: ''});
        this.setState({jobtype: ''});
        this.setState({jobrole: ''});
        this.setState({jobskillsrequired: ''});
        this.setState({jobapplyemail: null});
        this.setState({jobcurrentstatus: ''});
        this.setState({jobclosedate: null});
        this.setState({jobrefresult: ''});
        this.setState({message: ''});
    }
    ;
    render() {

        return (
                <div className="jobs-available">
                    <div className="transaction-form">
                        <div className="accounts-payables"><h2>JOBS AVAILABLE</h2></div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="jobentrydate"><b> Job Entry Date:</b></label>
                                <input className="form-control"
                                       type="date"
                                       id="jobentrydate"
                                       value={this.state.jobentrydate || ''}
                                       onChange={this.handlejobentrydateChange}
                                       />
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobcreator"><b>Created By:</b></label>
                                <input className="form-control"
                                       type="Text"
                                       id="jobcreator"
                                       value={this.state.jobcreator || ''}
                                       onChange={this.handlejobcreatorChange}
                                       />
                            </div>
                            <div>
                                {/* Dropdown select component */}
                                <label htmlFor="jobtype"><b> Job Type:</b></label>
                                <select value={this.state.jobtype} onChange={this.handlejobtypeChange}>
                                    <option value="">Select an option</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Non Technical">Non Technical</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobrole"><b>Job Role (PM Lead etc,.,):</b></label>
                                <input className="form-control"
                                       type="text"
                                       id="jobrole"
                                       value={this.state.jobrole}
                                       onChange={this.handlejobroleChange}
                                       />
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobskillsrequired"><b>Job Skills Required (max 750 chars - minimise special chars):</b></label>
                                <textarea className="form-control"
                                          type="Text"
                                          rows={10} // adjust the number of rows as needed
                                          cols={50} // adjust the number of columns as needed
                                          id="jobskillsrequired"
                                          value={this.state.jobskillsrequired}
                                          onChange={this.handlejobskillsrequiredChange}
                                          />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobapplyemail"><b>jobapplyemail:</b></label>
                            <input className="form-control"
                                   type="Text"
                                   id="jobapplyemail"
                                   value={this.state.jobapplyemail}
                                   ref={this.jobapplyemail}
                                   onChange={this.handlejobapplyemailChange}
                                   />
                        </div>
                        <div>
                            {/* Dropdown select component */}
                            <label htmlFor="jobcurrentstatus"><b> Job Current Status:</b></label>
                            <select value={this.state.jobcurrentstatus} onChange={this.handlejobcurrentstatusChange}>
                                <option value="">Select an option</option>
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobclosedate"><b>Job Closure Date:</b></label>
                            <input className="form-control"
                                   type="Date"
                                   id="jobclosedate"
                                   value={this.state.jobclosedate}
                                   ref={this.jobclosedate}
                                   onChange={this.handlejobclosedateChange}
                                   />
                        </div>
                        <div>
                            {/* Dropdown select component */}
                            <label htmlFor="jobrefresult"><b> Helped Someone?:</b></label>
                            <select value={this.state.jobrefresult} onChange={this.handlejobrefresultChange}>
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <label><b> Closure bupdate</b></label>
                        </div>
                        <button1 className="btn btn-sm btn-primary" onClick={this.handleSubmit}><b>Submit</b></button1>
                        <button2 className="btn btn-sm btn-primary" onClick={this.handleClearSubmit}><b>Clear</b></button2>
                        <div><h2>{this.state.message}</h2></div>
                    </form>
                </div>
                </div>
                );
    }
}

export default FormDataExample;

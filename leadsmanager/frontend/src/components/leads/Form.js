import React, {useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addLead } from '../actions/leads';

const Form = ({addLead}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const lead = {name, email, message}
        addLead(lead)
        setName("")
        setEmail("")
        setMessage("")
    }

    
    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input type="text" id="message" className="form-control" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-block btn-primary my-2">Add Lead</button>
            </form>
        </div>
    )
}

Form.prototype = {
    addLead: PropTypes.func.isRequired
}

export default connect(null, {addLead}) (Form)

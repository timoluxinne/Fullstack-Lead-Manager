import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getLeads, deleteLead } from '../actions/leads'

const mapStateToProps = (state) => ({
    leads: state.leads.leads
})

const mapDispatchToProps = {
    getLeads: () => getLeads(),
    deleteLead: id => deleteLead(id)
}


const Leads = ({leads, getLeads, deleteLead}) => {
    useEffect(() => {
        getLeads()
    }, [])
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td><button onClick={() => deleteLead(lead.id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)

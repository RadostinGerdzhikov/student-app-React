import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
//import moment from "moment";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
       // const day=moment(this.props.obj.selectedDay,'DD-MM-YYYY');
        return (
            
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.phoneNumber}</td>
                <td>{this.props.obj.showComponent ? <div>Phone</div> : <div>Email</div>}</td>
                <td>{this.props.obj.englishLevel}</td>
                <td>{this.props.obj.selectedDay}</td>
                <td>{this.props.obj.technicalSkillsCourses}</td>
                <td>{this.props.obj.personalPresentation}</td>
                <td>{this.props.obj.studyFromHome}</td>
                <td>
                <div > 
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <div class="divider">
                    <Button onClick={this.deleteStudent} size="sm" variant="danger" class="delete">Delete</Button>
                    </div>
                 </div>
                </td>
            </tr>
           
         
        );
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";


export default class EditCustomer extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullName: '',
            dob: '',
            NIC: '',
            email: '',
            contactNo: '',
            address: ''
        }
    }

    //get data by id for update forum 
    componentDidMount() {
        axios.get(`http://localhost:5000/customer/` + this.state.id)
            .then(response => {
                this.setState({
                    fullName: response.data.fullName,
                    dob: new Date(response.data.dob),
                    NIC: response.data.NIC,
                    email: response.data.email,
                    contactNo: response.data.contactNo,
                    address: response.data.address,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        });
    }

    onChangeDob(date) {
        this.setState({
            dob: date
        });
    }

    onChangeNic(e) {
        this.setState({
            NIC: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeContactNo(e) {
        this.setState({
            contactNo: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    //onsubmit method
    onSubmit(e) {
        e.preventDefault();
        const customer = {
            fullName: this.state.fullName,
            dob: this.state.dob,
            NIC: this.state.NIC,
            email: this.state.email,
            contactNo: this.state.contactNo,
            address: this.state.address
        }

        //check payload is set
        console.log(customer);

        //validations
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (this.state.fullName.length < 6) {
            this.setState({ fullNameError: "Your Name is too short." })
        } else if (this.state.dob.length < 1) {
            this.setState({ dobError: "Please Enter Date." })
        } else if (this.state.NIC.length < 10) {
            this.setState({ nicError: "Please Enter Valid ID number." })
        } else if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({ emailError: "Please Enter a valid email." })
        } else if (this.state.contactNo.length < 10) {
            this.setState({ contactNoError: "Please Enter a valid Contact Number." })
        } else if (this.state.address.length < 10) {
            this.setState({ addressError: "Your address is too short." })
        } else {
            axios.put('http://localhost:5000/customer/' + this.state.id, customer)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.props.close();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Customer has been updated!!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#60e004'
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'There was an error updating!',
                            background: '#fff',
                            confirmButtonColor: '#333533',
                            iconColor: '#e00404'
                        })
                    }
                })
        }
    }

    //render method
    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form onSubmit={this.onSubmit}>
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>
                                            Update Customer
                                        </p>
                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Full Name</label>
                                            <input type="text"
                                                required
                                                className="form-control "
                                                value={this.state.fullName}
                                                onChange={this.onChangeFullName}
                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.fullNameError}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Email</label>
                                                <input type="email"
                                                    required
                                                    className="form-control"
                                                    value={this.state.email}
                                                    onChange={this.onChangeemail}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.emailError}</p>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Contact</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.contactNo}
                                                    onChange={this.onChangecontactNo}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.contactError}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Date Of Birth</label>
                                                <DatePicker
                                                    disabled
                                                    className='m-2'
                                                    selected={this.state.dob}
                                                    onChange={this.onChangeDob}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.dobError}</p>
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>National ID Number</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.NIC}
                                                    onChange={this.onChangeNic}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.nicError}</p>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Address</label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={this.state.address}
                                                onChange={this.onChangeAddress}
                                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.addressError}</p>
                                        </div>

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Customer" />
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
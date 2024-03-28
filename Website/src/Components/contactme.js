import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailVal: '',
            fullnameVal: '',
            descVal: '',
            toastIdsuc: 'custom-id-suc',
            toastIdbad: 'custom-id-bad'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    notify_g = () => {
        toast.success('👍 Email sent!', {
            toastId: this.state.toastIdsuc, 
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    notify_b = () => {
        toast.error('👎 Please fill out all the fields!', {
            toastId: this.state.toastIdbad, 
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    notify_w = () => {
        toast.warn('👎 I may not be able to appropriatly respond without all the fields filled in.', {
            toastId: this.state.toastIdbad, 
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})  
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.state.emailVal !== ''){
            if(this.state.fullnameVal === '' || this.state.descVal === ''){
                this.notify_w()
            }

            axios({
                method: 'post',
                url: '/contactReq',
                data: {
                  valEmail: this.state.emailVal,
                  valFullName: this.state.fullnameVal,
                  valDescVal: this.state.descVal
                }
            })

            this.notify_g()
        }
        else{
            this.notify_b()
        }
    }

    componentDidMount(){
        Aos.init({duration: 1500,
                      once: false,
                      mirror: true});
    }

    render() {
        return (
            <div class="d-flex justify-content-center align-items-center w-75 h-100 mx-auto">
                <ToastContainer />
                <div class="d-flex justify-content-center align-items-center w-100 h-100 mt-5" data-aos="fade-in">
                    <div class="row vertical-center-row bg-light bg-gradient rounded border border-secondary">
                        <h1 class="display-1 d-flex justify-content-center">Contact Me</h1>
                        <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label class="fw-bold" for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="emailVal" onChange={this.handleChange}/>
                            <small id="emailHelp" class="form-text text-black">Let me know where I can contact you at again</small>
                        </div>
                        <div class="form-group">
                            <label class="fw-bold" for="exampleInputPassword1">Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full Name" name="fullnameVal" onChange={this.handleChange}/>
                            <small id="nameHelp" class="form-text text-black">What do you want me to call you?</small>
                        </div>
                        <div class="form-group">
                            <label class="fw-bold" for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Let me know whens the best time to contact you, also anything else I should be aware of." name="descVal" onChange={this.handleChange}></textarea>
                        </div>
                        <div>
                            <button type="submit" class="btn bg-dark text-white mt-1 mb-1">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export { Contact };
import React from 'react'
import axios from 'axios'
import Typist from 'react-typist';
import "../css/homepage.css"
import { useEffect } from "react";
import Aos from "aos";

export const Homepage = () => {

    const onGetResume = async e => {
        e.preventDefault();

        try {
            axios({
                method: 'get',
                url: '/getResume',
                responseType: 'blob'
            }).then(function(response) {
                let blob = new Blob([response.data], { type: "application/pdf "});
                const fileURL = URL.createObjectURL(blob);
                window.open(fileURL);
            })
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        Aos.init({duration: 1500,
                  once: false,
                  mirror: true});
    }, []);
    
    return (
        <div class="d-flex justify-content-center">
            <div data-aos="fade-up" class="homepage">
                <form onSubmit={onGetResume}>
                    <div class="typing-anim">
                        <Typist><h1>Can I help?</h1></Typist>
                    </div>
                    <ol><input class="button-get" type="submit" value="Resume"/></ol>
                </form>
            </div>
        </div>
    )
}

export default Homepage;
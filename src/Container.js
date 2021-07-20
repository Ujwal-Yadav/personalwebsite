import React from 'react';
import { Title } from './Title';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Container = () => {
    return (
        <div className="full-cont">
         <Title />
            <div className="bg-scroll">  
                <About />
                <Contact />
                <Footer />
            </div>
        </div>

    )
}

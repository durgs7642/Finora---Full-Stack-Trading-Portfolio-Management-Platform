import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

//Test Suite ----> we can give multiple test cases simultaneusly
describe("Hero Componet", ()=>{
    test('renders hero image', ()=> {
        render(<Hero />)  /// --- load UI component
        const heroImage = screen.getByAltText('Hero Image')   //  --- > selector
        expect(heroImage).toBeInTheDocument();  
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    }) //////------> we can see this on terminal --> just like a title or message

    test('renders signup button', () => {
        render(<Hero />)  /// --- load UI component
        const signupButton = screen.getByRole('button', {name: /Sign Up/i})   //  --- > selector
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass('btn-primary');
    })

})
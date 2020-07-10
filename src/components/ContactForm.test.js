import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import App from './../App'
import { act } from "react-dom/test-utils";

test('contactForm adds new contacts', async () => {
    act(() => {
        render(<ContactForm />);
    })
    

    const fNameInput = screen.getByPlaceholderText(/edd/i)
    const lNameInput = screen.getByPlaceholderText(/burke/i)
    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button')

    act(() => {
        fireEvent.change(fNameInput, { target: {value: 'abc'}})
        fireEvent.change(lNameInput, { target: {value: 'def'}})
        fireEvent.change(emailInput, { target: {value: 'abc@def.com'}})
        fireEvent.click(submitButton)
    })
    
    const worked = await screen.findByTestId(/result/i)
    console.log(worked)
    expect(worked).toBeInTheDocument();
})
import SignUp from "../components/SignUp/SignUp";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import axios from 'axios';


test('making sure sign up page loads', async () => {
    const {findByText, getByText, getByTestId}= render(<SignUp/>)
    await fireEvent.click(getByText("Sign Up"));
    expect(getByText("Password is required")).toBeInTheDocument;
})

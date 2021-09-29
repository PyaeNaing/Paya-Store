import SignUp from "../components/SignUp/SignUp";
import { render, fireEvent, cleanup,screen } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import { Container } from "@mui/material";

afterEach(cleanup);



describe("Form testing", () => {
  const {queryByRole, queryByText, getByLabelText, getByText, getAllByTestId, getByTestId} = render(
    <SignUp />
  );

  test("Submitting with empty inputs", async () => {
    await fireEvent.click(getByText("Sign Up"))
    expect(getByText("First name is required")).toBeInTheDocument();
    expect(getByText("Last name is required")).toBeInTheDocument();
    expect(getByText("Username is required")).toBeInTheDocument();
    expect(getByText("Password is required")).toBeInTheDocument();

  });
  
  test("Submitting with data", async () => {
    fireEvent.change(getByTestId("test-firstName"), {target : {value : "first name"}})
    // fireEvent.change(getByTestId("test-lastName"), {target : {value : "last name"}})
    // fireEvent.change(getByTestId("test-username"), {target : {value : "username"}})
    // fireEvent.change(getByTestId("test-password"), {target : {value : "password"}})

    await fireEvent.click(getByText("Sign Up"));
    expect(queryByText("First name is required")).not.toBeInTheDocument();
    expect(queryByText("Last name is required")).not.toBeInTheDocument();
    expect(queryByText("Username is required")).not.toBeInTheDocument();
    expect(queryByText("Password is required")).not.toBeInTheDocument();
  });

});

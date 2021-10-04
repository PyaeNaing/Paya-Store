import SignUp from "../components/SignUp/SignUp";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import { Container } from "@mui/material";
import { act } from "react-dom/test-utils";

describe("Form testing", () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    cleanup;
    mockAxios.reset();
  });

  test("Submitting with empty inputs", async () => {
    const {
      queryByRole,
      queryByText,
      getByLabelText,
      getByText,
      getAllByTestId,
      getByTestId,
    } = render(<SignUp />);

    await fireEvent.click(getByText("Sign Up"));
    expect(getByText("First name is required")).toBeInTheDocument();
    expect(getByText("Last name is required")).toBeInTheDocument();
    expect(getByText("Username is required")).toBeInTheDocument();
    expect(getByText("Password is required")).toBeInTheDocument();
  });

  act(() => {
    test("Submitting with data", async () => {
      const {
        findByText,
        queryByText,
        getByLabelText,
        getByText,
        getAllByTestId,
        getByTestId,
      } = render(<SignUp />);

      mockAxios.post.mockImplementationOnce((): any => {
        Promise.resolve({
          data: { body: "Success" },
          status: 201,
        });
      });

      fireEvent.change(getByTestId("test-firstName"), {
        target: { value: "first name" },
      });
      fireEvent.change(getByTestId("test-lastName"), {
        target: { value: "last name" },
      });
      fireEvent.change(getByTestId("test-username"), {
        target: { value: "username" },
      });
      fireEvent.change(getByTestId("test-password"), {
        target: { value: "password" },
      });

      await fireEvent.click(getByText("Sign Up"));

      // await expect(mockAxios.post).toHaveBeenCalledWith(
      //   "http://localhost:8080/auth/signUp"
      // );
      // await expect(
      //   await findByText("Account successfully created")
      // ).toBeInTheDocument();
      expect(queryByText("First name is required")).not.toBeInTheDocument();
      expect(queryByText("Last name is required")).not.toBeInTheDocument();
      expect(queryByText("Username is required")).not.toBeInTheDocument();
      expect(queryByText("Password is required")).not.toBeInTheDocument();
    });
  });
});

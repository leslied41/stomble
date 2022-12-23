import { rePhoneNumber, filterObj } from "./registerFormValidate";
export const loginFormValidate = (values) => {
  const errors = {
    phone: "",
    password: "",
  };

  //password
  if (!values.password?.length) {
    errors.password = "required";
  } else {
    errors.password = "";
  }

  //phone
  if (!values.phone?.length) {
    errors.phone = "required";
  } else if (!rePhoneNumber.test(values.phone)) {
    errors.phone = "invalid";
  } else {
    errors.phone = "";
  }

  filterObj(errors);
  return errors;
};

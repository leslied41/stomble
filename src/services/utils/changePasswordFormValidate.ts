import { specialChars, filterObj } from "./registerFormValidate";
export const changePasswordFormValidate = (values) => {
  const errors = {
    password: {
      ps_length: "bad",
      special: "bad",
    },
  };

  //password
  if (!values.password?.length) {
    errors.password.ps_length = "bad";
  } else if (values.password.length < 8) {
    errors.password.ps_length = "bad";
  } else {
    errors.password.ps_length = "";
  }
  if (!specialChars.test(values.password)) {
    errors.password.special = "bad";
  } else {
    errors.password.special = "";
  }

  filterObj(errors);
  return errors;
};

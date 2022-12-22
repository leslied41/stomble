const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const reEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

function filterObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      if (!obj[key]) delete obj[key];
    } else {
      for (let k in obj[key]) {
        if (obj[key][k]) return;
      }
      delete obj[key];
    }
  }
}

export const personalValidate = (values) => {
  const errors = {
    password: {
      ps_length: "bad",
      special: "bad",
    },
    email: "",
    phone: "",
    fullName: "",
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
  //fullname
  if (values.fullName.length == 0) {
    errors.fullName = "required";
  } else if (values.fullName.length > 50) {
    errors.fullName = "invalid";
  } else {
    errors.fullName = "";
  }
  //email
  if (values.email.length === 0) {
    errors.email = "required";
  } else if (!reEmail.test(values.email)) {
    errors.email = "invalid";
  } else {
    errors.email = "";
  }
  //phone
  if (values.phone.length === 0) {
    errors.phone = "required";
  } else if (!rePhoneNumber.test(values.phone)) {
    errors.phone = "invalid";
  } else {
    errors.phone = "";
  }
  filterObj(errors);
  return errors;
};

export const businessValidate = (values) => {
  const errors = {
    password: {
      ps_length: "bad",
      special: "bad",
    },
    email: "",
    phone: "",
    companyName: "",
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
  //companyname
  if (values.companyName.length == 0) {
    errors.companyName = "required";
  } else if (values.companyName.length > 50) {
    errors.companyName = "invalid";
  } else {
    errors.companyName = "";
  }
  //email
  if (values.email.length === 0) {
    errors.email = "required";
  } else if (!reEmail.test(values.email)) {
    errors.email = "invalid";
  } else {
    errors.email = "";
  }
  //phone
  if (values.phone.length === 0) {
    errors.phone = "required";
  } else if (!rePhoneNumber.test(values.phone)) {
    errors.phone = "invalid";
  } else {
    errors.phone = "";
  }
  filterObj(errors);
  return errors;
};

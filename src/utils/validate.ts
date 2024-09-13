const validate = (name: string, email: string, message: string) => {
  const output: {
    valid: boolean;
    messages: string[];
    invalidFields: string[];
  } = {
    valid: false,
    messages: [],
    invalidFields: [],
  };

  if (!name) {
    output.messages.push("Name is required.");
    output.invalidFields.push("name");
  }

  if (!email) {
    output.messages.push("Email is required.");
    output.invalidFields.push("email");
  }

  if (!message) {
    output.messages.push("Message is required.");
    output.invalidFields.push("message");
  }

  if (
    email &&
    !/[a-z0-9]{1,32}(\.[a-z0-9]{1,32}){0,4}@[a-z0-9]{1,32}(\.[a-z0-9]{1,32}){1,4}/g.test(
      email,
    )
  )
    output.messages.push("Invalid email format.");

  if (output.messages.length === 0) output.valid = true;

  return output;
};

export default validate;

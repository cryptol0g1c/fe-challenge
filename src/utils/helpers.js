const validateSimpleInput = (inputName, value) => {
  if (inputName === 'address') {
    return false;
  }

  return value.trim() !== '';
};

export { validateSimpleInput };

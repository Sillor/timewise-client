import FormInput from '../../components/form-components/FormInput';

export default function PasswordResetForm({inputData, setInputData}) {

  function handlePasswordOnChange(event) {
    const value = event.target.value;
    setInputData((prev) => ({
      ...prev,
      passwordValue: value,
      passwordError: event.error,
      confirmPasswordError:
        prev.confirmPasswordValue !== value ? 'Passwords Do Not Match' : '',
    }));
  }

  function handleConfirmPasswordOnChange(event) {
    const value = event.target.value;
    const passwordsMatch = inputData.passwordValue === value;
    setInputData((prev) => ({
      ...prev,
      confirmPasswordValue: value,
      confirmPasswordError: !passwordsMatch ? 'Passwords Do Not Match' : '',
    }));
  }

  return (
    <>
      <FormInput
        type="password"
        placeholder="Password"
        error={inputData.passwordError}
        onChange={handlePasswordOnChange}
      />

      <FormInput
        type="password"
        placeholder="Confirm Password"
        error={inputData.confirmPasswordError}
        onChange={handleConfirmPasswordOnChange}
      />
    </>
  );
}

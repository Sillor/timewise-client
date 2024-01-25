import FormInput from '../../components/form-components/FormInput';
import checkValidPassword from '../../utils/checkValidPassword';

export default function PasswordResetForm({inputData, setInputData}) {

  function handlePasswordOnChange(event) {
    const value = event.target.value;
    const checkedPassword = checkValidPassword(value);

    setInputData((prev) => ({
      ...prev,
      passwordValue: value,
      passwordError: checkedPassword.error ? checkedPassword.message : '',
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

import useTextField from '../../../../../components/text-field/hooks/usetTextField';
import { useContactsProvider } from '../../../providers/contact.provider';

const textValidator = (text) => text.trim() !== '';

function useContactForm() {
  const { sendMessage } = useContactsProvider();
  const { input: nameInput, validate: validateNameInput } = useTextField(
    textValidator,
    'Empty field',
  );

  const { input: emailInput, validate: validateEmailInput } = useTextField(
    textValidator,
    'Empty field',
  );
  const { input: messageInput, validate: validateMessageInput } = useTextField(
    textValidator,
    'Empty field',
  );

  function sendEmail() {
    const [isValidName, isValidEmail, isValidMessage] = [
      validateNameInput(),
      validateEmailInput(),
      validateMessageInput(),
    ];
    if (isValidName && isValidEmail && isValidMessage)
      sendMessage(nameInput, emailInput, messageInput);
  }

  return { nameInput, emailInput, messageInput, sendEmail };
}

export default useContactForm;

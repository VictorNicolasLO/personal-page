import useTextField from '../../../../../components/text-field/hooks/usetTextField';
import { useContactsProvider } from '../../../providers/contact.provider';

const textValidator = (text) => text.trim() !== '';

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
}

function useContactForm() {
  const { sendMessage } = useContactsProvider();
  const {
    input: nameInput,
    validate: validateNameInput,
    clear: clearName,
    text: nameText,
  } = useTextField(textValidator, 'Invalid field');

  const {
    input: emailInput,
    validate: validateEmailInput,
    clear: clearEmail,
    text: emailText,
  } = useTextField(ValidateEmail, 'Invalid field');
  const {
    input: messageInput,
    validate: validateMessageInput,
    clear: clearMessage,
    text: messageText,
  } = useTextField(textValidator, 'Invalid field');

  async function sendEmail() {
    const [isValidName, isValidEmail, isValidMessage] = [
      validateNameInput(),
      validateEmailInput(),
      validateMessageInput(),
    ];
    if (isValidName && isValidEmail && isValidMessage) {
      await sendMessage(nameText, emailText, messageText);
      clearName();
      clearEmail();
      clearMessage();
    }
  }

  return { nameInput, emailInput, messageInput, sendEmail };
}

export default useContactForm;

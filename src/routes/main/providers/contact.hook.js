import { useState } from 'react';
import axios from 'axios';

export function useContacts() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  async function sendMessage(contactName, contactEmail, contactMessage) {
    setLoading(true);
    console.log(contactName);
    await axios.post(
      'https://us-central1-personal-6e47f.cloudfunctions.net/sendEmail',
      {
        contact: {
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        },
      },
    );
    setLoading(false);
    setEmailSent(true);
  }

  return {
    sendMessage,
    loading,
    emailSent,
    setEmailSent,
  };
}

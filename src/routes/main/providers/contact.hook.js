import { useState } from "react";
import { useFirestore } from "../../../providers/firestore-provider";

export function useContacts() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const firestore = useFirestore();
  async function sendMessage(contactName, contactEmail, contactMessage) {
    setLoading(true);
    console.log(contactName);
    await firestore.collection("emails").add({
      name: contactName,
      email: contactEmail,
      message: contactMessage,
    });

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

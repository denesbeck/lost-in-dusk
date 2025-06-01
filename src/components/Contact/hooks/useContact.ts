import validate from "../utils/validate";
import { useRef, useState } from "react";
import { useAlert } from "@/components/AlertBox/hooks";
import axios from "axios";

const useContact = () => {
  const API_GW_ENDPOINT =
    "https://fycb5fsu8a.execute-api.eu-central-1.amazonaws.com/v1/contact";

  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { alert } = useAlert();

  const handleSubmit = async (token: string) => {
    const { valid, messages } = validate(
      nameRef.current?.value || "",
      emailRef.current?.value || "",
      messageRef.current?.value || "",
    );
    if (!valid) {
      alert({
        id: "invalid-input",
        title: "Invalid input",
        message: messages.join("\n"),
        severity: "error",
      });
      return;
    }
    setLoading(true);
    axios
      .post(`${API_GW_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        }),
      })
      .then((res) => {
        if (res.status !== 200) throw new Error("Unable to send message.");
        alert({
          id: "message-sent",
          title: "Success",
          message: "Message sent successfully.",
          severity: "success",
        });
      })
      .catch(() => {
        alert({
          id: "message-failed",
          title: "Error",
          message: "Unable to send message.",
          severity: "error",
        });
      })
      .finally(() => {
        setLoading(false);
        nameRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
      });
  };
  return { loading, nameRef, emailRef, messageRef, handleSubmit };
};

export default useContact;

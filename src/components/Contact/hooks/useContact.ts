import validate from "../utils/validate";
import { useEffect, useRef, useState } from "react";
import { useAlert } from "@/components/AlertBox/hooks";
import axios from "axios";

const useContact = () => {
  const API_GW_ENDPOINT =
    "https://ydhen0tvw5.execute-api.eu-central-1.amazonaws.com/v1/contact";
  const SITE_KEY = "6LeiTzkqAAAAADjmQFpT61B3_v2LjN6Joqs4HZOj";

  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { alert } = useAlert();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async () => {
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
    if (typeof window !== "undefined") {
      setLoading(true);
      // @ts-expect-error: grecaptcha is not defined
      window.grecaptcha.ready(function () {
        // @ts-expect-error: grecaptcha is not defined
        window.grecaptcha
          .execute(SITE_KEY, {
            action: "submit",
          })
          .then(function (token: string) {
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
                if (res.data.statusCode !== 200)
                  throw new Error("Unable to send message.");
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
                console.error("Unable to send message.");
                return;
              })
              .finally(() => {
                setLoading(false);
                nameRef.current!.value = "";
                emailRef.current!.value = "";
                messageRef.current!.value = "";
              });
          })
          .catch(() => {
            alert({
              id: "recaptcha-failed",
              title: "Error",
              message: "Unable to get reCAPTCHA token.",
              severity: "error",
            });
            console.error("Unable to get reCAPTCHA token.");
            setLoading(false);
            return;
          });
      });
    }
  };
  return { loading, nameRef, emailRef, messageRef, handleSubmit };
};

export default useContact;

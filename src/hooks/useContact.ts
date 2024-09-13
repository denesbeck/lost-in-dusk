import validate from "@/utils/validate";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const useContact = () => {
  const API_GW_ENDPOINT =
    "https://aukqoyekq4.execute-api.eu-central-1.amazonaws.com/v1/contact";
  const SITE_KEY = "6LeiTzkqAAAAADjmQFpT61B3_v2LjN6Joqs4HZOj";

  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const toast = useToast();

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
      if (!toast.isActive("invalid-input"))
        toast({
          id: "invalid-input",
          title: "Invalid input",
          description: messages.join("\n"),
          status: "error",
          duration: 5000,
          isClosable: true,
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
                toast({
                  title: "Success",
                  description: "Message sent successfully.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .catch(() => {
                toast({
                  title: "Error",
                  description: "Unable to send message.",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
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
            toast({
              title: "Error",
              description: "Unable to get reCAPTCHA token.",
              status: "error",
              duration: 5000,
              isClosable: true,
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

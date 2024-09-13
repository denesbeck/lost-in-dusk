import { Button, Heading2 } from "@/components";
import { Center, Input, Stack, Textarea } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import validate from "@/utils/validate";

const API_GW_ENDPOINT = import.meta.env.VITE_API_GW_ENDPOINT;
const SITE_KEY = import.meta.env.VITE_SITE_KEY;

const Contact = () => {
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
              .post(`${API_GW_ENDPOINT}/contactMe`, {
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

  return (
    <Center h={"100vh"}>
      <div className="relative group">
        <div className="hidden absolute -top-8 -right-8 w-12 h-12 border-t-2 border-r-2 border-teal-400 transition-all duration-200 ease-in-out lg:block group-hover:-top-6 group-hover:-right-6" />
        <div className="hidden absolute -top-8 -left-8 w-48 h-48 border-t-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out lg:block group-hover:-top-6 group-hover:-left-6" />
        <div className="hidden absolute -bottom-8 -left-8 w-12 h-12 border-b-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out lg:block group-hover:-bottom-6 group-hover:-left-6" />
        <div className="hidden absolute -right-8 -bottom-8 w-48 h-48 border-r-2 border-b-2 border-teal-400 transition-all duration-200 ease-in-out lg:block group-hover:-right-6 group-hover:-bottom-6" />
        <Stack
          spacing={"1rem"}
          className="relative max-h-[calc(100vh-180px)] max-w-[90vw] overflow-auto bg-gray-900 p-6 ring-2 ring-slate-800 ring-offset-gray-900 backdrop-blur-md transition-all duration-200 ease-in-out hover:ring-slate-500 hover:ring-offset-2"
        >
          <Heading2>Contact</Heading2>
          <Input
            w={"20rem"}
            placeholder="Name"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 max-w-[70vw]"
            ref={nameRef}
          />
          <Input
            w={"20rem"}
            placeholder="Email"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 max-w-[70vw]"
            ref={emailRef}
          />
          <Textarea
            w={"20rem"}
            placeholder="Message"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 max-w-[70vw]"
            ref={messageRef}
          />
          <Button label={"Submit"} action={handleSubmit} loading={loading} />
        </Stack>
      </div>
    </Center>
  );
};

export default Contact;

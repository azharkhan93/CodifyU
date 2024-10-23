"use client"
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CenterBox,
  Column,
  FormSearchableSelect,
  Text,
  UpdateForm,
} from "@/components";
import { Formik, Form } from "formik";
import * as Yup from "yup";


type FormValues = {
  username: string;
  email: string;
  services: string[];  
};
const FormSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const ModalContent = () => {
  const handleSubmit = async (values: FormValues, resetForm: () => void) => {
    console.log("Submitted Values:", values); 
    console.log("Selected Services:", values.services);
    try {
      
      const services = Array.isArray(values.services) ? values.services.join(", ") : values.services;

      const response = await axios.post("/api/servicesemail", {
        username: values.username,
        email: values.email,
        services: values.services.join(", ")  
      });

      if (response.data.sent) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }

      resetForm();  
    } catch (error) {
      console.error("Error sending email", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <CenterBox width={["100%", "90%"]} height={"100%"} p={"m"}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          services: [],  
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values, resetForm);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              textAlign={"start"}
            >
              <Column
                width={["98%", "100%"]}
                height={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={["xl", "xxl"]}
              >
                <Text
                  width={["100%", "450px"]}
                  textAlign={"center"}
                  variant={["subHeading", "heading"]}
                >
                  {`Let's Level Up Your Brand Together`}
                </Text>
                <Box width={["97%", "80%"]}>
                  <UpdateForm
                    name={"username"}
                    placeholder={"Enter Username"}
                    label={"Username"}
                    type="text"
                  />
                </Box>
                <Box width={["97%", "80%"]}>
                  <UpdateForm
                    name={"email"}
                    placeholder={"Enter Email"}
                    label={"Email"}
                    type="email"
                  />
                </Box>
                <Box width={["97%", "80%"]}>
                  <FormSearchableSelect
                    placeholder={"Choose Service"}
                    label={"Select Service"}
                    name={"services"}
                    
                  />
                </Box>

                <Box
                  width={["100%", "80%"]}
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                >
                  <Button
                    borderRadius={"s"}
                    px={"xxxl"}
                    py={"s"}
                    bg={"primary"}
                    variant={"primary"}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Schedule Meeting
                  </Button>
                </Box>
              </Column>
            </Box>
          </Form>
        )}
      </Formik>
    </CenterBox>
  );
};



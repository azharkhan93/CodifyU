"use client";
import { useState } from "react";
import axios from "axios";
import { Box, Button, CenterBox, Column, TextArea, UpdateForm, Text } from "@/components";
import { Formik, Form } from "formik";
import * as Yup from "yup";


type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  message?: string | number;
};



const FormSchema = Yup.object({
  username: Yup.string()
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'),], "Passwords must match")
    .required("Confirm Password is required")
});

export const ModalContent = () => {
 



  return (
    <>

        <CenterBox width={["100%", "90%"]} height={"100%"} p={"m"}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              
              message: "",
            }}
            validationSchema={FormSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // handleSubmit(values, resetForm);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                
                <Box width={"100%"} height={"100%"} alignItems={"center"} textAlign={"start"}>
                 
                  
                  <Column
                    width={"100%"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={["xl","xxl"]}
                  >
                     <Text
                  variant={["subHeading","heading"]}
                  px={["xl","header"]}
                  
                  >
                   { `Let'S Level Up Your Brand Together`}


                  </Text>
                    <Box width={["97%", "80%"]}>
                      <UpdateForm
                        name={"name"}
                        placeholder={"name"}
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
                      <TextArea
                      name={"message"}
                      placeholder={"Enter your message"} 
                      label={"Message"}
                      type="text"                      />
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
     
    </>
  );
};
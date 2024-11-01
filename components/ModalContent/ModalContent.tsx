"use client";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
    try {
      const response = await axios.post("/api/servicesemail", {
        ...values,
        services: values.services.join(", "),
      });

      if (response.data.sent) {
        resetForm();

        Swal.fire({
          icon: "success",
          title:
            "<span style='color: #fb9c42; font-family: ComfortaaRegular;'>Meeting Scheduled</span>",
          html: "<p style='color: #fb9c42; font-family: ComfortaaRegular;'>Your meeting request has been successfully sent!</p>",
          confirmButtonText:
            "<span style='color: white; font-family: ComfortaaRegular;'>OK</span>",
          customClass: {
            popup: "custom-swal-popup",
            confirmButton: "custom-swal-confirm-button",
            icon: "custom-swal-icon",
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to send the email. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending email", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while sending the email.",
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        .custom-swal-popup {
          background-color: #f0f0f5 !important;
          color: #fb9c42 !important;
        }
        .custom-swal-icon {
          background: #fb9c42 !important;
          color: #fb9c42 !important;
        }
        .custom-swal-confirm-button {
          background-color: #fb9c42 !important;
          color: black !important;
          border: none !important;
          border-radius: 4px !important;
        }
      `}</style>

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
            <Form style={{ width: "100%", height: "100%" }}>
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
    </>
  );
};

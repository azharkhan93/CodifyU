"use client";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  Text,
  TextArea,
  UpdateForm,
} from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type UpdateFormValues = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type UpdateComponentProps = {
  data?: UpdateFormValues;
  onActionComplete: () => void;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only numbers")
    .required("Phone number is Required"),
  message: Yup.string().required("Message is Required"),
});

export const Test: React.FC<UpdateComponentProps> = ({
  data,
  onActionComplete,
}) => {
  const initialValues: UpdateFormValues = {
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    message: data?.message || "",
  };

  const handleSubmit = async (
    values: UpdateFormValues,
    { setSubmitting }: FormikHelpers<UpdateFormValues>
  ) => {
    setSubmitting(false);
    onActionComplete();
  };

  return (
    <>
      <Formik<UpdateFormValues>
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <CenterBox width={"100%"} height={"100%"}>
              <Column
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                }}
                width={["100%", "90%"]}
                gap={"xl"}
                py={"l"}
                px={"xxl"}
                borderRadius={"m"}
              >
                <Box paddingY={"s"}>
                  <Text
                    variant={["subHeading", "heading"]}
                    color={"primary"}
                    textAlign={["start", "center"]}
                  >
                    Enter Your Details
                  </Text>
                </Box>
                <Row
                  flexDirection={["column", "row"]}
                  alignItems={"center"}
                  gap={"xxxl"}
                >
                  <UpdateForm
                    name={"name"}
                    placeholder={"Name"}
                    label={"Name"}
                  />
                  <UpdateForm
                    name={"name"}
                    placeholder={"LastName"}
                    label={"LastName"}
                  />
                </Row>
                <Row
                  flexDirection={["column", "row"]}
                  alignItems={"center"}
                  gap={"xxxl"}
                >
                  <UpdateForm
                    name={"email"}
                    placeholder={"Email"}
                    label={"Email"}
                  />
                  <UpdateForm
                    name={"phone"}
                    placeholder={"Phone Number"}
                    label={"Phone Number"}
                  />
                </Row>
                <UpdateForm
                  name={"name"}
                  placeholder={"Subject"}
                  label={"Subject"}
                />
                <TextArea
                  name={"message"}
                  placeholder={"Message"}
                  label={"Message"}
                />
                <CenterBox width={"100%"} paddingY={"s"}>
                  <Button
                    borderRadius={"s"}
                    py={"m"}
                    width={"70%"}
                    variant={isSubmitting ? `disabled` : "primary"}
                    type="submit"
                    disabled={isSubmitting}
                    bg={"primary"}
                  >
                    {isSubmitting ? (
                      <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                    ) : null}
                    Submit
                  </Button>
                </CenterBox>
              </Column>
            </CenterBox>
          </Form>
        )}
      </Formik>
    </>
  );
};

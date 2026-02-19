import * as Yup from "yup";

export const validationMap = {
    properties: Yup.object({
        firstName: Yup.string()
            .required("First Name is required")
            .min(2, "First Name must be at least 2 characters")
            .max(50, "First Name must be at most 50 characters")
            .trim(),
        lastName: Yup.string()
            .required("Last Name is required")
            .min(2, "Last Name must be at least 2 characters")
            .max(50, "Last Name must be at most 50 characters")
            .trim(),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
        phone: Yup.string()
            .required("Phone is required")
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
        preferredLocation: Yup.string()
            .required("Preferred Location is required"),
        propertyType: Yup.string()
            .required("Property Type is required"),
        numberOfBathrooms: Yup.string()
            .required("Number of Bathrooms is required")
            .min(1, "Number of Bathrooms must be at least 1")
            .max(10, "Number of Bathrooms must be at most 10"),
        numberOfBedrooms: Yup.string()
            .required("Number of Bedrooms is required")
            .min(1, "Number of Bedrooms must be at least 1")
            .max(10, "Number of Bedrooms must be at most 10"),
        budget: Yup.string()
            .required("Budget is required"),
        preferredContactMethod: Yup.string()
            .required("Preferred Contact Method is required"),
        message: Yup.string()
            .required("Message is required")
            .min(10, "Message must be at least 10 characters")
            .max(500, "Message must be at most 500 characters"),
        conditions: Yup.bool()
            .required("You must accept the terms and conditions")
            .oneOf([true], "You must accept the terms and conditions")
    }),
    property: Yup.object({
        firstName: Yup.string()
            .required("First Name is required")
            .min(2, "First Name must be at least 2 characters")
            .max(50, "First Name must be at most 50 characters")
            .trim(),
        lastName: Yup.string()
            .required("Last Name is required")
            .min(2, "Last Name must be at least 2 characters")
            .max(50, "Last Name must be at most 50 characters")
            .trim(),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
        phone: Yup.string()
            .required("Phone is required")
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
        selectedProperty: Yup.string()
            .required("Property is required"),
        message: Yup.string()
            .required("Message is required")
            .min(10, "Message must be at least 10 characters")
            .max(500, "Message must be at most 500 characters"),
        conditions: Yup.bool()
            .required("You must accept the terms and conditions")
            .oneOf([true], "You must accept the terms and conditions")
    }),
    contact: Yup.object({
        firstName: Yup.string()
            .required("First Name is required")
            .min(2, "First Name must be at least 2 characters")
            .max(50, "First Name must be at most 50 characters")
            .trim(),
        lastName: Yup.string()
            .required("Last Name is required")
            .min(2, "Last Name must be at least 2 characters")
            .max(50, "Last Name must be at most 50 characters")
            .trim(),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
        phone: Yup.string()
            .required("Phone is required")
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
        inquiryType: Yup.string()
            .required("Inquiry Type is required"),
        howDidYouHearAboutUs: Yup.string()
            .required("How did you hear about us is required"),
        message: Yup.string()
            .required("Message is required")
            .min(10, "Message must be at least 10 characters")
            .max(500, "Message must be at most 500 characters"),
        conditions: Yup.bool()
            .required("You must accept the terms and conditions")
            .oneOf([true], "You must accept the terms and conditions")
    })
}
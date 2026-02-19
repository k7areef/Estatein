import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/contactForms.json";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import FormikField from "@components/UI/FormikField";
import { validationMap } from "@utils/formSchemas";
import { Link } from "react-router-dom";

/**
 * @typedef {Object} PropertiesProps
 * @prop {'properties' | 'prop' | 'contact'} [page]
 * @property {string} [initialPropertyName]
*/
/**
 * @param {PropertiesProps>} props
 */

function ContactForm({ page = "properties", initialPropertyName }) {

    const { title, description, fields, initialValues, submitBtnText, fieldsGridClassName } = data[page];
    const updatedInitialValues = { // Update the initialValues based on the initialPropertyName
        ...initialValues,
        selectedProperty: initialPropertyName || initialValues.selectedProperty || ""
    };
    const validationSchema = validationMap[page] || Yup.object({});

    return (
        <section className="contact-form py-5 md:py-10">
            <div className={`container${page === "property" ? " grid grid-cols-1 lg:grid-cols-3 gap-5 items-start" : ""}`}>
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className={`form-wrapper p-5 md:p-5 lg:p-10 rounded-lg bg-grey-08 border border-grey-15${page === "property" ? " md:col-span-2" : ""}`}>
                    <Formik
                        initialValues={updatedInitialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            setFieldTouched,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={`fields-wrapper mb-5 md:mb-10 ${fieldsGridClassName}`}>
                                    {
                                        fields.map((field, index) => (<FormikField
                                            key={field.id || index}
                                            {...field}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            setFieldValue={setFieldValue}
                                        />))
                                    }
                                </div>
                                {/* Submittion */}
                                <div className="submittion flex sm:items-center justify-between flex-wrap max-sm:flex-col gap-3">
                                    <div className="confitions flex items-center gap-3">
                                        <label className="checkbox-container">
                                            <input id="conditions" name="conditions" type="checkbox" className="peer hidden" onChange={e => {
                                                setFieldValue("conditions", e.target.checked)
                                                setFieldTouched("conditions", true, false)
                                            }} />
                                            <div
                                                title={errors["conditions"] && touched["conditions"] ? errors["conditions"] : "I agree with Terms of Use and Privacy Policy"}
                                                className={`checkbox w-6 h-6 rounded-sm flex items-center justify-center cursor-pointer transition duration-300 ease-in-out bg-grey-10 border ${errors["conditions"] && touched["conditions"] ? "border-red-500" : "border-grey-15"} peer-checked:bg-grey-15 peer-checked:border-white/50 peer-checked:*:scale-100 text-sm`}
                                            >
                                                <FontAwesomeIcon icon={faCheck} className="transition scale-0" />
                                            </div>
                                        </label>
                                        <p>I agree with <Link to={'/properties'} className="underline transitoin duration-300 ease-in-out sm:hover:text-white">Terms of Use</Link> and <Link to={'/properties'} className="underline transitoin duration-300 ease-in-out sm:hover:text-white">Privacy Policy</Link></p>
                                    </div>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        disabled={isSubmitting}
                                        className="py-4! px-8! flex items-center justify-center"
                                    >
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isSubmitting
                                                ? "grid-cols-[1fr] opacity-100 mr-2"
                                                : "grid-cols-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                            </div>
                                        </div>
                                        <span>{submitBtnText}</span>
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;
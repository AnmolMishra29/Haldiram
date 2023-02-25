import { Stack, TextField, Box, Divider, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
//import RemoveIcon from "@mui/icons-material/Remove";
//import AddIcon from "@mui/icons-material/Add";

import { Formik } from "formik";
import * as yup from "yup";

const AddField = ({
  index,
  item,
  handleChange,
  handleRemove,
  handleAdd,
  values,
  inputFields,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const initialValues = {
    goodHigh: "",
    goodLow: "",
    bestHigh: "",
    bestLow: "",
  };

  const pointRegExp = /^[0-9]*$/;

  const userSchema = yup.object().shape({
    goodHigh: yup
      .string()
      .matches(pointRegExp, "Only Numbers")
      .required("required"),
    goodLow: yup
      .string()
      .matches(pointRegExp, "Only Numbers")
      .required("required"),
    bestHigh: yup
      .string()
      .matches(pointRegExp, "Only Numbers")
      .required("required"),
    bestLow: yup
      .string()
      .matches(pointRegExp, "Only Numbers")
      .required("required"),
  });

  return (
    <Container maxWidth="md">
      {/* <Stack spacing={1} alignItems="center" justifyContent="center" direction="coloum"> */}
        <Stack spacing={8} 
        //style={{ alignItems: "center" }} 
        direction="row">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Good Point High"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.goodHigh}
                  name="goodHigh"
                  error={!!touched.goodHigh && !!errors.goodHigh}
                  helperText={touched.goodHigh && errors.goodHigh}
                  sx={{ gridColumn:"span 4" }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Good Point Low"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.goodLow}
                  name="goodLow"
                  error={!!touched.goodLow && !!errors.goodLow}
                  helperText={touched.goodLow && errors.goodLow}
                  sx={{ gridColumn:"span 4" }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Best High"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bestHigh}
                  name="bestHigh"
                  error={!!touched.bestHigh && !!errors.bestHigh}
                  helperText={touched.bestHigh && errors.bestHigh}
                  sx={{ gridColumn:"span 4" }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Best Low"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.bestLow}
                  name="bestLow"
                  error={!!touched.bestLow && !!errors.bestLow}
                  helperText={touched.bestLow && errors.bestLow}
                  sx={{ gridColumn: "span 4" }}
                />
                <Divider />
              </Box>
            </form>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};

export default AddField;

import { Stack, TextField, Box, Divider, Container, Grid } from "@mui/material";
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
    <Box m="20px">
      <Stack spacing={8} style={{ alignItems: "center" }} direction="row">
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
              <Box style={{ margin: "55px 20px 20px 20px" }}>
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ margin: "20px, 5px" }}
                >
                  <Grid item md={3} sm={6} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={3} sm={6} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={3} sm={6} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={3} sm={6} xs={12}>
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
                    />
                    <Divider />
                  </Grid>
                </Grid>
              </Box>
            </form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
};

export default AddField;

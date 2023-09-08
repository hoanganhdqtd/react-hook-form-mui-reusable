// create reusable components MUI form (TextField) and
// logic with React Hook Form

// https://react-hook-form.com/get-started/#IntegratingwithUIlibraries

import "./App.css";
import { useState } from "react";
// import Typography from "@mui/material/Typography";
import {
  Typography,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import {
  FormProvider,
  FCheckbox,
  FTextField,
  FMultiCheckbox,
  FRadioGroup,
  FSelect,
  FSwitch,
} from "./components/form";

// add username property with reusable component
// has to set prop's default values to add
function App() {
  const defaultValues = {
    username: "anh",
    email: "anh@gmail.com",
    password: "123",
    remember: true,
    gender: [],
  };

  const methods = useForm({ defaultValues });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Server Response Error" });
  };

  return (
    <div>
      <Typography variant="h3" textAlign="center" mb={3}>
        React Hook Form
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField name="username" label="Username" />
          <FTextField name="email" label="Email address" />
          {/* <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Email address"
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          /> */}
          {/* <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Password"
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          /> */}
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FMultiCheckbox name="gender" options={["Male", "Female"]} />

          <FRadioGroup name="gender" options={["Male", "Female"]} />

          <FSelect name="country" label="Country">
            {[
              { code: "VNM", label: "Vietnam" },
              { code: "CAM", label: "Cambodia" },
            ].map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </FSelect>

          <FSwitch name="isGoing" label="Is going?" />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          {/* <FormControlLabel
            label="Remember me"
            control={
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value} />
                )}
              />
            }
          ></FormControlLabel> */}
          <FCheckbox name="remember" label="Remember me" />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Email Address"
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Password"
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            label="Remember me"
            control={
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value} />
                )}
              />
            }
          ></FormControlLabel>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </form> */}
    </div>
  );
}

export default App;

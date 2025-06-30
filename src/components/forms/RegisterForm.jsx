import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconLock,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import BranchSelector from "./BranchSelector";
import RoleSelector from "./RoleSelector";
import PasswordStrength from "./PasswordStrength";
import SlideIn from "../animations/SlideIn";

const RegisterForm = ({ onSubmit, isLoading = false }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "El nombre completo es requerido";
      }
      if (!formData.email) {
        newErrors.email = "El email es requerido";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "El email no es válido";
      }
      if (!formData.phone) {
        newErrors.phone = "El teléfono es requerido";
      }
    }

    if (step === 2) {
      if (!formData.branch) {
        newErrors.branch = "Debes seleccionar una sucursal";
      }
      if (!formData.role) {
        newErrors.role = "Debes seleccionar un cargo";
      }
    }

    if (step === 3) {
      if (!formData.password) {
        newErrors.password = "La contraseña es requerida";
      } else if (formData.password.length < 8) {
        newErrors.password = "La contraseña debe tener al menos 8 caracteres";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Debes confirmar la contraseña";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Las contraseñas no coinciden";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      onSubmit?.(formData);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Información Personal";
      case 2:
        return "Información Laboral";
      case 3:
        return "Configurar Contraseña";
      default:
        return "";
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-heading text-primary-800">
          Crear Cuenta
        </CardTitle>
        <p className="text-muted-foreground mt-2">{getStepTitle()}</p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <motion.div
            className="bg-primary-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Paso {currentStep}</span>
          <span>de {totalSteps}</span>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <SlideIn direction="right" className="space-y-4">
              <Input
                name="fullName"
                type="text"

                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                icon={IconUser}
                placeholder="Nombre Completo"
                autoComplete="name"
              />

              <Input
                name="email"
                type="email"
                
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={IconMail}
                placeholder="Tu@email.com"
                autoComplete="email"
              />

              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                icon={IconPhone}
                placeholder="+58 412 123 4567"
                autoComplete="tel"
              />
            </SlideIn>
          )}

          {/* Step 2: Work Information */}
          {currentStep === 2 && (
            <SlideIn direction="right" className="space-y-4">
              <BranchSelector
                value={formData.branch}
                onChange={(value) => handleSelectChange("branch", value)}
                error={errors.branch}
              />

              <RoleSelector
                value={formData.role}
                onChange={(value) => handleSelectChange("role", value)}
                error={errors.role}
              />
            </SlideIn>
          )}

          {/* Step 3: Password Setup */}
          {currentStep === 3 && (
            <SlideIn direction="right" className="space-y-4">
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  icon={IconLock}
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <IconEyeOff className="h-5 w-5" />
                  ) : (
                    <IconEye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <PasswordStrength password={formData.password} />

              <div className="relative">
                <Input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirmar Contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  icon={IconLock}
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <IconEyeOff className="h-5 w-5" />
                  ) : (
                    <IconEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </SlideIn>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between space-x-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="flex-1"
              >
                Anterior
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                className={currentStep === 1 ? "w-full" : "flex-1"}
              >
                Siguiente
              </Button>
            ) : (
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? (
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span>Creando cuenta...</span>
                  </motion.div>
                ) : (
                  "Crear Cuenta"
                )}
              </Button>
            )}
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <motion.button
                type="button"
                onClick={() => navigate("/login")}
                className="text-primary hover:text-primary-700 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inicia sesión aquí
              </motion.button>
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;

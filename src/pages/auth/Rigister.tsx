import { Link } from "react-router-dom"
import Custom_Input from "../../components/commen/ui/Custem_Input"
import Custom_button from "../../components/commen/ui/Custom_button"
import { useForm } from "react-hook-form";
import { MdArrowBack } from "react-icons/md";

const Rigister = () => {
  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
   } = useForm();

   const formSubmit = (data:{}) => {
    console.log("Form Submitted: ", data);
  };


  return (
    <form className="flex flex-col gap-4 w-full px-28" onSubmit={handleSubmit(formSubmit)} >
    <h1 className="font-extrabold text-4xl">Register</h1>
    <div className="fixed top-4 left-4">
    <Custom_button type={"submit"} beforeicon={<MdArrowBack color={'text-black'} />} isLoading={false}>
      Retour
    </Custom_button>
    </div>
            <Custom_Input  {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}  name={"email"} type={"text"} error={errors.password && errors.email?.message} label="Email" />
            <Custom_Input {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}  name={"password"} type={"password"}  error={errors.password && errors.password.message} label="Password" />
            <Custom_Input {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match"
          })} name={"re-password"} type={"password"} error={errors.password && errors.confirmPassword?.message} label="Confirm Password" />
            <div className="grid grid-cols-1 gap-4 items-center mt-2">
                <Custom_button  type={"submit"} isLoading={false}>
                Register
                </Custom_button>
                <footer className="mt-2">
        <Link to={''} className="text-indigo-700 hover:text-pink-700 text-sm float-left">Forgot Password?</Link>
        <Link to={'/connexion'} className="text-indigo-700 hover:text-pink-700 text-sm float-right">Login</Link>
      </footer> 
            </div>
        </form>

  )
}

export default Rigister


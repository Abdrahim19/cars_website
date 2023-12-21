import { Link } from "react-router-dom"
import Custom_Input from "../../components/commen/ui/Custem_Input"
import Custom_button from "../../components/commen/ui/Custom_button"
import styles from "../../styles/styles"
import { MdArrowBack } from "react-icons/md"

const Login = () => {
  return (

        <form className="flex flex-col gap-4 w-full px-28">
    <h1 className="font-extrabold text-4xl">Connexion</h1>
    <div className="fixed top-4 left-4">
    <Custom_button to="/"  type={"submit"} beforeicon={<MdArrowBack color={'text-black'} />} isLoading={false}>
      Retour
    </Custom_button>
    </div>
            <Custom_Input name={"email"} type={"text"} error={""} label="Email" />
            <Custom_Input name={"password"} type={"password"}  error={""} label="Password" />
            <div className="grid grid-cols-1 mt-2">
                <Custom_button type={"submit"} isLoading={false}>
                Register 
                </Custom_button>
                <footer className={`mt-2 ${styles.flexBetween}`}>
        <Link to={''} className="text-indigo-700 hover:text-pink-700 text-sm float-left" >Forgot Password?</Link>
        <Link to={'rigster'} className="text-indigo-700 hover:text-pink-700 text-sm float-right" >Create Account</Link>
      </footer> 
            </div>
        </form>
  )
}

export default Login
import RegisterForm from "@/components/login-register/RegisterForm";

const page = () => {
  return (
    <div className="mx-4 md:mx-20 gap-4 min-h-screen flex justify-center items-center flex-col md:flex-row">
      <div className="bg-white/10 my-20 h-full w-[300px] sm:w-[700px] rounded">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
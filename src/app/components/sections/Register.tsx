import TypingAnimation from "@/components/TextAnimation/TextType";
import Link from "next/link";

const Register = () => {
  const items = [
    {
      title: "Visit Coders Nexus",
      downloadLink: "#",
    },
    {
      title: "Register",
      description:
        "Register yourself and your team members individually. If already registered, go to next step.",
    },
    {
      title: "Login",
      description:
        "Upon registration, a unique ID will be sent to you via the email address you provided during registration. Use this ID along with your credentials to login.",
    },
    {
      title: "Register for Events",
      description:
        "Once logged in, you'll be redirected to the dashboard. From there, proceed to register for all the Exciting Events!",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0f] overflow-hidden">
      {/* Background Gradient (same as About section) */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0f1a2d] pointer-events-none" />

      <div className="relative z-10 py-20 md:mb-10 xl:mx-40 md:mx-20 mx-6 my-12 mb-10">
        {/* Updated heading with custom styling */}
        <div className="pb-10 flex items-center gap-4">
          <h1 className="text-5xl font-bold text-white">
            <TypingAnimation message="Registration" />
          </h1>
          {/* Larger blinking red dot with custom animation */}
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>

        <div className="mx-5 gap-10">
          <ol className="relative border-s border-gray-700">
            {items.map((item, index) => (
              <li key={index} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-[#0a0a0f] bg-blue-900">
                  {index + 1}
                </span>
                <h3 className="flex ml-2 font-poppinsSB tracking-wide items-center mb-1 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-4 ml-2 font-poppinsR text-base font-normal text-gray-400">
                  {item.description}
                </p>
                {item.downloadLink && (
                  <div className="ml-2 w-full flex">
                    <Link href={item.downloadLink} target="_blank">
                      <div className="group flex w-fit rounded-full border tracking-wide px-5 py-2 transition-colors sm:bg-transparent bg-neutral-800/30 sm:hover:border-neutral-700 border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="sm:text-lg flex space-x-2 tracking-wide font-poppinsSB">
                          <div>Coders Nexus</div>
                          <span className="inline-block text-pink-400 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </h2>
                      </div>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Register;
import Link from "next/link";
const githubLink = "https://github.com/so-sc";
const linkedinLink = "https://linkedin.com/company/sosc-sahyadri";
const instagramLink = "https://instagram.com/sosc.sahyadri";
const facebookLink = "https://m.facebook.com/profile.php?id=100073345130252";
const twitterLink = "https://twitter.com/sahyadri_osc";
const youtubeLink = "https://www.youtube.com/channel/UCk8nlSMwUT-jhEtamMF-V-w";
const discordLink = "https://discord.gg/hHYfMRydAK";

const communityGuidelines = "https://github.com/so-sc/code-of-conduct";

const Footer = () => {
  return (
    <div className="md:mt-40">
      {/* 🔥 Custom background color applied here */}
      <footer className="bg-[#16181E] body-font font-poppinsR tracking-wider">
        <div className="flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex flex-grow md:pl-20 mb-10 mx-6 md:mt-0 mt-10 ">
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <div className="flex text-white flex-col">
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={githubLink}
                  target="_blank"
                >
                  GitHub
                </Link>
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={linkedinLink}
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={instagramLink}
                  target="_blank"
                >
                  Instagram
                </Link>
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={facebookLink}
                  target="_blank"
                >
                  Facebook
                </Link>
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={twitterLink}
                  target="_blank"
                >
                  Twitter
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <div className="flex text-white flex-col">
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={youtubeLink}
                  target="_blank"
                >
                  Youtube
                </Link>
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={discordLink}
                  target="_blank"
                >
                  Discord
                </Link>
                <Link
                  className="pt-3 hover:underline w-fit hover:underline-offset-4"
                  href={communityGuidelines}
                  target="_blank"
                >
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 text-white flex-shrink-0 mx-10">
            {/* Your SVG logo */}
            <svg
              width="67.248604"
              height="18.71397"
              viewBox="0 0 67.248604 18.71397"
              fill="none"
              version="1.1"
              id="svg17"
            >
              {/* paths */}
            </svg>
            <p className="font-poppinsSB pt-8">
              Coders Nexus
            </p>
            <p className="py-2">
              Shree Devi Institute of Technology, Mangalore 
            </p>
            <div className="flex lg:flex-row flex-col w-full">
              <Link
                className="pt-3 mr-5 text-pink-400 hover:underline w-fit hover:underline-offset-4"
                href="mailto:sosc@sahyadri.edu.in"
                target="_blank"
              >
                codernexus.edu.in
              </Link>
              <Link
                className="lg:pt-3 pt-2 text-violet-400 hover:underline w-fit hover:underline-offset-4"
                href="tel:+918762458575"
                target="_blank"
              >
                +91 XXXXX XXXXX
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="md:py-5 py-10 px-5 text-center">
            SOSC © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

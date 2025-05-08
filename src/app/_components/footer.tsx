import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.0rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Aternas - Professional Service Provider <br />
            <span className="text-xl font-bold">@ All Rights Reserved.</span>
          </h3> 
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto: ray.liu@aternastech.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact Us
            </a>
            <a
              href={``}
              className="mx-3 font-bold hover:nounderline"
            >
              Nymphenburger Strasse 12 <br />
              80335 München, Germany 
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

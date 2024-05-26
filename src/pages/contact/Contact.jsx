import Map from "../../components/map/Map";

const Contact = () => {
  return (
    <div className="xl:w-[1024px] lg:w-[1024px] mx-auto overflow-x-hidden gap-4 flex xl:flex-row lg:flex-row flex-col justify-between items-center">
      <div className="flex flex-col items-center justify-center xl:flex-col lg:flex-col gap-4">
        <Map />
        <div className="flex flex-col">
          <p className="text-xl font-bold">Kala Towels,</p>
          <p className="text-sm font-thin">158, Nilam Nagar,</p>
          <p className="text-sm font-extralight">Part-2, M.I.D.C.,</p>
          <p className="text-sm font-extralight">Solapur.</p>
          <a className="text-sm font-medium" href="tel:+919130656629">
            Ph.No.: 9130656629
          </a>
          <a
            className="text-sm font-medium"
            href="emailto:aadityajujagar@gmail.com"
          >
            Email: aadityajujagar@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center xl:flex-col lg:flex-col gap-4">
        <Map />
        <div className="flex flex-col">
          <p className="text-xl font-bold">Kala Towels,</p>
          <p className="text-sm font-thin">158, Nilam Nagar,</p>
          <p className="text-sm font-extralight">Part-2, M.I.D.C.,</p>
          <p className="text-sm font-extralight">Solapur.</p>
          <a className="text-sm font-medium" href="tel:+919130656629">
            Ph.No.: 9130656629
          </a>
          <a
            className="text-sm font-medium"
            href="emailto:aadityajujagar@gmail.com"
          >
            Email: aadityajujagar@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

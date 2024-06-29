import Image from "next/image";

interface CampProps {
  backgroundImage: string;
}

const CampSite = ({ backgroundImage }: CampProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite backgroundImage="https://www.sproutsai.com/static/media/HomepageLogo.f3f5954fffa7c2735ea1.png" />
        <CampSite backgroundImage="https://www.sproutsai.com/images/wearedifferent2.png" />
      </div>

      <div className="flex justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-2 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-4 xl:py-5 relative w-full overflow-hidden rounded-3xl">
          <iframe
            className="w-full h-64 lg:h-96 xl:h-[250px] rounded-3xl xl:rounded-5xl"
            src="https://www.youtube.com/embed/cMURo3lCVh4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Camp;

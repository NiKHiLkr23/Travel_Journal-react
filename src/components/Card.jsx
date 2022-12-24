import location from "/images/location.svg";

export default function Card(props) {
  return (
    <div className=" p-6 sm:flex sm:space-x-6 max-w-5xl">
      <div className="flex-shrink-0 w-full mb-2 lg:max-w-xs md:max-w-xs sm:max-w-xs sm:mb-0">
        <img
          src={props.imageUrl}
          alt=""
          className="object-cover object-center w-full h-full rounded"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-start">
          <img src={location} className="h-6 pt-1"></img>
          <p className="text-lg font-semibold tracking-widest">
            {props.location}
          </p>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            className="pl-3 underline decoration-1 text-md pt-0.5 text-gray-600 opacity-50"
          >
            view on google maps
          </a>
        </div>
        <h2 className="text-2xl font-semibold">{props.title}</h2>
        <div className="space-y-1 felx flex-col justify-center">
          <p className="font-semibold">
            {props.startDate} - {props.endDate}
          </p>
          <p className="text-justify">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

import ConferenceCard from "@/components/conference-card";

export default async function PressConferences() {
  const data = await fetch("http://localhost:3000/api/press-conferences");
  const PressConferences = await data.json();

  return (
    <div className="p-4 h-full">
      <h1 className="text-2xl font-bold">Press Conferences</h1>
      {/* display the press conferences, each one of them in a card with properties of title, date, time, location, transcription */}
      <div className="grid grid-cols-2 gap-4">
        {PressConferences.map((conference: any) => (
          <ConferenceCard
            key={conference.id}
            title={conference.title}
            date={conference.date}
            time={conference.time}
            location={conference.location}
            transcription={conference.transcription}
          />
        ))}
      </div>
    </div>
  );
}

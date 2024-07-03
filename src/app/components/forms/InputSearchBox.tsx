"use client";
import { forwardRef, useMemo, useState } from "react";
import FormCircularIndex from "./FormCircularIndex";
import debounce from "lodash/debounce";
import { Location } from "../../../../d";

interface InputSearchBoxProps {
  index: number;
  valid?: boolean;
  onItemClick: [
    setCoords: (lat: number, lng: number) => void,
    setValue: (value: string) => void
  ];
}

function InputSearchBox(
  { index, valid, onItemClick }: InputSearchBoxProps,
  ref: React.Ref<HTMLInputElement>
) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [fieldVal, setFieldVal] = useState<string | undefined>();
  const [setCoords, setValue] = onItemClick;

  const fetchLocations = useMemo(
    () =>
      debounce(
        async (query: string) => {
          const encodedQuery: string = encodeURIComponent(query);
          let locations: Location[] = [];

          if (query !== "") {
            try {
              const res = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodedQuery}&format=jsonv2&accept-language=en`
              );

              if (!res.ok) {
                throw new Error("There was an error fetching the data.");
              }

              const data = await res.json();

              if (Array.isArray(data)) {
                locations = data.map(
                  (location) =>
                    ({
                      id: location.place_id,
                      name: location.name,
                      displayName: location.display_name,
                      lat: Number(location.lat),
                      lon: Number(location.lon),
                    } as Location)
                );
              }
            } catch (error) {
              console.error(error);
            }
            setLocations(locations);
            setOpen(true);
          }
        },
        400,
        { trailing: true }
      ),
    []
  );

  return (
    <div className="w-full flex flex-col p-4">
      <div className="flex items-center gap-1">
        {index && <FormCircularIndex value={index} valid={valid} />}
        <div className="w-full flex flex-col items-start justify-start border rounded-md relative">
          <input
            className="p-2 border rounded-md focus:outline-blue-400 dark:focus:outline-cyan-200 bg-slate-50/70 w-full"
            placeholder="Address"
            type="text"
            value={fieldVal || ""}
            ref={ref}
            onChange={(e) => {
              fetchLocations(e.target.value);
              setFieldVal(e.target.value);
              setValue(e.target.value);
            }}
            onFocus={() => {
              setOpen(true);
            }}
          />
          {open && locations.length > 0 && (
            <ul className="absolute top-full mt-2 w-full list-none p-2 max-h-52 border rounded-md bg-white z-[9999] shadow-md overflow-auto">
              {locations.map((location) => (
                <>
                  <li
                    key={location.id}
                    className="p-3 mt-1 hover:border-slate-200 rounded hover:bg-slate-300"
                    role="button"
                    onClick={() => {
                      setOpen(false);
                      setCoords(location.lat, location.lon);
                      setValue(location.displayName);
                      setFieldVal(location.displayName);
                    }}
                  >
                    {location.displayName}
                  </li>
                  <hr className="my-2 border-slate-300" />
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(InputSearchBox);

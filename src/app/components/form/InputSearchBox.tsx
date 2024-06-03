// import { forwardRef, useCallback, useState } from "react";
// import FormCircularIndex from "./FormCircularIndex";
// import debounce from "lodash/debounce";
// import { Location } from "../../../../d";

// async function fetchLocations(query: string): Location[] {
//     const result: Location[] = [];
//   try {
//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/search?q=${query}&format=jsonv2&accept-language=en`
//     );

//     const data = await res.json();

//     data.forEach(location => {
//         const loc: Location = {
//             id: location.
//         }
//     })

//   } catch (error) {
//     console.error("There has been a problem with your fetch operation:", error);
//   }
// }

// function InputSearchBox({ index, valid }: { index: number; valid: boolean }) {
//   const [locations, setLocations] = useState<Location[]>();

// //   const search = useCallback(debounce());

//   async function handleSearch(params: string) {
//   }

//   return (
//     <div className="w-full flex flex-col p-4 pb-2">
//       <div className="flex items-center gap-1">
//         {index && <FormCircularIndex value={index} valid={valid} />}
//         <div className="w-full flex flex-col items-start justify-start border rounded-md relative">
//           <input
//             className="p-2 border rounded-md focus:outline-blue-400 dark:focus:outline-cyan-200 bg-slate-50/70 w-full"
//             placeholder="Address"
//             type="text"
//             onChange={(e) => {
//               loadsh;
//             }}
//           />
//           <ul className="absolute top-full mt-2 w-full list-none p-4 border rounded-md bg-white z-[9999] shadow-md overflow-auto">
//             <li>tesasdasdasts</li>
//             <li>tasdasdsaests</li>
//             <li>tessadasdsadts</li>
//             <li>tesasdasdasdts</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default forwardRef(InputSearchBox);

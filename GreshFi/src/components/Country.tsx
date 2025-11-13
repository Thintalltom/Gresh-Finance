import { useRef } from "react";
import GetStartedWrapper from "./GetStartedWrapper"
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useDispatch } from "react-redux";
import {setSelectedCountry} from "../redux/slice/CountrySlice"

interface Country {
  id: number;
  name: string;
  native: string;
  iso2: string;
  iso3: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  region: string;
  subregion: string;
  latitude: string;
  longitude: string;
  emoji: string;
  hasStates: boolean;
}
const Country = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  return (
    <GetStartedWrapper>
      <div>
        <h5 className="font-bold text-[#000000] text-[24px]">Country of Residence</h5>
        <div className="flex flex-col mt-[20px] gap-[8px]">
          <p className="text-gray-700">Country</p>
          <div ref={containerRef} key="country-select-container">
            <CountrySelect
              key="country-select"
              containerClassName="w-full"
              inputClassName="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(country: any) => {
                if (country && country.name) {
                  dispatch(setSelectedCountry(country.name));
                }
              }}
              placeHolder="Select Country"
            />
          </div>
        </div>
      </div>
    </GetStartedWrapper>
  )
}

export default Country
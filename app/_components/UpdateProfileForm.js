"use client";
import SelectCountry from "@/app/_components/SelectCountry";
import { useState } from "react";
import { updateProfile } from "./actions";
import { useReservationContext } from "./ReservationContext";
import { useFormStatus } from "react-dom";

export default function UpdateProfileForm({
  defaultCountry,
  countries,
  guest,
}) {
  const { fullName, email, nationalID } = guest;
  const initialFlag =
    countries.find(
      (c) => c.name.toLowerCase() === defaultCountry?.toLowerCase(),
    )?.flag ?? "";
  const [flag, setFlag] = useState(initialFlag);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  function handleCountryChange(e) {
    const [countryName, flagUrl] = e.target.value.split("%");
    setFlag(flagUrl || "");
    setSelectedCountry(countryName);
  }
  return (
    <form
      action={updateProfile}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label>Email address</label>
        <input
          defaultValue={email}
          disabled
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {flag && (
            <img src={flag} alt="Country flag" className="h-5 rounded-sm" />
          )}
        </div>
        <SelectCountry
          countries={countries}
          defaultCountry={defaultCountry}
          onChange={handleCountryChange}
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          inputMode="numeric"
          defaultValue={nationalID}
        />
      </div>
      <div className="flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "Updating Profile..." : "Update profile"}
    </button>
  );
}

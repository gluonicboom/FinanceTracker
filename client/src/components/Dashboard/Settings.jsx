import { useState } from "react";

export default function Settings(){
    const[currency, setCurrency] = useState(
      localStorage.getItem("currency") ||
      "INR");

    const handleCurrencyChange = (value) => {
      setCurrency(value);
      localStorage.setItem("currency", value);
    };

    function handleReset(){
        localStorage.clear();
        window.location.reload();

    };
return(
    <div className="p-6 bg-blue-950 min-h-screen text-white flex justify-center">
        
        <div className="bg-blue-900 p-6 space gap-y-200 w-[800px]  ">
        <h1 className="p-6 font-extrabold text-2xl">Settings</h1>
            <div>
          <label className="block mb-2 font-bold">Currency</label>
          <select
            value={currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className="w-full p-2 rounded bg-blue-800"
          >
            <option value="INR">₹ INR</option>
            <option value="USD">$ USD</option>
          </select>
          </div>

            <div className="p-22 ">
          <button
            onClick={handleReset}
            className="w-full bg-red-600 py-2 rounded"
          >
            Reset All Data
          </button>
        </div>
        </div>
        
    </div>
)



}
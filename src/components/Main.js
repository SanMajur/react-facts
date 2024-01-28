import React from "react";

function Main() {
  return (
    <main className="text-gray-200 bg-hero-bg bg-no-repeat bg-[right_75%] py-[57px] px-[20px]">
      <div className="mx-auto md:max-w-3xl">
        <h1 className="text-[40px] capitalize tracking-tighter">fun facts about React</h1>
        <ul className="mt-[40px] ml-8 md:mr-0 max-w-[400px]">
          <li className="p-2.5 list-disc marker:text-[#61DAFB] marker:text-2xl">Was first released in 2013</li>
          <li className="p-2.5 list-disc marker:text-[#61DAFB] marker:text-2xl">Was originally created by Jordan Walke</li>
          <li className="p-2.5 list-disc marker:text-[#61DAFB] marker:text-2xl">Has well over 100K stars on GitHub</li>
          <li className="p-2.5 list-disc marker:text-[#61DAFB] marker:text-2xl">Is maintained by Facebook</li>
          <li className="p-2.5 list-disc marker:text-[#61DAFB] marker:text-2xl">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
}

export default Main;

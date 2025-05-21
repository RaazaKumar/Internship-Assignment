import React from "react";

function Profile() {
  return (
    <>
      <div className="w-[350px] flex flex-col m-auto h-[100vh]  border ">
        <div className="border-b">
          <div className="m-4 font-medium ">Account Setting</div>
        </div>

        <div className="flex m-4 ">
          <div className="">
            <img
              className="w-[70px] h-[70px] rounded-full bg-amber-500"
              src=""
              alt="Not Available"
            />
          </div>
          <div className="text-[15px] ml-6">
            <h1 className="font-bold">Marry Doe</h1> <p>Marrie@gmail.com</p>
          </div>
        </div>

        <div className="m-4 text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          saepe nostrum, asperiores repellendus culpa perspiciatis quidem
          impedit obcaecati doloribus, iure iusto autem illo qui.
        </div>
      </div>
    </>
  );
}

export default Profile;

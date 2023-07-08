import React from "react";
import { LabelForm } from "../../components/LabelForm";

export const CreateLabelPage = () => {
  return (
    <main className="absolute top-20 left-0 right-0">
      <div className="flex justify-center ">
        <LabelForm label={null} />
      </div>
    </main>
  );
};

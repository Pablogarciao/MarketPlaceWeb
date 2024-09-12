import React, { useEffect, useState } from "react";
import { models } from "../assets/assets"; // Import models from assets.js
import ModelItem from "../components/ModelItem"; // Import ModelItem component

const ModelsManagement = () => {
  const [modelData, setModelData] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const fetchModelData = () => {
    console.log("Fetching all model data...");
    if (Array.isArray(models)) {
      setModelData(models);
      if (models.length > 0) {
        setSelectedImage(models[0].portfolio); // Set the first model's image as default
      }
    } else {
      console.log("Models is not an array");
    }
  };

  useEffect(() => {
    fetchModelData();
  }, []);

  console.log("Model Data:", modelData);

  return modelData.length > 0 ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {modelData.map((model) => (
        <ModelItem
          key={model._id}
          id={model._id}
          name={model.name}
          booking={model.booking_info}
          portfolio={model.portfolio}
          achievements={model.achievements}
        />
      ))}
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default ModelsManagement;

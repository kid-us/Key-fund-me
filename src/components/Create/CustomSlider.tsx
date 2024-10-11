import React from "react";
import "./slider.css";

interface CustomSliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  value,
  min,
  max,
  step,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="relative">
      {/* <label htmlFor="zoom" className="text-white text-sm">
        Zoom in / out
      </label> */}
      <input
        type="range"
        className="custom-slider my-5 w-full bg-black"
        value={value}
        min={min}
        max={max}
        step={step}
        name="zoom"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomSlider;

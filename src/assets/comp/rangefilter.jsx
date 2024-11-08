import { useState } from "react";
import { Range } from "react-range";

const SuperSimple = () => {
  const [values, setValues] = useState([50]);

  return (
    <Range
      step={0.1}
      min={0}
      max={100}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "3px",          // Reduced height
            width: "280px",          // Increased width
            backgroundColor: "gray", // Gray color for track
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "10px",           // Reduced height for thumb
            width: "10px",
            borderRadius: "10px",            // Reduced width for thumb
            backgroundColor: "black", // Gray color for thumb
          }}
        />
      )}
    />
  );
};

export default SuperSimple;

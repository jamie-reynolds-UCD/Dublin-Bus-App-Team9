import { Typography, Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ActivitySuggestion from "./ActivitySuggestion";

const ActivitySuggestionList = ({ activity_type, suggestions, display }) => {
  const [displaysuggestions, setDisplaySuggestions] = useState(display);

  useEffect(() => {
    setDisplaySuggestions(display);
  }, [display]);

  return (
    <>
      <div
        style={
          displaysuggestions == false
            ? { width: "0px", height: "0px", overflow: "hidden" }
            : {
                position: "fixed",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, 0)",
                zIndex: "10000",
                maxHeight: "50%",
                maxWidth: "280px",
                overflowY: "scroll",
                overflowX: "scroll",
              }
        }
      >
        <Box
          borderRadius={5}
          style={{ backgroundColor: "white", padding: "8px" }}
          boxShadow={1}
        >
          <Typography>{activity_type}</Typography>
          {suggestions.map((suggestion) => (
            <ActivitySuggestion activity_suggestion={suggestion} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default ActivitySuggestionList;

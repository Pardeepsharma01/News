export const changeCountry = (country) => {
    console.log("hello")
    return (dispatch) => {
      dispatch({ type: "select", payload: country });
    };
  };
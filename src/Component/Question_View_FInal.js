import React from "react";
import FormHeader from "./FormHeader";
import Question_View from "./Question_View";
import CenterTabs from "./Tabs";
function View_Final(){
    return(
        <div>
            <FormHeader/>
          <CenterTabs/>
          <Question_View/>
        </div>
    );
}

export default View_Final;
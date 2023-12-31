import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useNavigate } from "react-router-dom";
const useStyles= makeStyles({
    root:{
        flexGrow:1,
    },
    tab:{
        fontSize:12,
        color:'$5f6368',
        textTransform:'capitalize',
        height:10,
        fontWeight:"600",
        fontFamily:'Google sans,Roboto,Arial,sans-serif'
    },
    tabs:{
        height:10,
    }
})
function CenterTabs(){
    const navigate = useNavigate();
    const handleClick =() =>{
        console.log("inGotoForm");
        navigate("/view");
    }
    const QuestionClick =() =>{
        console.log("inGotoForm");
        navigate("/Forms");
    }    
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Tabs
            className={classes.tabs}
            textColor="primary"
            indicatorColor="primary"
            centered>
                <Tab label="Questions" className={classes.tab} onClick={QuestionClick}>

                </Tab>
                <Tab label="Responses" className={classes.tab} onClick={handleClick}>

                </Tab>
            </Tabs>
        </Paper>

    );
}

export default CenterTabs;
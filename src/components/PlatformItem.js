import {Typography} from "@mui/material";

function PlatformItem (props) {
    return(
               <div className={props.platform}>
                   <Typography variant="body2" color="black">
                       {props.platform}
                   </Typography>
               </div>
    )
}
export default PlatformItem;
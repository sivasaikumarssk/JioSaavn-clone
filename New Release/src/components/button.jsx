import Button from '@mui/material/Button';

export const Buttons = ({children})=>{
    
    return <Button style={{backgroundColor: "rgb(43,197,180)",borderRadius: "1rem",marginRight: "1rem"}} variant="contained" >{children}</Button>
}   
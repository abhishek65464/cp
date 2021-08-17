import classes from './ServicesComp.module.css';



const ServicesComp = (props) => {

    return ( <
        div className = { classes.cnt } >
        <
        img src = { props.imgicn }
        alt = "loading" / >
        <
        h4 > { props.hd, props.det } < /h4>

        <
        /div>
    )
}

export default ServicesComp;
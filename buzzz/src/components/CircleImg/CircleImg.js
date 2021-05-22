export default function CircleImg(props){
    return(
        <img src={props.src} style={{
            'width': '8%',
            'border-radius': '50%',
        }}/>
    )
}
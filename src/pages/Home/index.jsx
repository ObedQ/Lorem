import ImageSlider from "../../components/image-slider";


export default function Home (){

    return <div className="Main-header">
        <div>
        <p className="Main-header-title">We offer genuinely <br /> <span className="title-styling">noteworthy home <br /> service</span> solutions</p>
        <small>We offer a wide range of professional services. Give us a call, <br />and we'll be there to assist you promptly.</small>
        </div>
        <div className="image-slider">
           <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> 
        </div>
    </div>
}